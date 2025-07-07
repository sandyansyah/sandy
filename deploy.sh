#!/bin/bash

# Deploy script for sandykaa.com
# Usage: ./deploy.sh

set -e  # Exit on error

echo "🚀 Starting deployment for sandykaa.com..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
APP_DIR="/var/www/sandykaa"
APP_NAME="sandykaa-portfolio"
GITHUB_REPO="https://github.com/YOUR_USERNAME/YOUR_REPO.git"  # Change this!

# Function to print colored output
print_status() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[!]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root!"
   exit 1
fi

# Step 1: Pull latest changes
print_status "Pulling latest changes from GitHub..."
cd $APP_DIR
git pull origin main || {
    print_error "Failed to pull from GitHub"
    exit 1
}

# Step 2: Install dependencies
print_status "Installing dependencies..."
npm install || {
    print_error "Failed to install dependencies"
    exit 1
}

# Step 3: Build the project
print_status "Building the project..."
npm run build || {
    print_error "Build failed"
    exit 1
}

# Step 4: Restart PM2
print_status "Restarting PM2 process..."
pm2 restart $APP_NAME || {
    print_warning "PM2 restart failed, trying to start..."
    pm2 start ecosystem.config.js || {
        print_error "Failed to start PM2"
        exit 1
    }
}

# Step 5: Save PM2 state
print_status "Saving PM2 state..."
pm2 save

# Step 6: Check application status
print_status "Checking application status..."
sleep 3  # Wait for app to start
if pm2 list | grep -q "online.*$APP_NAME"; then
    print_status "Application is running!"
else
    print_error "Application is not running properly"
    print_warning "Check logs with: pm2 logs $APP_NAME"
    exit 1
fi

# Step 7: Test if site is accessible
print_status "Testing site accessibility..."
if curl -s -o /dev/null -w "%{http_code}" https://sandykaa.com | grep -q "200\|301\|302"; then
    print_status "Site is accessible!"
else
    print_warning "Site might not be accessible. Check nginx configuration."
fi

# Show summary
echo ""
echo "========================================="
echo -e "${GREEN}Deployment completed successfully!${NC}"
echo "========================================="
echo "🌐 Site: https://sandykaa.com"
echo "📊 Status: pm2 status"
echo "📝 Logs: pm2 logs $APP_NAME"
echo "🔄 Restart: pm2 restart $APP_NAME"
echo "========================================="

# Optional: Show recent logs
print_status "Recent application logs:"
pm2 logs $APP_NAME --lines 10 --nostream