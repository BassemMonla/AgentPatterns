# Diagram Visualization Web Interface

A modern, responsive web application for visualizing Mermaid.js diagrams with real-time preview capabilities. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Real-time Visualization**: Instantly render Mermaid.js diagrams as you type.
- **Modern UI**: Sleek, dark-themed interface using Tailwind CSS and Glassmorphism design principles.
- **Split View**: Side-by-side editor and preview pane for efficient workflow.
- **Error Handling**: Graceful error handling for invalid Mermaid syntax.
- **Responsive Design**: optimized layout for various screen sizes.

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Diagramming**: [Mermaid.js](https://mermaid.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/BassemMonla/AgentPatterns.git
    cd AgentPatterns/diagram-viz
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📖 Usage

1.  Open the application in your browser.
2.  In the left editor pane, enter your Mermaid.js graph syntax.
3.  The right pane will automatically update to show the rendered diagram.
4.  Common Mermaid types supported:
    - Flowcharts (`graph TD`, `graph LR`)
    - Sequence Diagrams (`sequenceDiagram`)
    - Class Diagrams (`classDiagram`)
    - State Diagrams (`stateDiagram`)
    - and more!

## 🔧 Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check for code quality issues.
