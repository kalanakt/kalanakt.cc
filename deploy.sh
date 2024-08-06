#!/bin/bash

# Install Playwright dependencies before the build
pnpm exec playwright install-deps

# remove the vercel output folder
rm -rf .vercel/output
# Build the project using Vercel
vercel build --prod

# Deploy the prebuilt project using Vercel
vercel deploy --prebuilt --prod