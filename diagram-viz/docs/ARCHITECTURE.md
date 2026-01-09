# Architecture Documentation

## Overview

The Diagram Visualization application is a client-side Single Page Application (SPA) designed to provide a seamless environment for writing and previewing Mermaid.js diagrams. It leverages the speed of Vite and the component-based structure of React.

## Directory Structure

```
src/
├── components/         # React components
│   ├── DiagramEditor.tsx   # Text input for Mermaid syntax
│   ├── DiagramPreview.tsx  # Renders the SVG diagram
│   └── Layout.tsx          # Main application wrapper/shell
├── App.tsx             # Main application entry point & state holder
├── main.tsx            # React DOM rendering
└── index.css           # Global styles and Tailwind directives
```

## Component Architecture

### `App.tsx`
The central hub of the application. It acts as the source of truth for the diagram code state.
- **State**: `code` (string) - Holds the current Mermaid source text.
- **Responsibility**: Manages the linkage between the Editor and the Preview components.

### `DiagramEditor`
- **Props**: `code`, `onChange`
- **Responsibility**: Provides a text area for user input. It propagates changes back to the parent `App` component.

### `DiagramPreview`
- **Props**: `code`
- **Responsibility**:
    1.  Receives the `code` string.
    2.  Uses `mermaid.render()` to generate an SVG from the code.
    3.  Handles rendering errors (e.g., syntax errors) gracefully by catching exceptions and displaying a user-friendly error message.
    4.  Uses `dangerouslySetInnerHTML` to inject the generated SVG into the DOM (standard practice for Mermaid).

## Tech Decisions

- **Tailwind CSS**: Chosen for rapid styling and ease of maintaining a consistent design system (dark mode, spacing, typography).
- **Mermaid.js**: The core engine for diagram generation. It runs entirely in the browser, ensuring privacy and speed.
- **Framer Motion**: Used to add subtle entrance animations, properly polishing the user experience.
