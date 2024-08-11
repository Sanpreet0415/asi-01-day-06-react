import React, { useRef } from 'react';

function App() {
  const divRef = useRef(null);

  const handleClick = () => {
    divRef.current.style.backgroundColor = 'lightblue';
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: '100px', height: '100px', border: '1px solid black' }}
        onClick={handleClick}
      >
        Click me
      </div>
    </div>
  );
}

export default App;
