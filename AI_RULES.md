# AI Rules — 3D Landing Project

## Stack
- React 19 + Vite 6
- Tailwind CSS v4 (via @tailwindcss/vite, config in CSS)
- Three.js via @react-three/fiber + @react-three/drei
- Motion (formerly Framer Motion), import from "motion/react"
- Deploy: Netlify

## Constraints
- Files ≤ 150 lines
- Show only diffs when editing existing files
- Conventional Commits (feat:, fix:, chore:, perf:)
- Never overwrite entire files without explicit command
- Never commit secrets (.env)

## Architecture
- 3D Canvas: position fixed, behind HTML content
- HTML sections: position relative, z-index 10, scroll over canvas
- Mouse tracking via refs (not state) for 60fps performance
- Motion animations with whileInView for scroll reveals

## File Structure
- Components: src/components/
- Hooks: src/hooks/
- Styles: src/index.css (Tailwind v4 @import)
- No tailwind.config.js or postcss.config.js needed
