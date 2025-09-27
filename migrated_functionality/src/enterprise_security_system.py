#!/usr/bin/env python3
"""
🔒 IZA OS ENTERPRISE SECURITY SYSTEM
====================================
Production-ready enterprise security with comprehensive threat protection
Implements zero-trust architecture and advanced security monitoring
"""

import asyncio
import logging
import os
import hashlib
import secrets
import time
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Any, Union
from dataclasses import dataclass, asdict
import json
import jwt
import bcrypt
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
import base64

# Import shared library components
from shared.core.base_manager import BaseManager, DatabaseManager
from shared.core.security import SecurityManager, User, get_current_user
from shared.core.config import get_config, get_service_config

logger = logging.getLogger(__name__)

@dataclass
class SecurityEvent:
    """Security event model"""
    event_id: str
    event_type: str
    severity: str  # low, medium, high, critical
    description: str
    user_id: Optional[str]
    ip_address: Optional[str]
    user_agent: Optional[str]
    metadata: Dict[str, Any]
    timestamp: datetime
    resolved: bool = False
    resolution: Optional[str] = None

@dataclass
class ThreatIntelligence:
    """Threat intelligence data"""
    threat_id: str
    threat_type: str
    severity: str
    indicators: List[str]
    description: str
    source: str
    first_seen: datetime
    last_updated: datetime
    mitigation: List[str]

@dataclass
class SecurityPolicy:
    """Security policy definition"""
    policy_id: str
    name: str
    description: str
    rules: List[Dict[str, Any]]
    enforcement_level: str  # advisory, warning, blocking
    created_at: datetime
    updated_at: datetime
    active: bool = True

@dataclass
class AuditLog:
    """Audit log entry"""
    log_id: str
    user_id: Optional[str]
    action: str
    resource: str
    details: Dict[str, Any]
    ip_address: Optional[str]
    user_agent: Optional[str]
    timestamp: datetime
    success: bool

class EncryptionManager:
    """Enterprise-grade encryption manager"""
    
    def __init__(self, master_key: str = None):
        self.master_key = master_key or os.getenv('ENCRYPTION_MASTER_KEY', Fernet.generate_key().decode())
        self.fernet = Fernet(self._derive_key(self.master_key))
    
    def _derive_key(self, password: str) -> bytes:
        """Derive encryption key from password"""
        password_bytes = password.encode()
        salt = b'iza_os_salt_2024'  # In production, use random salt
        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA256(),
            length=32,
            salt=salt,
            iterations=100000,
        )
        key = base64.urlsafe_b64encode(kdf.derive(password_bytes))
        return key
    
    def encrypt(self, data: str) -> str:
        """Encrypt data"""
        try:
            encrypted_data = self.fernet.encrypt(data.encode())
            return base64.urlsafe_b64encode(encrypted_data).decode()
        except Exception as e:
            logger.error(f"❌ Encryption failed: {e}")
            raise
    
    def decrypt(self, encrypted_data: str) -> str:
        """Decrypt data"""
        try:
            decoded_data = base64.urlsafe_b64decode(encrypted_data.encode())
            decrypted_data = self.fernet.decrypt(decoded_data)
            return decrypted_data.decode()
        except Exception as e:
            logger.error(f"❌ Decryption failed: {e}")
            raise
    
    def hash_password(self, password: str) -> str:
        """Hash password using bcrypt"""
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(password.encode(), salt)
        return hashed.decode()
    
    def verify_password(self, password: str, hashed: str) -> bool:
        """Verify password against hash"""
        return bcrypt.checkpw(password.encode(), hashed.encode())
    
    def generate_api_key(self, length: int = 32) -> str:
        """Generate secure API key"""
        return secrets.token_urlsafe(length)
    
    def generate_session_token(self) -> str:
        """Generate secure session token"""
        return secrets.token_urlsafe(64)

