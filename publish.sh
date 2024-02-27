#!/bin/bash

echo "Adding all changes to the staging area..."
git add .

echo "Committing changes with message: $1"
git commit -m "$1"

echo "Pushing changes to the remote repository..."
git push origin main

echo "Deploying to production using Vercel..."
vercel --prod

echo "Done!"
