# Hero Bio List Micro-interactions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the glassmorphic row highlights and emoji rotation transforms for the Hero bio list.

**Architecture:** 
1. Create `EmojiBullet.module.scss` to style the layout and hovers.
2. Refactor `EmojiBullet.js` to use classnames from the new style sheet.
3. Migrate existing inline styles and add micro-interactions for both light and dark modes.

**Tech Stack:** React, SCSS Modules, CSS Transitions.

---

## Task 1: Create Bullet Stylesheet

**Files:**
- Create: `src/components/home/EmojiBullet.module.scss`

- [ ] **Step 1: Write variables.modules imports and define bulletRow styles**
- [ ] **Step 2: Add hover transformations and glass highlights**
- [ ] **Step 3: Define emoji rotation transitions**

---

## Task 2: Component Refactor

**Files:**
- Modify: `src/components/home/EmojiBullet.js`

- [ ] **Step 1: Import module stylesheet**
- [ ] **Step 2: Swap inline CSS objects for classNames**
- [ ] **Step 3: Test compilation and verify transitions**
