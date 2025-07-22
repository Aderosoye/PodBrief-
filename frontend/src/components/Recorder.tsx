import React, { useState, useRef } from 'react';

const Recorder = () => {
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    let chunks: BlobPart[] = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/wav' });
      setAudioURL(URL.createObjectURL(blob));
      chunks = [];
    };

    recorder.start();
    mediaRecorder.current = recorder;
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();
    setRecording(false);
  };

  return (
    <div className="mt-4">
      {recording ? (
        <button onClick={stopRecording} className="bg-red-500 text-white px-3 py-1 rounded">Stop</button>
      ) : (
        <button onClick={startRecording} className="bg-green-500 text-white px-3 py-1 rounded">Record</button>
      )}
      {audioURL && <audio src={audioURL} controls />}
    </div>
  );
};

export default Recorder;

