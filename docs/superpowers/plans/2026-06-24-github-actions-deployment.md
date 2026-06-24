# GitHub Actions Deployment Workflow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Set up a GitHub Actions workflow to automate building and deploying the website to GitHub Pages when pushing to the `main` branch.

**Architecture:** Create `.github/workflows/deploy.yml` with continuous integration steps to build the React application and deploy it directly using native GitHub Pages deployment actions. Clean up the deprecated `docs/` folder from the repository.

**Tech Stack:** GitHub Actions, Node.js, npm

---

### Task 1: Create GitHub Actions Workflow File

**Files:**
* Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Write the workflow file**

Write the code for `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build React App
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './build'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Commit workflow file**

Run:
```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Actions workflow for auto build and deploy"
```

---

### Task 2: Repository Cleanup

**Files:**
* Modify: [.gitignore](file:///c:/Users/nhutt/OneDrive/Desktop/Project/ficotig.github.io/.gitignore)
* Delete: `/docs` folder (excluding superpowers design and plan documents)

- [ ] **Step 1: Save local specs/plans from docs/ to a temporary location**

Since `docs/superpowers` contains our specs and plans, we should move them out of `docs/` so they don't get deleted, or we can configure Git to delete everything in `docs/` except `docs/superpowers/`.
Wait, let's keep `docs/superpowers/` and only delete the other build assets in `docs/` (e.g. `index.html`, `static/`, etc.) from git tracking.
Let's run a command to delete only the built files from git tracking.
Run:
```bash
git rm -r --cached docs/static
git rm --cached docs/index.html docs/asset-manifest.json docs/app-ads.txt docs/icon.png docs/robots.txt
```
This untracks the built assets from Git while leaving `docs/superpowers/` fully tracked!

- [ ] **Step 2: Add docs/ built assets to gitignore**

Modify [.gitignore](file:///c:/Users/nhutt/OneDrive/Desktop/Project/ficotig.github.io/.gitignore) to ignore all contents of `docs/` except the `superpowers/` folder:
Add the following lines to the end of the file:
```
# docs build output
/docs/*
!/docs/superpowers
```

- [ ] **Step 3: Commit gitignore and deletion changes**

Run:
```bash
git add .gitignore
git commit -m "chore: remove built docs assets from git tracking and ignore them"
```
