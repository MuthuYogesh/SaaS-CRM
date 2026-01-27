# CRM SaaS Platform — Project Design Document

**Target Users:** Sales / Admin

## 1. Purpose

This document describes the design decisions, frontend architecture, and long-term vision of the CRM SaaS platform.
It serves as an internal reference during development.

## 2. Product Overview

The product is a modular CRM SaaS platform designed for sales and admin users to manage leads, customers, and interactions through a dashboard-driven UI.

## 3. Target Users

- Sales users
- Admin users

## 4. Core Modules (Stage 1)

- Dashboard
- Leads
- Customers
- Settings

## 5. AI Features (Stage 1 — Mocked)

- AI Customer Summary (mock summary)
- AI Lead Scoring (mock score)
- AI Suggested Next Action (mock suggestion)
- AI Smart Search (simulated NLP search)

## 6. Design Decisions

### Frontend
- Next.js 14 App Router for modern routing and layouts
- Material UI for consistent, accessible, and responsive UI components
- Frontend-first development with mock API and mock AI services
- Local and lifted React state for simplicity; global state management intentionally deferred

### Architecture
- Feature-based frontend architecture for scalable and isolated business logic
- Layered separation between UI, feature logic, service layer (API / AI), and utilities

### AI Strategy
- AI treated as an external service
- Mock AI responses in Stage 1
- Designed for future integration of LLMs, RAG, and MCP without UI refactor

### Backend Strategy
- Frontend-first approach
- Backend introduced later via service layer abstraction without impacting UI components

## 7. AI Roadmap

**Stage 1**
- AI-ready UI
- Loading and error handling

**Stage 2**
- Real backend data
- LLM integration

**Stage 3**
- RAG for contextual AI using CRM data

**Stage 4**
- MCP for tool-based AI orchestration

## 8. Development Plan

**Stage 1**
- Frontend CRM
- Mock APIs
- Mock AI

**Stage 2**
- Backend + database
- Real data integration

**Stage 3**
- AI + RAG
- Accurate summaries and insights

**Stage 4**
- MCP
- Tool-based AI orchestration
- Enterprise-grade SaaS evolution

## 9. Future Expansion

- Accounting module
- HR module
- Banking and payments
- Role-based access control
