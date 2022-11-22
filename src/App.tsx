import React from 'react';
import Calc from './calc';

function App() {
  const styleTmp = {
    margin:'auto',
    width: '50%',
    marginTop: '250px'
  }
  return (
    <div style={styleTmp}>
      <Calc/>
    </div>
  );
}

export default App;
