import React from 'react';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';

interface DiagramEditorProps {
    code: string;
    onChange: (value: string) => void;
}

export const DiagramEditor: React.FC<DiagramEditorProps> = ({ code, onChange }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full gap-3"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-blue-400">
                    <Code className="w-5 h-5" />
                    <h2 className="font-semibold text-lg">Editor</h2>
                </div>
            </div>

            <div className="glass flex-1 p-1 rounded-xl overflow-hidden shadow-xl h-[500px] flex flex-col">
                <textarea
                    value={code}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Enter Mermaid code here..."
                    className="flex-1 w-full h-full bg-transparent border-none resize-none p-4 text-sm font-mono focus:ring-0 leading-relaxed"
                    spellCheck={false}
                />
                <div className="p-3 bg-slate-900/50 border-t border-slate-700/50 flex justify-end">
                    <span className="text-xs text-slate-500">Auto-updating</span>
                </div>
            </div>
        </motion.div>
    );
};