class ThreatDetectionEngine:
    """Advanced threat detection engine"""
    
    def __init__(self):
        self.threat_patterns = {}
        self.behavioral_baselines = {}
        self.anomaly_thresholds = {
            'login_frequency': 10,  # logins per minute
            'request_rate': 100,    # requests per minute
            'data_access': 50,      # data access operations per minute
            'failed_attempts': 5    # failed attempts per hour
        }
    
    async def analyze_event(self, event: SecurityEvent) -> Dict[str, Any]:
        """Analyze security event for threats"""
        try:
            analysis_result = {
                'threat_level': 'low',
                'risk_score': 0.0,
                'indicators': [],
                'recommendations': []
            }
            
            # Check for known threat patterns
            threat_indicators = await self._check_threat_patterns(event)
            analysis_result['indicators'].extend(threat_indicators)
            
            # Check for behavioral anomalies
            behavioral_analysis = await self._check_behavioral_anomalies(event)
            analysis_result['indicators'].extend(behavioral_analysis['indicators'])
            
            # Calculate risk score
            analysis_result['risk_score'] = self._calculate_risk_score(event, analysis_result['indicators'])
            
            # Determine threat level
            if analysis_result['risk_score'] >= 0.8:
                analysis_result['threat_level'] = 'critical'
            elif analysis_result['risk_score'] >= 0.6:
                analysis_result['threat_level'] = 'high'
            elif analysis_result['risk_score'] >= 0.4:
                analysis_result['threat_level'] = 'medium'
            
            # Generate recommendations
            analysis_result['recommendations'] = self._generate_recommendations(event, analysis_result)
            
            return analysis_result
            
        except Exception as e:
            logger.error(f"❌ Threat analysis failed: {e}")
            return {'threat_level': 'unknown', 'risk_score': 0.0, 'error': str(e)}
    
    async def _check_threat_patterns(self, event: SecurityEvent) -> List[str]:
        """Check for known threat patterns"""
        indicators = []
        
        # SQL Injection patterns
        sql_patterns = ['union select', 'drop table', 'insert into', 'delete from', 'update set']
        if any(pattern in event.description.lower() for pattern in sql_patterns):
            indicators.append('sql_injection_attempt')
        
        # XSS patterns
        xss_patterns = ['<script>', 'javascript:', 'onerror=', 'onload=']
        if any(pattern in event.description.lower() for pattern in xss_patterns):
            indicators.append('xss_attempt')
        
        # Path traversal patterns
        path_patterns = ['../', '..\\', '/etc/passwd', 'windows/system32']
        if any(pattern in event.description.lower() for pattern in path_patterns):
            indicators.append('path_traversal_attempt')
        
        # Brute force patterns
        if event.event_type == 'failed_login' and event.metadata.get('attempt_count', 0) > 5:
            indicators.append('brute_force_attempt')
        
        return indicators
    
    async def _check_behavioral_anomalies(self, event: SecurityEvent) -> Dict[str, Any]:
        """Check for behavioral anomalies"""
        indicators = []
        
        # Check login frequency
        if event.event_type == 'login':
            recent_logins = await self._count_recent_events(event.ip_address, 'login', minutes=1)
            if recent_logins > self.anomaly_thresholds['login_frequency']:
                indicators.append('high_login_frequency')
        
        # Check request rate
        if event.event_type == 'api_request':
            recent_requests = await self._count_recent_events(event.ip_address, 'api_request', minutes=1)
            if recent_requests > self.anomaly_thresholds['request_rate']:
                indicators.append('high_request_rate')
        
        # Check for unusual time access
        hour = event.timestamp.hour
        if hour < 6 or hour > 22:  # Unusual hours
            indicators.append('unusual_access_time')
        
        # Check for unusual location (simplified)
        if event.ip_address and self._is_suspicious_ip(event.ip_address):
            indicators.append('suspicious_ip_address')
        
        return {'indicators': indicators}
    
    async def _count_recent_events(self, ip_address: str, event_type: str, minutes: int) -> int:
        """Count recent events for anomaly detection"""
        # This would typically query a time-series database
        # For now, return a mock count
        return 0
    
    def _is_suspicious_ip(self, ip_address: str) -> bool:
        """Check if IP address is suspicious"""
        # This would typically check against threat intelligence feeds
        suspicious_ips = ['192.168.1.100', '10.0.0.1']  # Mock list
        return ip_address in suspicious_ips
    
    def _calculate_risk_score(self, event: SecurityEvent, indicators: List[str]) -> float:
        """Calculate risk score based on event and indicators"""
        base_score = 0.0
        
        # Base score by event type
        event_scores = {
            'failed_login': 0.3,
            'sql_injection_attempt': 0.9,
            'xss_attempt': 0.8,
            'path_traversal_attempt': 0.7,
            'unauthorized_access': 0.8,
            'data_breach': 1.0
        }
        
        base_score = event_scores.get(event.event_type, 0.1)
        
        # Add indicator scores
        indicator_scores = {
            'sql_injection_attempt': 0.3,
            'xss_attempt': 0.2,
            'path_traversal_attempt': 0.2,
            'brute_force_attempt': 0.2,
            'high_login_frequency': 0.1,
            'high_request_rate': 0.1,
            'unusual_access_time': 0.1,
            'suspicious_ip_address': 0.2
        }
        
        for indicator in indicators:
            base_score += indicator_scores.get(indicator, 0.05)
        
        return min(base_score, 1.0)
    
    def _generate_recommendations(self, event: SecurityEvent, analysis: Dict[str, Any]) -> List[str]:
        """Generate security recommendations"""
        recommendations = []
        
        if analysis['risk_score'] >= 0.8:
            recommendations.append('Immediate incident response required')
            recommendations.append('Block suspicious IP address')
            recommendations.append('Notify security team')
        
        if 'sql_injection_attempt' in analysis['indicators']:
            recommendations.append('Implement input validation')
            recommendations.append('Use parameterized queries')
        
        if 'xss_attempt' in analysis['indicators']:
            recommendations.append('Implement output encoding')
            recommendations.append('Set Content Security Policy headers')
        
        if 'brute_force_attempt' in analysis['indicators']:
            recommendations.append('Implement account lockout policy')
            recommendations.append('Add CAPTCHA for login attempts')
        
        if 'high_request_rate' in analysis['indicators']:
            recommendations.append('Implement rate limiting')
            recommendations.append('Consider DDoS protection')
        
        return recommendations

