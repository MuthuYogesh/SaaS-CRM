# Development Workflow & Notes

## Phase 0 – Planning
- Defined the project scope and core CRM features
- Chose a frontend-first development approach, with planned backend and database integration in later stages
- Designed the application to be AI-ready, with Stage 1 using mock AI implementations and future stages enabling real AI features

## Phase 1 – Scaffolding
- Created a monorepo structure to host both frontend and backend codebases
- Bootstrapped the frontend using `create-next-app` with TypeScript and the App Router
- Selected ESLint for code quality enforcement and intentionally avoided Tailwind CSS and the React Compiler to reduce early complexity

### Key Decisions
- **TypeScript**: Chosen for better long-term maintainability, stronger data contracts, and clearer data shapes, especially for future AI integration
- **App Router**: Adopted for modern routing patterns, layouts, and scalability
- **Monorepo**: Selected to keep frontend and backend development aligned within a single repository
- **Fonts**: Managed using Next.js layout-level font optimization rather than MUI
- **Styling**: Adopted Material UI as the primary styling solution; CSS Modules deferred for now

## Phase 1.1 – MUI Foundation
- Installed MUI core packages and Material Icons
- Introduced a base MUI theme to centralize design tokens
- Prepared the application for global theming using MUI

### Problems & Learnings
- Clarified which MUI packages are required versus internal dependencies
- Understood the role of `CssBaseline` in normalizing browser styles while preserving application-level CSS

## Phase 1.2 – Hydration & Client Boundary Fixes

### Issue
- Encountered hydration mismatch errors when integrating MUI with Next.js App Router
- Server-rendered HTML did not match client-rendered output due to incorrect client boundary placement and Emotion style injection order

### Root Cause
- Initially attempted to use MUI themeproviders within a Server Component, causing server-to-client serialization issues
- The MUI theme object contains functions, which cannot be serialized across the server–client boundary
- MUI uses Emotion for styling, which injects `<style>` tags at runtime
- Without a controlled insertion point, Emotion injected styles in a different position during client hydration
- This caused React to detect mismatched DOM trees and trigger hydration errors

### Solution
- Introduced a dedicated client-only ThemeProvider wrapper component
- Configured an Emotion cache with a fixed insertion point
- Added an Emotion insertion point meta tag in the root layout to ensure deterministic style injection

### Outcome
- Hydration errors fully resolved
- Stable SSR and client hydration behavior achieved
- MUI integration aligned with Next.js App Router best practices

### Final Resolution
- Replaced manual Emotion cache handling with MUI’s official App Router adapter
- Adopted `AppRouterCacheProvider` to ensure deterministic style injection
- Eliminated hydration mismatches caused by CSS-in-JS timing differences
