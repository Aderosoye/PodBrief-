import React from 'react';
import Recorder from './components/Recorder';
import Upload from './components/Upload';

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">PodBrief Pro</h1>
      <Upload />
      <Recorder />
    </div>
  );
};

export default App;