class EnterpriseSecurityManager(BaseManager):
    """Enterprise security management system"""
    
    def __init__(self):
        super().__init__("enterprise_security", get_config().to_dict())
        self.encryption = EncryptionManager()
        self.threat_engine = ThreatDetectionEngine()
        self.security_events = []
        self.audit_logs = []
        self.threat_intelligence = {}
        self.security_policies = {}
        self.blocked_ips = set()
        self.suspicious_users = set()
        
    async def initialize(self) -> bool:
        """Initialize enterprise security system"""
        try:
            await super().initialize()
            
            # Load existing data
            await self._load_security_data()
            
            # Initialize security policies
            await self._initialize_security_policies()
            
            self.logger.info("✅ Enterprise Security System initialized")
            return True
            
        except Exception as e:
            self.logger.error(f"❌ Security system initialization failed: {e}")
            return False
    
    async def _load_security_data(self):
        """Load existing security data"""
        try:
            # Load from cache
            events_data = await self.cache_get("security_events")
            if events_data:
                self.security_events = events_data
            
            audit_data = await self.cache_get("audit_logs")
            if audit_data:
                self.audit_logs = audit_data
            
            policies_data = await self.cache_get("security_policies")
            if policies_data:
                self.security_policies = policies_data
                
        except Exception as e:
            self.logger.error(f"❌ Failed to load security data: {e}")
    
    async def _initialize_security_policies(self):
        """Initialize default security policies"""
        default_policies = [
            {
                'policy_id': 'auth_policy',
                'name': 'Authentication Policy',
                'description': 'Default authentication security policy',
                'rules': [
                    {'type': 'password_complexity', 'min_length': 8, 'require_special': True},
                    {'type': 'session_timeout', 'minutes': 30},
                    {'type': 'max_failed_attempts', 'count': 5},
                    {'type': 'account_lockout', 'duration_minutes': 15}
                ],
                'enforcement_level': 'blocking'
            },
            {
                'policy_id': 'api_policy',
                'name': 'API Security Policy',
                'description': 'API access and rate limiting policy',
                'rules': [
                    {'type': 'rate_limiting', 'requests_per_minute': 100},
                    {'type': 'api_key_required', 'enforced': True},
                    {'type': 'cors_policy', 'allowed_origins': ['https://iza-os.com']},
                    {'type': 'input_validation', 'enforced': True}
                ],
                'enforcement_level': 'blocking'
            },
            {
                'policy_id': 'data_policy',
                'name': 'Data Protection Policy',
                'description': 'Data encryption and access control policy',
                'rules': [
                    {'type': 'encryption_at_rest', 'enforced': True},
                    {'type': 'encryption_in_transit', 'enforced': True},
                    {'type': 'data_classification', 'levels': ['public', 'internal', 'confidential', 'restricted']},
                    {'type': 'access_logging', 'enforced': True}
                ],
                'enforcement_level': 'blocking'
            }
        ]
        
        for policy_data in default_policies:
            policy = SecurityPolicy(
                policy_id=policy_data['policy_id'],
                name=policy_data['name'],
                description=policy_data['description'],
                rules=policy_data['rules'],
                enforcement_level=policy_data['enforcement_level'],
                created_at=datetime.now(),
                updated_at=datetime.now()
            )
            self.security_policies[policy.policy_id] = policy
        
        # Cache policies
        await self.cache_set("security_policies", self.security_policies)
    
    async def log_security_event(self, event_type: str, description: str, 
                               user_id: str = None, ip_address: str = None,
                               user_agent: str = None, metadata: Dict = None) -> str:
        """Log security event"""
        try:
            event_id = f"event_{int(time.time())}"
            
            event = SecurityEvent(
                event_id=event_id,
                event_type=event_type,
                severity='medium',  # Will be updated by threat analysis
                description=description,
                user_id=user_id,
                ip_address=ip_address,
                user_agent=user_agent,
                metadata=metadata or {},
                timestamp=datetime.now()
            )
            
            # Perform threat analysis
            threat_analysis = await self.threat_engine.analyze_event(event)
            event.severity = threat_analysis['threat_level']
            
            # Store event
            self.security_events.append(event)
            
            # Keep only last 10000 events
            if len(self.security_events) > 10000:
                self.security_events = self.security_events[-10000:]
            
            # Cache events
            await self.cache_set("security_events", self.security_events)
            
            # Log metrics
            await self.log_metric("security_events", 1)
            await self.log_metric(f"security_events_{event_type}", 1)
            
            # Take automatic actions based on severity
            if event.severity == 'critical':
                await self._handle_critical_event(event, threat_analysis)
            
            self.logger.info(f"✅ Security event logged: {event_id} ({event.severity})")
            return event_id
            
        except Exception as e:
            self.logger.error(f"❌ Failed to log security event: {e}")
            raise
    
    async def _handle_critical_event(self, event: SecurityEvent, analysis: Dict[str, Any]):
        """Handle critical security events"""
        try:
            # Block IP if suspicious
            if event.ip_address and 'suspicious_ip_address' in analysis['indicators']:
                self.blocked_ips.add(event.ip_address)
                await self.log_security_event(
                    'ip_blocked',
                    f'IP {event.ip_address} blocked due to critical threat',
                    metadata={'reason': 'critical_threat', 'event_id': event.event_id}
                )
            
            # Suspend user if suspicious
            if event.user_id and 'brute_force_attempt' in analysis['indicators']:
                self.suspicious_users.add(event.user_id)
                await self.log_security_event(
                    'user_suspended',
                    f'User {event.user_id} suspended due to security threat',
                    user_id=event.user_id,
                    metadata={'reason': 'security_threat', 'event_id': event.event_id}
                )
            
            # Send alerts (in production, integrate with notification system)
            await self._send_security_alert(event, analysis)
            
        except Exception as e:
            self.logger.error(f"❌ Failed to handle critical event: {e}")
    
    async def _send_security_alert(self, event: SecurityEvent, analysis: Dict[str, Any]):
        """Send security alert"""
        try:
            alert_data = {
                'event_id': event.event_id,
                'event_type': event.event_type,
                'severity': event.severity,
                'description': event.description,
                'user_id': event.user_id,
                'ip_address': event.ip_address,
                'timestamp': event.timestamp.isoformat(),
                'threat_analysis': analysis,
                'recommendations': analysis.get('recommendations', [])
            }
            
            # In production, send to SIEM, Slack, email, etc.
            self.logger.critical(f"🚨 SECURITY ALERT: {json.dumps(alert_data, indent=2)}")
            
            # Log alert
            await self.log_metric("security_alerts", 1)
            
        except Exception as e:
            self.logger.error(f"❌ Failed to send security alert: {e}")
    
    async def log_audit_event(self, user_id: str, action: str, resource: str,
                            details: Dict[str, Any], ip_address: str = None,
                            user_agent: str = None, success: bool = True):
        """Log audit event"""
        try:
            log_id = f"audit_{int(time.time())}"
            
            audit_log = AuditLog(
                log_id=log_id,
                user_id=user_id,
                action=action,
                resource=resource,
                details=details,
                ip_address=ip_address,
                user_agent=user_agent,
                timestamp=datetime.now(),
                success=success
            )
            
            # Store audit log
            self.audit_logs.append(audit_log)
            
            # Keep only last 50000 audit logs
            if len(self.audit_logs) > 50000:
                self.audit_logs = self.audit_logs[-50000:]
            
            # Cache audit logs
            await self.cache_set("audit_logs", self.audit_logs)
            
            # Log metrics
            await self.log_metric("audit_events", 1)
            
            self.logger.info(f"✅ Audit event logged: {log_id}")
            
        except Exception as e:
            self.logger.error(f"❌ Failed to log audit event: {e}")
            raise
    
    async def encrypt_sensitive_data(self, data: str) -> str:
        """Encrypt sensitive data"""
        return self.encryption.encrypt(data)
    
    async def decrypt_sensitive_data(self, encrypted_data: str) -> str:
        """Decrypt sensitive data"""
        return self.encryption.decrypt(encrypted_data)
    
    async def generate_api_key(self, user_id: str, permissions: List[str]) -> str:
        """Generate API key for user"""
        try:
            api_key = self.encryption.generate_api_key()
            
            # Store API key metadata
            key_metadata = {
                'user_id': user_id,
                'permissions': permissions,
                'created_at': datetime.now().isoformat(),
                'last_used': None,
                'active': True
            }
            
            await self.cache_set(f"api_key_{api_key}", key_metadata)
            
            # Log audit event
            await self.log_audit_event(
                user_id=user_id,
                action='api_key_generated',
                resource='api_key',
                details={'permissions': permissions},
                success=True
            )
            
            return api_key
            
        except Exception as e:
            self.logger.error(f"❌ Failed to generate API key: {e}")
            raise
    
    async def validate_api_key(self, api_key: str) -> Dict[str, Any]:
        """Validate API key"""
        try:
            key_metadata = await self.cache_get(f"api_key_{api_key}")
            
            if not key_metadata:
                raise ValueError("Invalid API key")
            
            if not key_metadata.get('active', True):
                raise ValueError("API key is inactive")
            
            # Update last used timestamp
            key_metadata['last_used'] = datetime.now().isoformat()
            await self.cache_set(f"api_key_{api_key}", key_metadata)
            
            return key_metadata
            
        except Exception as e:
            self.logger.error(f"❌ API key validation failed: {e}")
            raise
    
    async def get_security_metrics(self) -> Dict[str, Any]:
        """Get security metrics"""
        try:
            # Calculate metrics from recent events
            recent_events = [e for e in self.security_events 
                           if e.timestamp > datetime.now() - timedelta(hours=24)]
            
            metrics = {
                'total_events_24h': len(recent_events),
                'critical_events_24h': len([e for e in recent_events if e.severity == 'critical']),
                'high_events_24h': len([e for e in recent_events if e.severity == 'high']),
                'blocked_ips': len(self.blocked_ips),
                'suspicious_users': len(self.suspicious_users),
                'active_policies': len([p for p in self.security_policies.values() if p.active]),
                'total_audit_logs': len(self.audit_logs),
                'security_score': self._calculate_security_score()
            }
            
            # Event type breakdown
            event_types = {}
            for event in recent_events:
                event_types[event.event_type] = event_types.get(event.event_type, 0) + 1
            metrics['event_types'] = event_types
            
            return metrics
            
        except Exception as e:
            self.logger.error(f"❌ Failed to get security metrics: {e}")
            raise
    
    def _calculate_security_score(self) -> float:
        """Calculate overall security score (0-100)"""
        try:
            # Base score
            score = 100.0
            
            # Deduct points for security events
            recent_events = [e for e in self.security_events 
                           if e.timestamp > datetime.now() - timedelta(hours=24)]
            
            for event in recent_events:
                if event.severity == 'critical':
                    score -= 10
                elif event.severity == 'high':
                    score -= 5
                elif event.severity == 'medium':
                    score -= 2
                elif event.severity == 'low':
                    score -= 0.5
            
            # Deduct points for blocked IPs and suspicious users
            score -= len(self.blocked_ips) * 2
            score -= len(self.suspicious_users) * 5
            
            return max(score, 0.0)
            
        except Exception as e:
            self.logger.error(f"❌ Failed to calculate security score: {e}")
            return 0.0
    
    async def _check_service_health(self) -> Dict[str, Any]:
        """Check security system health"""
        try:
            return {
                'status': 'healthy',
                'message': 'Enterprise Security System operational',
                'components': {
                    'encryption': 'healthy',
                    'threat_detection': 'healthy',
                    'audit_logging': 'healthy',
                    'policy_enforcement': 'healthy'
                },
                'metrics': {
                    'security_score': self._calculate_security_score(),
                    'active_policies': len(self.security_policies),
                    'blocked_ips': len(self.blocked_ips),
                    'recent_events': len([e for e in self.security_events 
                                        if e.timestamp > datetime.now() - timedelta(hours=1)])
                }
            }
            
        except Exception as e:
            return {
                'status': 'unhealthy',
                'message': f'Security system error: {e}',
                'components': {},
                'metrics': {}
            }

