import { useState } from 'react';

function Transcriber() {
  const [audioFile, setAudioFile] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!audioFile) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('audio', audioFile);

    try {
      const res = await fetch('http://localhost:5000/transcribe', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setTranscription(data.transcription || data.error);
    } catch (err) {
      setTranscription('Error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">🎧 Audio Transcription</h2>
      <input
        type="file"
        accept="audio/*"
        onChange={e => setAudioFile(e.target.files[0])}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-1 rounded"
      >
        {loading ? 'Transcribing...' : 'Transcribe'}
      </button>
      {transcription && <p className="mt-3 whitespace-pre-line">{transcription}</p>}
    </div>
  );
}

export default Transcriber;
