# Design Spec: UI Aesthetics and Animations (Glassmorphism & Iridescent Glow)

This specification outlines the visual upgrade for the Ficotig portfolio website. The design leverages modern Glassmorphism (semi-transparent backdrops, blurred details) combined with dynamic iridescent/aurora background animations to deliver a premium, high-end developer portfolio experience.

## 1. Objectives & Aesthetic Goals
* **Vibrant Ambient Backgrounds**: Layered, slowly moving radial gradient "blobs" that form a breathing aurora.
* **Refined Header/Navbar**: High blur backdrop-filter, double-layered gradient bottom border, active/inactive state visual hierarchy.
* **Glassmorphic Cards**: Floating containers with subtle border highlights, shifting drop-shadows on hover, and smooth spring scaling.
* **Enhanced Details**:
  * Replacing system-dependent emojis with SVGs or FontAwesome icons.
  * Creating cohesive download badge buttons on the App Detail pages.
  * Adding a terminal shell styling on the About page.

---

## 2. Component Design & Changes

### A. Global Layout & Background (`BaseLayout.module.scss`)
* **Background Texture**:
  * Implement an ultra-subtle tech-grid pattern on the body.
  * Add a 15-second loop animation (`@keyframes aurora-shift`) that shifts the focal points of 3 layered radial gradients:
    * Blob A (Indigo/Purple): slowly moves top-left to top-center.
    * Blob B (Pink/Violet): slowly moves bottom-right to center-right.
    * Blob C (Teal/Cyan): low opacity, shifts near the center.
* **Light Mode**: Similar shifting, but with higher opacity transparency (0.04 to 0.07) against a clean `#fcfbfe` canvas.

### B. Navbar Component & Styling (`Navbar.js` & `Navbar.module.scss`)
* **Blur Strength**: Set `backdrop-filter: blur(20px)` and `-webkit-backdrop-filter: blur(20px)`.
* **Link States**:
  * Active links: 100% opacity with a vibrant underline.
  * Inactive links: 65% opacity. On hover, transition to 100% opacity, shift up by `-3px`, and scale slightly.
* **Glass Bottom Border**:
  * Use a subtle gradient: `linear-gradient(90deg, rgba(141, 83, 255, 0.15), rgba(202, 107, 230, 0.15))` in dark mode, and reduced opacity in light mode.

### C. Home Page Games Section (`GamesSection.js` & `GamesSection.module.scss`)
* **Card Upgrades**:
  * Container background: `rgba(255, 255, 255, 0.03)` (dark mode) / `rgba(255, 255, 255, 0.65)` (light mode).
  * Borders: `1px solid rgba(255, 255, 255, 0.08)` (dark mode) / `1px solid rgba(141, 83, 255, 0.08)` (light mode).
  * Hover:
    * Apply scale transformation `scale(1.03) translateY(-4px)` with spring easing.
    * Dynamically styled drop-shadow glow using the game's theme colors:
      * Kalimba: `0 12px 30px rgba(202, 107, 230, 0.15)`
      * Light Fusion: `0 12px 30px rgba(0, 180, 216, 0.15)`
* **"MY APPS" Title**: Bold, uppercase, letter-spaced `0.1em`, and styled with a thin gradient underline.

### D. App Detail Pages (`AppDetail.module.scss`, `KalimbaFun.js`, `LightFusion.js`)
* **Store Badges**: Replace standard styled rectangles with glassmorphic buttons containing SVG/FontAwesome icons.
* **Hover Animations**: Store buttons will scale slightly and transition to the store's official colors (App Store Blue / Google Play Accent).

### E. About Page & Terminal (`Terminal.js` & `Terminal.module.scss`)
* **Glass Terminal**: Increase the terminal background's blur and border styling.
* **Terminal Top Bar**: Highlight control dots (Red, Yellow, Green) and tab borders.
* **Bullet Emojis**: Replace standard emojis (like the Envelope `✉️`) with vector FontAwesome icons (`fa-envelope`, `fa-globe`, etc.) styled with a purple glow.

---

## 3. Tech Stack & Implementation
* **Styling**: SCSS Modules (reusing existing SCSS variables from `variables.modules.scss`).
* **Animations**: Pure CSS using `@keyframes` with `will-change` properties on key properties (`transform`, `background-position`) to prevent repaints.

---

## 4. Verification & Testing
* **Aesthetics Review**: Visual comparison of light and dark modes across all routes (`/`, `/about`, `/privacy-policy`, `/kalimba-fun`, `/light-fusion`).
* **Performance Check**: Verify that animations do not drop frames on mobile viewports.
* **Responsiveness**: Ensure the floating layouts adapt seamlessly to different viewport heights and widths.
