# Dashboard App

A **frontend-only, production-structured dashboard application** built with **React, TypeScript, and Vite**.  
The app includes **authentication flow, protected routes, lazy-loaded pages, and MUI-based theming (light/dark mode)** using a clean, feature-based architecture.

---

## Features

- **Authentication Flow**
  - Login page
  - Protected Dashboard and Settings routes
  - HOC-based access control

- **Lazy Loading**
  - Dashboard and Settings pages are loaded on demand
  - Suspense fallback loader for better user experience

- **Theme System**
  - Light/Dark mode using MUI ThemeProvider
  - Global theme access via custom hooks

- **Feature-Based Architecture**
  - Separation of UI, logic, and system layers
  - Clean and scalable folder structure

- **Custom Hooks**
  - Centralized logic for authentication, theme, and feature-level behavior

---

## Tech Stack

- **React** (with TypeScript)
- **Vite** (development server & build tool)
- **MUI (Material UI)** (UI framework & theming)
- **pnpm** (package manager)
- **React Router** (routing & lazy loading)

---

## Project Structure

```bash
Directory structure:
└── src/
    ├── App.tsx
    ├── app/

    ├── components/
    │   ├── common/

    │   └── layout/

    ├── features/
    │   ├── auth/
    │   │   ├── components/

    │   │   ├── index.js
    │   │   └── pages/

    │   ├── dashboard/
    │   │   ├── components/

    │   │   ├── index.js
    │   │   └── pages/

    │   └── settings/
    │       ├── components/

    │       ├── index.js
    │       └── pages/

    ├── hooks/

    ├── main.tsx
    ├── styles/

    └── utils/

```

---

## Architecture Overview

This project follows a **feature-first architecture**:

### `app/`

System-level setup:

- Routing
- Providers (Theme, Router, Global Context)

### `features/`

Each feature owns its:

- UI (`components/`)
- Route-level pages (`pages/`)
- Logic (`hooks/`)

### `components/`

Reusable, global UI elements:

- Layout components
- Loaders
- Shared UI blocks

### `hooks/`

Reusable React logic:

- Theme state
- Authentication state
- Feature-level logic

---

## Authentication Flow

- Public Route:
  - `/login`
- Protected Routes:
  - `/dashboard`
  - `/settings`

Access control is handled using a **Higher-Order Component (HOC)** that checks authentication state before rendering protected pages.

---

## Lazy Loading Strategy

Pages are loaded dynamically using `React.lazy` and wrapped with `Suspense`:

- Improves initial load performance
- Reduces bundle size
- Shows a global loader during page fetch

---

## Theme System

- Built using **MUI ThemeProvider**
- Supports:
  - Light mode
  - Dark mode
- Theme state is managed via a **custom hook** and exposed globally

---

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Development Server

```bash
pnpm run dev
```

### 3. Build for Production

```bash
pnpm run build
```

## Design Principles

- Separation of Concerns

- UI, logic, and system setup are clearly separated

- Minimal but Scalable

- No unnecessary enterprise complexity

- Clean structure that can grow if needed

- Consistency

- Standard naming and predictable file locations

## Author

- Kamlesh Chandel
- Frontend / MERN Stack Developer
