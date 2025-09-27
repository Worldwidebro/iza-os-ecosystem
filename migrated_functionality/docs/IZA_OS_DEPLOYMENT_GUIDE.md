# IZA OS Ecosystem Services - Deployment Guide

## Overview

This guide provides step-by-step instructions for deploying the IZA OS ecosystem services using systemd on Linux systems.

## Prerequisites



- Linux system with systemd

- Python 3.7+ installed

- Flask package installed (`pip install flask`)

- Root/sudo access for systemd service management

## Installation Steps


### 1. Prepare System User

Create a dedicated system user for running IZA OS services

```bash
sudo useradd -r -s /bin/false -d /srv/iza -m iza
sudo chown -R iza:iza /srv/iza

```text


### 2. Deploy Application Files

Copy application files to the system directory

```bash
sudo mkdir -p /srv/iza/{dashboard,unified,business,genixbank,traycer,execution,web-automation}
sudo cp -r /Users/divinejohns/memU/memu/* /srv/iza/
sudo chown -R iza:iza /srv/iza

```text


### 3. Install Service Templates

Copy service templates to systemd directory

```bash
sudo cp iza-os-*.service /etc/systemd/system/

```text


### 4. Reload and Enable Services


```bash
sudo systemctl daemon-reload
sudo systemctl enable iza-os-*

```text


### 5. Start Services


```bash
sudo systemctl start iza-os-*

```text


## Service Management Commands


### Individual Service Control


```bash

# Start a service

sudo systemctl start iza-os-dashboard

# Stop a service

sudo systemctl stop iza-os-dashboard

# Restart a service

sudo systemctl restart iza-os-dashboard

# Check service status

sudo systemctl status iza-os-dashboard

# View service logs

sudo journalctl -u iza-os-dashboard -f

```text


### Bulk Service Management


```bash

# Start all IZA OS services

sudo systemctl start iza-os-*

# Stop all IZA OS services

sudo systemctl stop iza-os-*

# Check status of all services

sudo systemctl status iza-os-*

```text


## Service Ports



- Main Dashboard: 3000

- Unified Dashboard: 3001

- Business Dashboard: 4000

- GenixBank: 5000

- Traycer Frontend: 7000

- Execution Dashboard: 8001

- Web Automation: 9000

## Security Considerations



- All services run as dedicated `iza` user

- Services bind to localhost (127.0.0.1) only

- Restart policies configured to prevent restart loops

- Proper file permissions and ownership

## Troubleshooting


### Service Won't Start


1. Check service status: `sudo systemctl status <service-name>`

2. View logs: `sudo journalctl -u <service-name> -f`

3. Verify file paths and permissions

4. Check if ports are already in use

### Permission Issues


```bash
sudo chown -R iza:iza /srv/iza
sudo chmod -R 755 /srv/iza

```text


### Port Conflicts

Check what's using the ports

```bash
sudo netstat -tlnp | grep :3000
sudo lsof -i :3000

```text


## Maintenance



- Regular log rotation is handled by systemd

- Service files are located in `/etc/systemd/system/`

- Application files are in `/srv/iza/`

- Logs are available via `journalctl`
