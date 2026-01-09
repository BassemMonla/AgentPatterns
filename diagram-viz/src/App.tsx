import { useState } from 'react';
import { Layout } from './components/Layout';
import { DiagramEditor } from './components/DiagramEditor';
import { DiagramPreview } from './components/DiagramPreview';

const defaultDiagram = `graph TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Great!]
    B -- No --> D[Debug]
    D --> B
    C --> E[Deploy]`;

function App() {
  const [code, setCode] = useState(defaultDiagram);

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
        <DiagramEditor code={code} onChange={setCode} />
        <DiagramPreview code={code} />
      </div>
    </Layout>
  );
}

export default App;
