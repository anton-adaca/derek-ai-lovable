# Derek AI Dashboard

A comprehensive mortgage broker dashboard with AI-powered features.

## Features

- AI-powered inbox management
- Policy search and research  
- Marketing content generation
- Lead generation tools
- Professional dashboard interface

## Project Structure

```
src/
├── components/
│   ├── ui/          # Shadcn/UI components
│   ├── Layout.tsx   # Main layout component
│   ├── AppSidebar.tsx
│   └── ProjectDownload.tsx
├── pages/           # All application pages
│   ├── Dashboard.tsx
│   ├── InboxAI.tsx
│   ├── LeadTools.tsx
│   ├── MarketingStudio.tsx
│   ├── NotFound.tsx
│   ├── PolicySearch.tsx
│   └── Settings.tsx
├── hooks/           # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/             # Utility functions
│   └── utils.ts
├── assets/          # Static assets
│   └── derek-logo.png
└── index.css        # Global styles with design system
```

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- React Router
- TanStack Query

## Getting Started

```bash
npm install
npm run dev
```

## Design System

The project uses a comprehensive design system defined in `src/index.css` with Derek.ai brand colors and semantic tokens.