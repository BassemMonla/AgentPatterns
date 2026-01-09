import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { Eye, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface DiagramPreviewProps {
    code: string;
}

mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'Outfit',
});

export const DiagramPreview: React.FC<DiagramPreviewProps> = ({ code }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const renderDiagram = async () => {
            if (!containerRef.current) return;

            try {
                const { svg } = await mermaid.render('mermaid-diagram-' + Date.now(), code);
                if (isMounted) {
                    setSvg(svg);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    console.error('Mermaid Render Error:', err);
                    // Mermaid error handling is tricky as it renders to DOM. 
                    // We just catch the throw and show a generic message or try to use the error provided.
                    setError('Invalid Syntax');
                }
            }
        };

        renderDiagram();

        return () => {
            isMounted = false;
        };
    }, [code]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full gap-3"
        >
            <div className="flex items-center gap-2 text-purple-400 mb-2">
                <Eye className="w-5 h-5" />
                <h2 className="font-semibold text-lg">Preview</h2>
            </div>

            <div className="glass flex-1 rounded-xl overflow-hidden relative min-h-[500px] flex items-center justify-center bg-slate-900/40 border border-slate-700/30">
                {error ? (
                    <div className="text-red-400 flex flex-col items-center gap-2 p-4 text-center animate-pulse">
                        <AlertCircle className="w-8 h-8" />
                        <p>{error}</p>
                    </div>
                ) : (
                    <div
                        ref={containerRef}
                        className="w-full h-full p-8 flex items-center justify-center overflow-auto"
                        dangerouslySetInnerHTML={{ __html: svg }}
                    />
                )}
            </div>
        </motion.div>
    );
};
