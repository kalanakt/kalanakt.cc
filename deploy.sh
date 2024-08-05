#!/bin/bash

# Install Playwright dependencies before the build
pnpm exec playwright install-deps

# Build the project using Vercel
vercel build --prod

# Deploy the prebuilt project using Vercel
vercel deploy --prebuilt --prod

echo "Build and deployment completed. Please move to production in the Vercel dashboard."