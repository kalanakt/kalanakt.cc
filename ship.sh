#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'
DATETIME=$(date +"%Y-%m-%d %T")

# Set default values
GIT=true
VERCEL=true
MESSAGE=""

# Parse arguments
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

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")

# Determine new version based on argument
case "$VERSION_TYPE" in
    --patch)
        NEW_VERSION=$(npm version patch --force | sed 's/v//')
        ;;
    --minor)
        NEW_VERSION=$(npm version minor --force | sed 's/v//')
        ;;
    --major)
        NEW_VERSION=$(npm version major --force | sed 's/v//')
        ;;
    *)
        echo -e "${RED}Invalid version type. Please use --patch, --minor, or --major.${NC}"
        exit 1
        ;;
esac

# Update version in package.json
sed -i '' "s/${CURRENT_VERSION}/${NEW_VERSION}/" package.json

# Perform Git operations if enabled
if [ "$GIT" == true ]; then
    echo -e "${GREEN}Adding all changes to the staging area...${NC}"
    git add .

    COMMIT_MESSAGE="changes in v ${NEW_VERSION}"
    if [ -n "$MESSAGE" ]; then
        COMMIT_MESSAGE="$MESSAGE"
    fi

    echo -e "${GREEN}Committing changes with message: $COMMIT_MESSAGE${NC}"
    git commit -m "$COMMIT_MESSAGE"

    echo -e "${GREEN}Pushing changes to the remote repository...${NC}"
    git push origin main
fi

# Perform Vercel deployment if enabled
if [ "$VERCEL" == true ]; then
    echo -e "${GREEN}Deploying to production using Vercel...${NC}"
    vercel --prod
fi

echo -e "${GREEN}Done!${NC}"