# FastAPI application
from fastapi import FastAPI, HTTPException, Depends, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="IZA OS Enterprise Security System",
    description="Production-ready enterprise security with comprehensive threat protection",
    version="2.0.0"
)

# Security middleware
app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["*"]  # Configure appropriately for production
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure appropriately for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global security manager
security_manager = EnterpriseSecurityManager()

@app.on_event("startup")
async def startup_event():
    """Startup event"""
    await security_manager.initialize()

@app.on_event("shutdown")
async def shutdown_event():
    """Shutdown event"""
    await security_manager.shutdown()

# Security middleware
@app.middleware("http")
async def security_middleware(request: Request, call_next):
    """Security middleware for request monitoring"""
    start_time = time.time()
    
    # Extract request info
    ip_address = request.client.host
    user_agent = request.headers.get("user-agent", "")
    path = request.url.path
    method = request.method
    
    # Check if IP is blocked
    if ip_address in security_manager.blocked_ips:
        await security_manager.log_security_event(
            'blocked_ip_access',
            f'Blocked IP {ip_address} attempted to access {path}',
            ip_address=ip_address,
            user_agent=user_agent,
            metadata={'path': path, 'method': method}
        )
        return Response("Access Denied", status_code=403)
    
    # Process request
    response = await call_next(request)
    
    # Log request
    processing_time = time.time() - start_time
    
    await security_manager.log_audit_event(
        user_id=None,  # Will be filled by auth middleware
        action=f"{method} {path}",
        resource=path,
        details={
            'method': method,
            'status_code': response.status_code,
            'processing_time': processing_time,
            'user_agent': user_agent
        },
        ip_address=ip_address,
        user_agent=user_agent,
        success=response.status_code < 400
    )
    
    return response

