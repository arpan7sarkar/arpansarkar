# Mac Portfolio

A macOS-inspired interactive developer portfolio built with React, Vite, Tailwind CSS v4, GSAP, and Zustand.

The app recreates a desktop-like experience with draggable windows, a dock, and app-style sections (Finder, Terminal, Safari, Photos, Contact, Resume) to showcase projects and profile content.

![Mac Portfolio Preview](./public/images/wallpaper.png)

## Features

- macOS-style UI with top navbar, dock, and floating windows
- Draggable desktop elements and smooth GSAP-powered interactions
- Finder-inspired project explorer with nested folders/files
- Terminal-like tech stack window
- Safari-like blog/article viewer
- Photos-like gallery window
- Contact window with social links
- Embedded PDF resume preview with download support
- Centralized content and window state management with Zustand

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- GSAP (`gsap`, `@gsap/react`, `Draggable`)
- Zustand + Immer
- react-pdf
- lucide-react
- dayjs

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Then open the local URL shown by Vite (usually `http://localhost:5173`).

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Project Structure

```text
src/
	components/    # UI building blocks (dock, navbar, welcome, home, controls)
	constants/     # App content + navigation + window config
	HOC/           # Window wrapper abstraction
	store/         # Zustand stores (window state, location state)
	windows/       # Window apps (Finder, Terminal, Safari, Resume, etc.)
	App.jsx        # Root desktop composition
	index.css      # Global styles and Tailwind layers
	main.jsx       # App entry point
public/
	images/        # UI assets and project/gallery images
	icons/         # Icon assets
	files/         # Static files (resume PDF)
```

## How to Customize

### Update Portfolio Content

Edit `src/constants/index.js` to change:

- navbar links/icons
- dock apps
- finder folders/files and project metadata
- blog posts
- social links
- tech stack categories

### Update Resume

Replace `public/files/resume.pdf` with your own file.

### Update Branding/Visuals

- Change hero/logo assets in `public/images/`
- Tweak styles, layout, and responsive behavior in `src/index.css`

## Notes

- This interface is optimized for desktop/tablet interactions and includes limited small-screen support.
- Vite path aliases are configured in `vite.config.js` (`#components`, `#constants`, `#store`, `#hoc`, `#windows`).

## License

This project is for personal portfolio use. Add a license file if you plan to distribute it publicly.
