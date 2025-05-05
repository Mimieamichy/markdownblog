#!/bin/bash

# Check if SSH key already exists
KEY="$HOME/.ssh/id_ed25519"
if [ -f "$KEY" ]; then
  echo "✅ SSH key already exists at $KEY"
else
  echo "🔐 Generating new SSH key..."
  ssh-keygen -t ed25519 -C "amichy07@gmail.com" -f "$KEY" -N ""
fi

# Start the SSH agent
eval "$(ssh-agent -s)"

# Add private key to SSH agent
ssh-add "$KEY"

# Print the public key
echo "📋 Copy the following SSH key and add it to your GitHub account:"
echo "👉 GitHub → Settings → SSH and GPG keys → New SSH key"
echo ""
cat "$KEY.pub"
echo ""
echo "✅ Done. Now run: ssh -T git@github.com to test the connection."

