import Transcriber from './components/Transcriber';
import Summarizer from './components/Summarizer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🎙 PodBrief Pro</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Transcriber />
        <Summarizer />
      </div>
    </div>
  );
}

export default App;
