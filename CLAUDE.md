# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/portfolio website built with Next.js. The project follows a unique directory structure where the actual Next.js application lives in the `build/` directory, with utility scripts in `bin/`.

## Key Commands

### Development
- **Start dev server**: `./bin/run` (runs `npm run dev` in build directory)
- **Create new post**: `./bin/new-post title of post` (creates markdown file with frontmatter)
- **Build for production**: `./bin/build` (runs `npm run build` in build directory)

### Build Directory Commands (run from `/build`)
- `npm run dev` - Start Next.js development server
- `npm run build` - Build and export static site
- `npm run serve-out` - Serve the exported static site locally
- `npm run generate-social-previews` - Generate social media preview images
- `npm test` - Run Jest tests

### Testing and Quality
- **Run tests**: `cd build && npm test` (uses Jest with Next.js configuration)
- **Linting**: ESLint is configured but no npm script - use `npx eslint .` from build directory

## Architecture

### Directory Structure
- **Root**: Contains `bin/` scripts and `build/` directory
- **`bin/`**: Shell scripts for common operations (run, build, new-post)
- **`build/`**: The actual Next.js application
  - `pages/` - Next.js pages (App Router not used)
  - `components/` - React components with CSS modules
  - `lib/` - Utility functions for content processing
  - `posts/` - Markdown blog posts with frontmatter
  - `projects/` - YAML files describing portfolio projects
  - `public/` - Static assets (images, etc.)

### Content System

**Blog Posts** (`build/posts/`):
- Filename format: `YYYY-MM-DD_post-slug.md`
- Frontmatter: `title`, `date`, `draft` (boolean)
- Processed by `lib/posts.ts` using gray-matter and micromark with GFM
- Images referenced as `../public/path` are rewritten to `/path` during processing
- Draft posts excluded from production builds

**Projects** (`build/projects/`):
- YAML files with `.yml` extension
- Schema defined in `lib/projects.ts` with interfaces `Project` and `ProjectFile`
- Only projects with `publish: true` are shown
- Sorted by year (newest first)

### Key Libraries
- **Next.js 13**: Static site generation with pages router
- **micromark**: Markdown processing with GitHub Flavored Markdown
- **gray-matter**: Frontmatter parsing
- **js-yaml**: YAML processing for project files
- **Prism.js**: Code syntax highlighting
- **TypeScript**: Full TypeScript setup with path aliases (`@/components`, `@/lib`, etc.)

### Post Creation Workflow
The `bin/new-post` script:
1. Takes title as arguments, converts to kebab-case
2. Creates file with format `YYYY-MM-DD_title-slug.md`
3. Adds frontmatter with title, ISO date, and `draft: true`
4. Opens in vim at line 6 (after frontmatter)

### Image Handling
- Images stored in `build/public/images/`
- Social media preview images in `build/public/images/social/`
- Project covers in `build/public/images/projects/[project-name]/`
- Markdown image paths are rewritten during processing (removes `../public` prefix)

## Development Notes

- Uses CSS modules for component styling
- TypeScript strict mode enabled
- ESLint configured with Next.js, React, and Prettier rules
- Jest configured for testing with jsdom environment
- Static export configuration in next.config.js with `trailingSlash: true`