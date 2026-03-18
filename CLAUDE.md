# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Vietnamese wedding invitation and guest management web app ("tmwedding"). Built with Next.js 15 App Router, deployed on Vercel, backed by MongoDB Atlas (provisioned via Terraform).

## Commands

- `npm run dev` — Start dev server on port 3001 (uses Turbopack)
- `npm run build` — Production build (outputs standalone server)
- `npm run lint` — ESLint (next/core-web-vitals + next/typescript)
- `npm run pretty` — Prettier formatting
- `npm run deploy` — Build and deploy to Cloudflare Pages via `@cloudflare/next-on-pages`

## Architecture

### Tech Stack

- **Frontend:** Next.js 15 App Router, React 19, MUI v7, Tailwind CSS v4, Headless UI
- **API layer:** tRPC v11 with SuperJSON transformer (`src/server/trpc/`)
- **Auth:** NextAuth v5 (beta) with Google OAuth provider. Middleware exports auth directly (`src/middleware.ts`). Admin access is email-based role check in `src/utils/auth.ts`.
- **Database:** MongoDB via Mongoose. Connection cached on `globalThis` (`src/server/db/mongodb.ts`).
- **Infrastructure:** Terraform for MongoDB Atlas (project, cluster, DB user) in `terraform/`.

### Key Patterns

- **Path alias:** `@/*` maps to `./src/*`
- **Server actions** in `src/actions/` — auth, guest, invitation-response, user operations
- **tRPC router** at `src/server/trpc/routers/_app.ts` — currently only `invitation` sub-router. Client setup in `src/providers/TRPCProvider.tsx` using `NEXT_PUBLIC_API_BASE_URL` env var.
- **Middleware** runs on Node.js runtime (not Edge) due to Mongoose dependency for auth DB checks
- **Parallel routes** used for dialog modals (e.g., `@removeGuestDialog`, `@removeResponseDialog`)
- **Feature-based organization** under `src/features/` — invitation, guest-list, invitation-responses, login

### Route Structure

- `/invitation/[guestId]` — Personalized wedding invitation (also `/invitation/groom` and `/invitation/bride`)
- `/admin/guest-list` — Guest CRUD with import (CSV via PapaParse)
- `/admin/invitation-responses` — View/manage RSVP responses
- `/admin/wedding-editor` — Wedding content editor
- `/login`, `/signup` — Auth pages (Google OAuth)

### Data Models (Mongoose)

Located in `src/server/db/models/`: `user.model.ts`, `guest.model.ts`, `invitation-response.model.ts`

### Environment Variables

Required: `MONGODB_URI`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXT_PUBLIC_API_BASE_URL`, `AUTH_SECRET`

## Fonts

Custom Google Fonts loaded in root layout: Geist, Geist Mono, Allison, Cormorant Garamond, Dancing Script — exposed as CSS variables (`--font-allison`, `--font-cormorant`, `--font-dancing-script`, etc.)
