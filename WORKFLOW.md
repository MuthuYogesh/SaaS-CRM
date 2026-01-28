# Development Workflow & Notes

## Phase 0 – Planning
- Defined the project scope and core CRM features
- Chose a frontend-first development approach, with a planned backend and database integration in later stages
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

## Phase 1.5 – MUI Foundation
- Installed MUI core packages and Material Icons
- Configured `ThemeProvider` and `CssBaseline` at the root layout level
- Created a minimal base theme to centralize design tokens

### Problems & Learnings
- Clarified which MUI packages are required versus internal dependencies
- Understood the role of `CssBaseline` in normalizing browser styles while preserving application-level CSS
