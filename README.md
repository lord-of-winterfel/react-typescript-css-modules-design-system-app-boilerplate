# Note Maker – React + TypeScript Design System App

A vanilla React application built with **React**, **TypeScript**, and **Vite**, featuring an internal design system (tokens, themes, reusable components) and a simple Note Maker app. Styling uses **CSS Modules** only; no external UI libraries.

## Tech Stack

- **React** 18
- **TypeScript**
- **Vite**
- **CSS Modules** for all component styles

## Project Structure

```
src/
├── app/
│   └── App.tsx
├── components/
│   ├── Button/        (Button.tsx, Button.types.ts, Button.module.css)
│   └── Card/          (Card.tsx, Card.module.css)
├── features/
│   └── notes/         (NotesPage, NoteForm, NoteList, NoteItem)
├── theme/             (ThemeProvider, createTheme, lightTheme, darkTheme)
├── tokens/            (colors, spacing, typography, radius)
├── styles/
│   └── global.css
├── hooks/
│   └── useTheme.ts
├── types/
│   └── note.ts
└── main.tsx
```

## Design System

- **Tokens**: Primitive values for colors, spacing, typography, and radius in `src/tokens/`.
- **Themes**: `createTheme()`, `lightTheme`, `darkTheme`. The `ThemeProvider` maps theme values to CSS variables (e.g. `--ui-color-primary`, `--ui-spacing-md`).
- **Components**: `Button` (primary/secondary) and `Card` use CSS Modules and CSS variables for styling.

## Running the App

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (e.g. http://localhost:5173).

## Features

- **Add notes** via the input and “Add Note” button.
- **Display notes** in a list using the Card component.
- **Delete notes** with the Delete button on each note.
- **Theme toggle**: Switch between light and dark theme via the header button.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – TypeScript check + production build
- `npm run preview` – Preview production build
