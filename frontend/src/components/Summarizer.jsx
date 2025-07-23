import { useState } from 'react';

function Summarizer() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const summarize = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });
      const data = await res.json();
      setSummary(data.summary || data.error);
    } catch (err) {
      setSummary('Error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">📝 Summary Generator</h2>
      <textarea
        rows={6}
        className="w-full border p-2 mb-2"
        placeholder="Paste text to summarize..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={summarize}
        className="bg-green-600 text-white px-4 py-1 rounded"
      >
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>
      {summary && <p className="mt-3 whitespace-pre-line">{summary}</p>}
    </div>
  );
}

export default Summarizer;

