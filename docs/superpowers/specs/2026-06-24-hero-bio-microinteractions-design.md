# Design Spec: Hero Bio List Micro-interactions

This specification outlines the visual refinements for the bio bullet points on the Home Page. The upgrade moves inline styles to SCSS modules and implements rich, responsive glassmorphic hover effects.

## 1. Aesthetic Goals
* **Satisfying feedback loop**: Adding translation and scaling responses to user cursor hovers.
* **Separation of styling**: Refactoring inline React styles into a modular CSS stylesheet (`EmojiBullet.module.scss`).
* **Visual consistency**: Applying glass highlights and borders styled with colors tailored to light/dark themes.

---

## 2. Component Design & Changes

### A. New Stylesheet (`EmojiBullet.module.scss`)
* **Base Style (`.bulletRow`)**:
  * Flex row alignment with `0.75rem` gap.
  * Border radius `12px`.
  * Padding `0.5rem 0.8rem` to create space for the hover capsule.
  * Thin transparent border `1px solid transparent` to prevent layout shifts.
  * Transition properties utilizing spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
* **Hover State (`.bulletRow:hover`)**:
  * Transform translation: `translateX(6px) scale(1.01)`.
  * Left border accent: `border-left: 3px solid #8D53FF`.
  * **Dark Mode**: `background: rgba(255, 255, 255, 0.03)` and `border-color: rgba(255, 255, 255, 0.05)`.
  * **Light Mode**: `background: rgba(141, 83, 255, 0.04)` and `border-color: rgba(141, 83, 255, 0.06)`.
* **Emoji Icon (`.emoji`)**:
  * Transition scale and rotate.
  * On row hover: `transform: scale(1.15) rotate(-6deg)`.

### B. Component Refactor (`EmojiBullet.js`)
* Remove inline styles objects `bulletStyle`.
* Import `EmojiBullet.module.scss`.
* Wrap content in updated container tags using classnames for styling.

---

## 3. Verification & Testing
* Verify that hover states work correctly on links (e.g. Email contact link, Province maps link).
* Verify that static list items (e.g. Music, Game developer bullets) also highlight nicely on hover.
* Check responsiveness across mobile viewports.
