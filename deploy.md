# 🚀 Deployment Guide untuk sandykaa.com

## Prerequisites
- Server Linux (Ubuntu 20.04/22.04 recommended)
- Domain sandykaa.com sudah pointing ke IP server
- Akses SSH ke server
- Repository GitHub sudah siap

## Step 1: Setup Server & Install Dependencies

```bash
# Login ke server
ssh root@your-server-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install build essentials
sudo apt-get install -y build-essential

# Install Git
sudo apt-get install -y git

# Install Nginx
sudo apt-get install -y nginx

# Install PM2 globally
sudo npm install -g pm2

# Verify installations
node --version  # Should show v18.x.x
npm --version
pm2 --version
nginx -v
```

## Step 2: Clone Repository & Setup Project

```bash
# Create directory for app
sudo mkdir -p /var/www/sandykaa
cd /var/www

# Clone repository (ganti dengan URL repo Anda)
sudo git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git sandykaa
cd sandykaa

# Set permissions
sudo chown -R $USER:$USER /var/www/sandykaa

# Install dependencies
npm install

# Build project
npm run build
```

## Step 3: Setup PM2 untuk Background Process

### Create PM2 ecosystem file

```bash
# Create ecosystem file
nano ecosystem.config.js
```

Paste content berikut:

```javascript
module.exports = {
  apps: [{
    name: 'sandykaa-portfolio',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/var/www/sandykaa',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

### Start application dengan PM2

```bash
# Start application
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 startup script
pm2 startup systemd
# Follow the command output instruction

# Check status
pm2 status
pm2 logs sandykaa-portfolio
```

## Step 4: Setup Nginx sebagai Reverse Proxy

### Create Nginx configuration

```bash
sudo nano /etc/nginx/sites-available/sandykaa.com
```

Paste configuration berikut:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name sandykaa.com www.sandykaa.com;

    # Redirect to HTTPS (akan aktif setelah SSL)
    # return 301 https://$server_name$request_uri;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml;
    gzip_disable "MSIE [1-6]\.";
}
```

### Enable site & restart Nginx

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/sandykaa.com /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Restart nginx
sudo systemctl restart nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

## Step 5: Setup SSL dengan Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d sandykaa.com -d www.sandykaa.com

# Follow prompts:
# - Enter email
# - Agree to terms
# - Choose redirect HTTP to HTTPS (recommended)

# Test auto-renewal
sudo certbot renew --dry-run
```

## Step 6: Update Nginx Configuration untuk HTTPS

Setelah SSL terinstall, Nginx config akan otomatis diupdate. Tapi jika perlu manual edit:

```bash
sudo nano /etc/nginx/sites-available/sandykaa.com
```

Final configuration dengan SSL:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name sandykaa.com www.sandykaa.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name sandykaa.com www.sandykaa.com;

    ssl_certificate /etc/letsencrypt/live/sandykaa.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/sandykaa.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/json application/xml;
}
```

## Step 7: Firewall Configuration

```bash
# Install UFW
sudo apt install ufw

# Allow SSH
sudo ufw allow OpenSSH

# Allow HTTP & HTTPS
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

## Step 8: Update Repository (Git Pull)

Create update script:

```bash
nano /var/www/sandykaa/update.sh
```

```bash
#!/bin/bash
cd /var/www/sandykaa

# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build project
npm run build

# Restart PM2
pm2 restart sandykaa-portfolio

echo "Update completed!"
```

Make executable:

```bash
chmod +x update.sh

# Run update
./update.sh
```

## Step 9: Monitoring & Maintenance

### PM2 Monitoring

```bash
# View logs
pm2 logs sandykaa-portfolio

# Monitor CPU/Memory
pm2 monit

# View detailed info
pm2 info sandykaa-portfolio

# Restart if needed
pm2 restart sandykaa-portfolio
```

### Nginx Logs

```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

### System Resources

```bash
# Check disk space
df -h

# Check memory
free -m

# Check processes
htop
```

## Step 10: Setup Auto-deployment (Optional)

### GitHub Webhook dengan PM2

```bash
# Install pm2 deploy
pm2 install pm2-auto-pull

# Configure webhook
pm2 set pm2-auto-pull:port 8888
pm2 set pm2-auto-pull:apps '{"sandykaa-portfolio":{"secret":"YOUR_SECRET","path":"/var/www/sandykaa","action":"pullAndRestart"}}'
```

### Or use GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Deploy to server
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        script: |
          cd /var/www/sandykaa
          git pull origin main
          npm install
          npm run build
          pm2 restart sandykaa-portfolio
```

## Troubleshooting

### 1. Port 3000 already in use
```bash
# Find process using port
sudo lsof -i :3000
# Kill process
sudo kill -9 PID
```

### 2. PM2 not starting
```bash
# Check logs
pm2 logs
# Clear logs
pm2 flush
# Restart
pm2 restart all
```

### 3. Nginx 502 Bad Gateway
```bash
# Check if app is running
pm2 status
# Check app logs
pm2 logs
# Restart app
pm2 restart sandykaa-portfolio
```

### 4. Permission issues
```bash
# Fix ownership
sudo chown -R $USER:$USER /var/www/sandykaa
# Fix permissions
find /var/www/sandykaa -type d -exec chmod 755 {} \;
find /var/www/sandykaa -type f -exec chmod 644 {} \;
```

## Security Best Practices

1. **Keep system updated**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Setup fail2ban**
   ```bash
   sudo apt install fail2ban
   sudo systemctl enable fail2ban
   ```

3. **Disable root login**
   ```bash
   sudo nano /etc/ssh/sshd_config
   # Set: PermitRootLogin no
   sudo systemctl restart sshd
   ```

4. **Regular backups**
   ```bash
   # Backup database & files
   tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/sandykaa
   ```

## Done! 🎉

Website Anda sekarang live di:
- http://sandykaa.com (akan redirect ke HTTPS)
- https://sandykaa.com
- https://www.sandykaa.com

## Quick Commands Reference

```bash
# Check app status
pm2 status

# Restart app
pm2 restart sandykaa-portfolio

# View logs
pm2 logs

# Update from GitHub
cd /var/www/sandykaa && ./update.sh

# Restart nginx
sudo systemctl restart nginx

# Renew SSL (auto-renew biasanya aktif)
sudo certbot renew
```