# Ship Script Usage

## Overview
The Ship script automates the process of updating the package version, staging changes, committing to Git, and deploying to Vercel.

## Installation
1. Save the script to a file named `ship.sh` in your project directory.
2. Make the script executable:
   ```bash
   chmod +x ship.sh
   ```

## Usage
Run the script with the following options:

- To perform a patch version update, stage, commit, and push to Git, and deploy to Vercel with a specific message:
  ```bash
  ./ship.sh -m "Patch version update" --patch --git --vercel
  ```

- To perform a minor version update, stage, commit, and push to Git with a specific message:
  ```bash
  ./ship.sh -m "Minor version update" --minor --git
  ```

- To perform a major version update, deploy to Vercel, and specify a commit message:
  ```bash
  ./ship.sh -m "Major version update" --major --vercel
  ```

- To perform all operations (patch version update, stage, commit, push to Git, and deploy to Vercel) with a specified message:
  ```bash
  ./ship.sh -m "All operations" --patch --git --vercel
  ```

- To perform all operations with the default message:
  ```bash
  ./ship.sh --patch --git --vercel
  ```

Replace `"Patch version update"`, `"Minor version update"`, `"Major version update"`, or `"All operations"` with your actual commit message.