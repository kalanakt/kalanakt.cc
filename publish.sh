#!/bin/bash

# Add all changes to the staging area
git add .

# Commit changes with a provided message
git commit -m "$1"

# Push changes to the remote repository
git push origin main

# Deploy to production using Vercel
vercel --prod
