# 🚀 IZA OS - Additional Platforms Integration Guide

## 🎯 **Platform Overview**

### **📊 pgAdmin - Database Management**
- **Purpose**: PostgreSQL database administration
- **URL**: http://localhost:5050
- **Credentials**: admin@izaos.com / izaos2024
- **Use Case**: Database administration, SQL queries, schema management

### **🌐 ngrok - Secure Tunneling**
- **Purpose**: Expose local services to internet
- **Installation**: Run `./setup_ngrok.sh`
- **Usage**: `ngrok http [port]` to expose services
- **Use Case**: Webhook testing, remote access, service sharing

### **🤖 WrenAI - AI Analytics Platform**
- **Website**: https://wren.ai
- **Integration**: API-based
- **Use Case**: AI-powered analytics, business intelligence
- **Setup**: Get API key and configure in IZA OS

### **📈 Wren - Data Platform**
- **Website**: https://www.wren.co
- **Integration**: API + SQL
- **Use Case**: Data engineering, ETL pipelines, data warehousing
- **Setup**: Configure API key for data pipeline automation

### **🐳 Portainer - Container Management**
- **Purpose**: Docker container management UI
- **URL**: http://localhost:9000
- **SSL**: https://localhost:9443
- **Use Case**: Container orchestration, Docker management

## 🚀 **Deployment Instructions**

### **1. Deploy All Platforms**
```bash
./deploy_additional_platforms.sh
```

### **2. Individual Platform Deployment**
```bash
# pgAdmin
docker-compose -f docker-compose-pgadmin.yml up -d

# Portainer
docker-compose -f docker-compose-portainer.yml up -d

# ngrok
./setup_ngrok.sh
```

### **3. API Key Configuration**
```bash
# WrenAI
export WRENAI_API_KEY="your_wrenai_api_key"

# Wren
export WREN_API_KEY="your_wren_api_key"
```

## 🔗 **Integration with IZA OS**

### **Database Integration**
- pgAdmin connects to your PostgreSQL databases
- Manage database schemas and queries
- Monitor database performance

### **Container Management**
- Portainer manages all Docker containers
- Deploy and monitor IZA OS services
- Container health monitoring

### **External Access**
- ngrok exposes local services to internet
- Share dashboard with remote team members
- Webhook testing for integrations

### **Data Analytics**
- WrenAI provides AI-powered insights
- Wren handles data pipeline automation
- Integrated with IZA OS data sources

## 📊 **Platform URLs**

| Platform | Local URL | Purpose |
|----------|-----------|---------|
| pgAdmin | http://localhost:5050 | Database Management |
| Portainer | http://localhost:9000 | Container Management |
| Portainer SSL | https://localhost:9443 | Secure Container Management |
| ngrok | Generated URL | External Access |

## 🎯 **Next Steps**

1. **Deploy Platforms**: Run `./deploy_additional_platforms.sh`
2. **Configure APIs**: Set up WrenAI and Wren API keys
3. **Access Dashboards**: Use the provided URLs
4. **Integrate**: Connect platforms with IZA OS ecosystem

---
**IZA OS - Additional Platforms Integration Complete!** 🚀
