import { useState } from 'react';
import video5 from '../emoj6.mp4';
import './ThirdNo.css';
import { useNavigate } from 'react-router-dom';

function ThirdNo() {
  const [noButtonStyle, setNoButtonStyle] = useState({}); // Initial style state

  const handleNoHover = () => {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate random positions ensuring the button stays within bounds
    const randomTop = Math.random() * (viewportHeight - 100); // Leave space for button height
    const randomLeft = Math.random() * (viewportWidth - 100); // Leave space for button width

    setNoButtonStyle({
      position: 'absolute',
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
      transition: 'all 0.3s ease', // Smooth movement
    });
  };

  const navigate = useNavigate();

  const FinallyYes = () => {
    navigate('/FinallyYes');
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <video className="responsive-video" autoPlay loop muted>
          <source src={video5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3 className="question-outside">Baby Man jao na! Kitna bhav Khaogi 😩😭</h3>
      <div className="button-container">
        <button className="response-button yes-button" onClick={FinallyYes}>
          Yes 🤞
        </button>
        <button
          className="response-button no-button"
          style={noButtonStyle}
          onMouseEnter={handleNoHover}
        >
          No 😞
        </button>
      </div>
    </div>
  );
}

export default ThirdNo;
