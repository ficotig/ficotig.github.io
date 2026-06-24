# Design Document: Add Light Fusion App

**Date:** 2026-06-24  
**Status:** Approved  
**Topic:** Adding "Light Fusion" app landing page/marketing route to the website portfolio.

## Goal
Add a route `/light-fusion` to serve as the marketing and privacy support URL for the newly released iOS and Android game **Light Fusion**.

## Out-of-Scope
Adding the app to the main Home page or the navigation bar (retains Route-only layout similar to Kalimba Fun).

## Proposed Changes

### Assets
* **App Icon:** Already downloaded and saved at [light-fusion.png](file:///c:/Users/nhutt/OneDrive/Desktop/Project/ficotig.github.io/src/img/light-fusion.png) (512x512 png).

### New Component: `LightFusion.js`
* Create [LightFusion.js](file:///c:/Users/nhutt/OneDrive/Desktop/Project/ficotig.github.io/src/components/home/LightFusion.js) under `src/components/home/`.
* Mirror [KalimbaFun.js](file:///c:/Users/nhutt/OneDrive/Desktop/Project/ficotig.github.io/src/components/home/KalimbaFun.js) structure:
  * Import custom style from `Home.module.scss`.
  * Import downloaded icon from `../../img/light-fusion.png`.
  * Social links mapping:
    * Google Play: `https://play.google.com/store/apps/details?id=com.ficotig.lightfusion`
    * App Store: `https://apps.apple.com/us/app/light-fusion/id6759330042`
  * Text content:
    * Title: `Light Fusion`
    * Subtitle 1: `The Ultimate Light & Color Puzzle Game`
    * Subtitle 2: `Explore a mesmerizing world where light, color, and logic collide`

### Component Routing: `BaseLayout.js`
* Import the new `LightFusion` component.
* Add path `'/light-fusion'` to the `<Routes>` switcher.

### Metadata: `public/index.html`
* Update keywords meta tag content to include `light fusion` for SEO.

## Verification
* Run local dev server (`npm start`) and navigate to `http://localhost:3000/#/light-fusion`.
* Verify layout, text, icon rendering, and store redirect links.
