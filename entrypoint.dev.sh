#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails
rm -f /rails/tmp/pids/server.pid

# Install dependencies if they don't exist
if [ ! -f /usr/local/bundle/config ]; then
    echo "Installing gems..."
    bundle install
fi

# Wait for database to be ready
echo "Waiting for database..."
until pg_isready -h db -p 5432 -U postgres; do
    echo "Database is unavailable - sleeping"
    sleep 2
done
echo "Database is ready!"

# Setup database if it doesn't exist
echo "Setting up database..."
bundle exec rails db:prepare

# Install Node.js dependencies
echo "Installing Node dependencies..."
npm install

# Run the container's main process
exec "$@"