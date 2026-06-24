# Design Document: GitHub Actions Deployment Workflow

**Date:** 2026-06-24  
**Status:** Approved  
**Topic:** Automating build and deployment of the portfolio website to GitHub Pages via GitHub Actions.

## Goal
Implement a continuous integration and continuous deployment (CI/CD) pipeline that triggers on push to the `main` branch, builds the React application, and deploys it automatically to GitHub Pages. This removes the manual step of building locally, copying to `/docs`, and committing build outputs.

## Proposed Changes

### GitHub Actions Workflow
* Create `.github/workflows/deploy.yml` with configuration:
  * Triggers on `push` to `main`.
  * Installs dependencies via `npm install`.
  * Runs production build via `npm run build`.
  * Deploys the `./build` folder directly to GitHub Pages using official GitHub Actions (`actions/upload-pages-artifact` and `actions/deploy-pages`).

### Cleanup and Git Config
* Delete the `docs/` folder from the workspace.
* Add `/docs` to `.gitignore`.

## Verification
* Push the changes to GitHub.
* Check the **Actions** tab on the GitHub repository to verify that the build and deployment run successfully.
* Verify the live site functions properly.