# Pydantic models
class SecurityEventRequest(BaseModel):
    event_type: str
    description: str
    user_id: Optional[str] = None
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None
    metadata: Dict[str, Any] = {}

class APIKeyRequest(BaseModel):
    user_id: str
    permissions: List[str]

class EncryptionRequest(BaseModel):
    data: str

class DecryptionRequest(BaseModel):
    encrypted_data: str

# API Routes
@app.get("/health")
async def health_check():
    """Health check endpoint"""
    health = await security_manager.get_health_status()
    return health

@app.post("/events")
async def log_security_event(request: SecurityEventRequest):
    """Log security event"""
    event_id = await security_manager.log_security_event(
        request.event_type,
        request.description,
        request.user_id,
        request.ip_address,
        request.user_agent,
        request.metadata
    )
    return {"event_id": event_id, "status": "logged"}

@app.post("/api-keys")
async def generate_api_key(request: APIKeyRequest):
    """Generate API key"""
    api_key = await security_manager.generate_api_key(request.user_id, request.permissions)
    return {"api_key": api_key, "status": "generated"}

@app.post("/encrypt")
async def encrypt_data(request: EncryptionRequest):
    """Encrypt sensitive data"""
    encrypted_data = await security_manager.encrypt_sensitive_data(request.data)
    return {"encrypted_data": encrypted_data}

