import React from 'react';
import { Layers } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                        <Layers className="w-6 h-6 text-blue-400" />
                    </div>
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Mermaid Viz
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">v1.0.0</span>
                </div>
            </header>

            <main className="flex-1 p-6 container mx-auto max-w-7xl">
                {children}
            </main>

            <footer className="p-6 text-center text-gray-500 text-sm glass mt-auto">
                <p>Built with ❤️ using React + Mermaid</p>
            </footer>
        </div>
    );
};
