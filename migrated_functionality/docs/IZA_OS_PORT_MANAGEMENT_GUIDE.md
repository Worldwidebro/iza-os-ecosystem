# 🚀 IZA OS - Port Management System

## 📋 **Port Allocation Overview**

### **🎯 Core IZA OS Services (3000-3099)**
| Service | Port | Status | Description |
|---------|------|--------|-------------|
| IZA OS Main Dashboard | 3000 | Reserved | Main dashboard interface |
| IZA OS API Gateway | 3001 | Reserved | API routing and gateway |
| IZA OS Unified Dashboard | 3002 | ✅ Active | Current unified dashboard |
| IZA OS Backend Service | 3003 | Reserved | Backend API services |
| IZA OS Frontend | 3004 | Reserved | Frontend application |
| IZA OS WebSocket | 3005 | Reserved | Real-time communication |
| Grafana (Resolved) | 3006 | Reserved | Monitoring dashboard |

### **🤖 AI & LLM Services (8000-8099)**
| Service | Port | Status | Description |
|---------|------|--------|-------------|
| Ollama LLM Server | 11434 | ✅ Active | Local LLM server |
| ChatLLM Interface | 8001 | Reserved | ChatLLM web interface |
| Claude Swarm | 8002 | Reserved | Claude orchestration |
| Anthropic API Proxy | 8003 | Reserved | Anthropic API proxy |
| OpenAI API Proxy | 8004 | Reserved | OpenAI API proxy |
| Django (Resolved) | 8005 | Reserved | Django development |
| MCP Server (Resolved) | 8006 | Reserved | Model Context Protocol |

### **🗄️ Database Services (5000-5099)**
| Service | Port | Status | Description |
|---------|------|--------|-------------|
| PostgreSQL | 5432 | Reserved | Primary database |
| Redis Cache | 6379 | Reserved | Caching layer |
| MongoDB | 27017 | Reserved | Document database |
| pgAdmin | 5050 | Reserved | Database management UI |
| Redis Commander | 8081 | Reserved | Redis management UI |

### **🔧 Development Tools (9000-9099)**
| Service | Port | Status | Description |
|---------|------|--------|-------------|
| Portainer | 9000 | Reserved | Container management |
| Portainer SSL | 9443 | Reserved | Secure container management |
| Prometheus | 9090 | Reserved | Metrics collection |
| SonarQube (Resolved) | 9001 | Reserved | Code quality analysis |
| MinIO (Resolved) | 9002 | Reserved | Object storage |

### **🌐 Web Services (4000-4099)**
| Service | Port | Status | Description |
|---------|------|--------|-------------|
| Nginx | 80 | Reserved | Web server |
| Nginx SSL | 443 | Reserved | Secure web server |
| FastAPI | 8000 | Reserved | FastAPI server |
| Flask | 5000 | Reserved | Flask development |

### **🔗 Integration Services (8100-8199)**
| Service | Port | Status | Description |
|---------|------|--------|-------------|
| n8n Workflow | 5678 | Reserved | Workflow automation |
| Activepieces (Resolved) | 8084 | Reserved | Automation platform |
| Zapier (Resolved) | 8085 | Reserved | Integration platform |
| Webhook Receiver (Resolved) | 8086 | Reserved | Webhook handling |

### **📊 Monitoring Services (9100-9199)**
| Service | Port | Status | Description |
|---------|------|--------|-------------|
| Elasticsearch | 9200 | Reserved | Search engine |
| Kibana | 5601 | Reserved | Data visualization |
| Logstash | 5044 | Reserved | Log processing |
| Jaeger | 16686 | Reserved | Distributed tracing |

### **⚡ Specialized Services (8200-8299)**
| Service | Port | Status | Description |
|---------|------|--------|-------------|
| Streamlit | 8501 | Reserved | Data science apps |
| Jupyter | 8888 | Reserved | Notebook server |
| ngrok Web UI | 4040 | Reserved | Tunnel management |
| VS Code Server (Resolved) | 8087 | Reserved | Remote development |

## 🚀 **Usage Instructions**

### **1. Check Port Status**
```bash
./manage_ports.sh
```

### **2. Start Service on Specific Port**
```bash
./manage_ports.sh start_service "Service Name" 3000 "command"
```

### **3. Kill Process on Port**
```bash
./manage_ports.sh kill_port 3000
```

### **4. Use Docker Compose Override**
```bash
docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d
```

## ⚠️ **Conflict Resolution**

The following conflicts have been resolved:
- **AnythingLLM**: Moved to dedicated port 3001
- **Grafana**: Moved to port 3006 to avoid conflict
- **SonarQube**: Moved to port 9001 to avoid conflict
- **MinIO**: Moved to port 9002 to avoid conflict
- **Activepieces**: Moved to port 8084 to avoid conflict
- **Django**: Moved to port 8005 to avoid conflict
- **MCP Server**: Moved to port 8006 to avoid conflict

## 📋 **Port Range Guidelines**

| Range | Purpose | Examples |
|-------|---------|----------|
| 3000-3099 | Core IZA OS services | Dashboard, API, Backend |
| 8000-8099 | AI and LLM services | Ollama, Claude, OpenAI |
| 5000-5099 | Database services | PostgreSQL, Redis, pgAdmin |
| 9000-9099 | Development tools | Portainer, Prometheus |
| 4000-4099 | Web servers | Nginx, FastAPI, Flask |
| 8100-8199 | Integration services | n8n, Activepieces |
| 9100-9199 | Monitoring services | Elasticsearch, Kibana |
| 8200-8299 | Specialized applications | Streamlit, Jupyter |

---
**IZA OS Port Management System - No More Conflicts!** 🚀