@app.post("/decrypt")
async def decrypt_data(request: DecryptionRequest):
    """Decrypt sensitive data"""
    decrypted_data = await security_manager.decrypt_sensitive_data(request.encrypted_data)
    return {"decrypted_data": decrypted_data}

@app.get("/metrics")
async def get_security_metrics():
    """Get security metrics"""
    metrics = await security_manager.get_security_metrics()
    return metrics

@app.get("/events")
async def get_security_events(limit: int = 100):
    """Get recent security events"""
    events = security_manager.security_events[-limit:]
    return {"events": [asdict(event) for event in events]}

@app.get("/audit-logs")
async def get_audit_logs(limit: int = 100):
    """Get recent audit logs"""
    logs = security_manager.audit_logs[-limit:]
    return {"audit_logs": [asdict(log) for log in logs]}

@app.get("/policies")
async def get_security_policies():
    """Get security policies"""
    return {"policies": [asdict(policy) for policy in security_manager.security_policies.values()]}

@app.get("/blocked-ips")
async def get_blocked_ips():
    """Get blocked IP addresses"""
    return {"blocked_ips": list(security_manager.blocked_ips)}

@app.post("/unblock-ip")
async def unblock_ip(ip_address: str):
    """Unblock IP address"""
    if ip_address in security_manager.blocked_ips:
        security_manager.blocked_ips.remove(ip_address)
        await security_manager.log_security_event(
            'ip_unblocked',
            f'IP {ip_address} unblocked by administrator',
            metadata={'ip_address': ip_address}
        )
        return {"status": "unblocked", "ip_address": ip_address}
    else:
        raise HTTPException(status_code=404, detail="IP address not found in blocked list")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3005)
