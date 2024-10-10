import React from 'react';
import Button from '../shared/components/Button';

function App() {
  const CopyStyle = () => {};
  const applyStyle = () => {};
  return (
    <div>
      <Button onClick={CopyStyle} text="Copy Text Style" />
      <Button onClick={applyStyle} text="apply Text Style" />
    </div>
  );
}

export default App;
