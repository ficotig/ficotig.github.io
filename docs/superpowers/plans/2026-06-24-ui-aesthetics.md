# UI Aesthetics and Animations Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the Glassmorphism with Dynamic Iridescent Glow UI upgrade across the Ficotig portfolio website.

**Architecture:** 
1. Build optimized CSS background animations on `BaseLayout.module.scss` using `@keyframes` to shift radial gradients.
2. Upgrade header navbar glassmorphic properties and navigation states.
3. Design and structure glassmorphic card containers with glowing colored dropshadows on the home page app list.
4. Replace hardcoded/plain icon structures with FontAwesome/SVG styled components.

**Tech Stack:** React, SCSS Modules, Material-UI (MUI), FontAwesome.

---

## Task 1: Background & Aurora Animations

**Files:**
- Modify: `src/components/BaseLayout.module.scss`

- [ ] **Step 1: Implement shifting radial gradients for light and dark modes**
- [ ] **Step 2: Add keyframe animations for slow shifts**
- [ ] **Step 3: Verify style compilation and preview rendering**

---

## Task 2: Navbar & Navigation Refinement

**Files:**
- Modify: `src/components/Navbar.module.scss`

- [ ] **Step 1: Increase backdrop filter blur value to 20px**
- [ ] **Step 2: Apply gradient border bottom and opacity levels to inactive navigation links**
- [ ] **Step 3: Update hover state translations and scale transforms**

---

## Task 3: App Cards & Home Page Upgrades

**Files:**
- Modify: `src/components/home/GamesSection.module.scss`
- Modify: `src/components/home/GamesSection.js`

- [ ] **Step 1: Redesign cards with glassmorphism backgrounds**
- [ ] **Step 2: Add hover shadows using specific game colors (Pink for Kalimba, Cyan for Light Fusion)**
- [ ] **Step 3: Bold and update letter-spacing on "MY APPS" title**

---

## Task 4: Store Badges & App Detail Pages

**Files:**
- Modify: `src/components/home/AppDetail.module.scss`
- Modify: `src/components/home/KalimbaFun.js`
- Modify: `src/components/home/LightFusion.js`

- [ ] **Step 1: Style App Store & Google Play download badges to use glass borders and custom colored icons**
- [ ] **Step 2: Update JSX files to map badges correctly**

---

## Task 5: About Page & Terminal Upgrades

**Files:**
- Modify: `src/components/about/Terminal.module.scss`
- Modify: `src/components/about/Terminal.js`
- Modify: `src/components/about/About.js`

- [ ] **Step 1: Styling about terminal with border and color highlights**
- [ ] **Step 2: Replace standard envelope emojis with SVG envelope icons**
