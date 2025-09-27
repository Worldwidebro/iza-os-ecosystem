#!/usr/bin/env python3
"""
IZA OS Optimization Progress Monitor
===================================

Real-time monitoring of the 12-hour optimization process
"""

import asyncio
import json
import logging
import requests
import time
from datetime import datetime, timedelta
from pathlib import Path
import subprocess

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class OptimizationProgressMonitor:
    """Monitor optimization progress in real-time"""
    
    def __init__(self):
        self.start_time = datetime.now()
        self.total_hours = 12
        self.services = {
            "ollama": "http://localhost:11434",
            "anythingllm": "http://localhost:3001",
            "prometheus": "http://localhost:9090",
            "grafana": "http://localhost:3000"
        }
        
        # Optimization stages
        self.stages = [
            "foundation_setup",
            "ai_agent_integration",
            "browser_automation",
            "deployment_pipeline",
            "security_testing",
            "monitoring_optimization",
            "code_quality_optimization",
            "ai_coding_assistants",
            "database_storage",
            "network_api",
            "integration_testing",
            "final_deployment"
        ]
        
        self.current_stage = 0
        self.progress_data = {
            "start_time": self.start_time.isoformat(),
            "total_hours": self.total_hours,
            "stages_completed": 0,
            "services_status": {},
            "performance_metrics": {},
            "optimization_results": {}
        }
    
    async def monitor_services(self):
        """Monitor all services health"""
        for service_name, url in self.services.items():
            try:
                response = requests.get(f"{url}/api/tags" if "ollama" in service_name else f"{url}/api/health", timeout=5)
                status = "healthy" if response.status_code == 200 else "unhealthy"
            except:
                status = "unhealthy"
            
            self.progress_data["services_status"][service_name] = {
                "status": status,
                "url": url,
                "last_check": datetime.now().isoformat()
            }
    
    async def calculate_progress(self):
        """Calculate overall optimization progress"""
        elapsed_time = datetime.now() - self.start_time
        elapsed_hours = elapsed_time.total_seconds() / 3600
        
        # Calculate stage progress
        self.current_stage = min(int(elapsed_hours), len(self.stages) - 1)
        stage_progress = (elapsed_hours % 1) * 100 if elapsed_hours < self.total_hours else 100
        
        overall_progress = (elapsed_hours / self.total_hours) * 100
        
        self.progress_data.update({
            "elapsed_time": elapsed_hours,
            "overall_progress": min(overall_progress, 100),
            "current_stage": self.current_stage,
            "current_stage_name": self.stages[self.current_stage] if self.current_stage < len(self.stages) else "completed",
            "stage_progress": stage_progress,
            "stages_completed": self.current_stage,
            "estimated_completion": (self.start_time + timedelta(hours=self.total_hours)).isoformat()
        })
    
    async def gather_performance_metrics(self):
        """Gather system performance metrics"""
        try:
            # Get system info
            result = subprocess.run(["ps", "aux"], capture_output=True, text=True)
            process_count = len([line for line in result.stdout.split('\n') if line.strip()])
            
            # Get memory usage
            result = subprocess.run(["vm_stat"], capture_output=True, text=True)
            memory_info = result.stdout
            
            # Get disk usage
            result = subprocess.run(["df", "-h"], capture_output=True, text=True)
            disk_info = result.stdout
            
            self.progress_data["performance_metrics"] = {
                "process_count": process_count,
                "memory_usage": memory_info,
                "disk_usage": disk_info,
                "timestamp": datetime.now().isoformat()
            }
        except Exception as e:
            logger.error(f"Error gathering performance metrics: {e}")
    
    async def check_optimization_results(self):
        """Check optimization results"""
        try:
            # Check if deployment report exists
            report_path = Path("iza-os-ecosystem/ultimate_deployment_report.json")
            if report_path.exists():
                with open(report_path, 'r') as f:
                    report_data = json.load(f)
                    self.progress_data["optimization_results"] = report_data
        except Exception as e:
            logger.error(f"Error checking optimization results: {e}")
    
    async def generate_progress_report(self):
        """Generate comprehensive progress report"""
        await self.monitor_services()
        await self.calculate_progress()
        await self.gather_performance_metrics()
        await self.check_optimization_results()
        
        # Save progress report
        report_path = Path("optimization_progress_report.json")
        with open(report_path, 'w') as f:
            json.dump(self.progress_data, f, indent=2)
        
        return self.progress_data
    
    def print_progress_dashboard(self, progress_data):
        """Print real-time progress dashboard"""
        print("\n" + "="*80)
        print("🚀 IZA OS 12-HOUR OPTIMIZATION PROGRESS DASHBOARD")
        print("="*80)
        
        # Overall progress
        progress_bar = "█" * int(progress_data["overall_progress"] / 5) + "░" * (20 - int(progress_data["overall_progress"] / 5))
        print(f"📊 Overall Progress: {progress_data['overall_progress']:.1f}% [{progress_bar}]")
        print(f"⏰ Elapsed Time: {progress_data['elapsed_time']:.1f} hours")
        print(f"🎯 Current Stage: {progress_data['current_stage_name'].replace('_', ' ').title()}")
        print(f"📈 Stage Progress: {progress_data['stage_progress']:.1f}%")
        
        # Services status
        print(f"\n🔧 Services Status:")
        for service, data in progress_data["services_status"].items():
            status_icon = "✅" if data["status"] == "healthy" else "❌"
            print(f"  {status_icon} {service.title()}: {data['status']} ({data['url']})")
        
        # Performance metrics
        if "performance_metrics" in progress_data:
            print(f"\n📊 Performance Metrics:")
            print(f"  🔄 Running Processes: {progress_data['performance_metrics'].get('process_count', 'N/A')}")
        
        # Time estimates
        remaining_hours = max(0, progress_data["total_hours"] - progress_data["elapsed_time"])
        print(f"\n⏱️  Time Estimates:")
        print(f"  ⏳ Remaining Time: {remaining_hours:.1f} hours")
        print(f"  🏁 Estimated Completion: {progress_data['estimated_completion']}")
        
        print("="*80)
    
    async def run_monitoring(self):
        """Run continuous monitoring"""
        logger.info("🚀 Starting optimization progress monitoring...")
        
        while True:
            try:
                progress_data = await self.generate_progress_report()
                self.print_progress_dashboard(progress_data)
                
                # Check if optimization is complete
                if progress_data["overall_progress"] >= 100:
                    print("\n🎉 OPTIMIZATION COMPLETE!")
                    print("📋 Final report generated: optimization_progress_report.json")
                    break
                
                # Wait before next update
                await asyncio.sleep(30)  # Update every 30 seconds
                
            except KeyboardInterrupt:
                print("\n⏹️  Monitoring stopped by user")
                break
            except Exception as e:
                logger.error(f"Error in monitoring: {e}")
                await asyncio.sleep(30)

async def main():
    """Main monitoring function"""
    monitor = OptimizationProgressMonitor()
    await monitor.run_monitoring()

if __name__ == "__main__":
    asyncio.run(main())
