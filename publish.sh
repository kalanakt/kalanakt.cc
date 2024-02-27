#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}Adding all changes to the staging area...${NC}"
git add .

echo -e "${GREEN}Committing changes with message: $1${NC}"
git commit -m "$1"

echo -e "${GREEN}Pushing changes to the remote repository...${NC}"
git push origin main

echo -e "${GREEN}Deploying to production using Vercel...${NC}"
vercel --prod

echo -e "${GREEN}Done!${NC}"

