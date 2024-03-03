#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'
DATETIME=$(date +"%Y-%m-%d %T")

# Set default values
VERSION_TYPE=""
GIT=true
VERCEL=true

# Parse arguments
MESSAGE=""
while [[ $# -gt 0 ]]; do
    case "$1" in
        --patch|--minor|--major)
            VERSION_TYPE="$1"
            shift
            ;;
        --git)
            GIT=true
            shift
            ;;
        --vercel)
            VERCEL=true
            shift
            ;;
        -m)
            MESSAGE="$2"
            shift 2
            ;;
        *)
            shift
            ;;
    esac
done

# Update version in package.json if version type is provided
if [ ! -z "$VERSION_TYPE" ]; then
    npm version $VERSION_TYPE --force -m "$MESSAGE [${DATETIME}]"
fi

# Perform Git operations if enabled
if [ "$GIT" == true ]; then
    echo -e "${GREEN}Adding all changes to the staging area...${NC}"
    git add .

    echo -e "${GREEN}Committing changes with message: $MESSAGE${NC}"
    git commit -m "$MESSAGE [${DATETIME}]"

    echo -e "${GREEN}Pushing changes to the remote repository...${NC}"
    git push origin main
fi

# Perform Vercel deployment if enabled
if [ "$VERCEL" == true ]; then
    echo -e "${GREEN}Deploying to production using Vercel...${NC}"
    vercel --prod
fi

echo -e "${GREEN}Done!${NC}"