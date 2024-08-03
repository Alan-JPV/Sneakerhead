import React, { useState } from 'react';

function Adm() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttonStyle = (isHovered) => ({
    width: '200px', // Adjusted width
    height: '40px', // Adjusted height
    marginTop: '50px',
    marginBottom: '15px',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: isHovered ? 'darkblue' : 'transparent', // Color change on hover
    color: isHovered ? 'white' : 'black', // Text color change on hover
    transitionDuration: '0.4s',
    cursor: 'pointer',
    fontSize : '18px',
    fontFamily: "Sans-Serif"
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgb(133, 191, 220)',
      height: '100vh',
      width: '250px',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <button
        style={buttonStyle(hoveredButton === 'dashboard')}
        onMouseEnter={() => setHoveredButton('dashboard')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        Dashboard
      </button>
      <button
        style={buttonStyle(hoveredButton === 'product')}
        onMouseEnter={() => setHoveredButton('product')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        Product
      </button>
      <button
        style={buttonStyle(hoveredButton === 'purchases')}
        onMouseEnter={() => setHoveredButton('purchases')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        Purchases
      </button>
      <button
        style={buttonStyle(hoveredButton === 'reviews')}
        onMouseEnter={() => setHoveredButton('reviews')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        Reviews
      </button>
    </div>
  );
}

export default Adm;
