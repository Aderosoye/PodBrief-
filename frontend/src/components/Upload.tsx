import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('audio', file);

    const res = await axios.post('http://localhost:5000/transcribe', formData);
    setResult(res.data.transcript);
  };

  return (
    <div className="mt-4">
      <input type="file" accept="audio/*" onChange={e => setFile(e.target.files?.[0] || null)} />
      <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={handleUpload}>Upload</button>
      {result && <p className="mt-2">Transcript: {result}</p>}
    </div>
  );
};

export default Upload;

