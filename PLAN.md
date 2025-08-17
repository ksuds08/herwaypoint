# HerWaypoint MVP Implementation Plan

This document outlines an incremental path to build the full HerWaypoint MVP described in the specification.

## 1. Repository Bootstrapping
- [ ] Initialize TypeScript monorepo layout matching required file tree.
- [ ] Add root `package.json` with scripts for dev, build, deploy, test, lint, and seed.
- [ ] Configure eslint/prettier and basic `wrangler.toml` targeting Pages + KV.
- [ ] Commit initial scaffolding.

## 2. Server Foundations
- [ ] Implement `_worker.ts` to serve static assets and route `/api/*` to server handler.
- [ ] Create server modules (`kv.ts`, `session.ts`, `http.ts`, etc.) with placeholders.
- [ ] Define Zod schemas in `src/server/schemas.ts` mirroring KV data model.

## 3. Frontend Skeleton
- [ ] Scaffold Vite + React app in `/app` with routes and minimal styling.
- [ ] Implement `lib/api.ts` wrappers and basic state management.

## 4. Core Features
- [ ] Waitlist form storing emails in KV.
- [ ] Traveler profile quiz and persistence.
- [ ] Experience feed with TrustBadge and filters.
- [ ] Experience detail page with reservation intent flow.
- [ ] AI endpoints (`/api/ai/ask`, `/api/recommendations`) and TrustScore logic.

## 5. Seeds, Tests & CI
- [ ] Provide JSON seed data and endpoints guarded by `SEED_ENABLED`.
- [ ] Implement unit tests (Vitest) for trust score and validators.
- [ ] Add Playwright smoke test covering happy path.
- [ ] Configure GitHub Actions for lint, unit tests, and deployment.

## 6. Documentation & Polish
- [ ] Expand `README.md` with setup, seeding, testing, and deployment instructions.
- [ ] Ensure mobile layout has no horizontal scroll and passes accessibility basics.

Tracking these tasks in issues or a project board will make the build more manageable. Each step should be accompanied by commits and pull requests with passing tests.

