import './App.css';
import { Example } from './example/Example';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="py-8 px-6 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">React TanStack Widget</h1>
          <p className="text-gray-600 mt-2">A customizable widget library with TanStack Router, TanStack Query and Tailwind CSS</p>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto p-6 py-12">
        <Example />
      </main>

      <footer className="py-6 px-6 bg-white border-t border-gray-200 mt-12">
        <div className="w-full max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>React TanStack Widget - Built with React, TanStack Router, TanStack Query, and Tailwind CSS</p>
          <p className="mt-2">© {new Date().getFullYear()} - MIT License</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
