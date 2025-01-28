import { useState } from 'react';
import video5 from '../emoj6.mp4';
import './ThirdNo.css';
import { useNavigate } from 'react-router-dom';

function ThirdNo() {
  const [noButtonStyle, setNoButtonStyle] = useState(null);

  const handleNoHover = () => {
    // Generate random positions within the viewport
    const randomTop = Math.random() * 80; // Limit within 80% of viewport height
    const randomLeft = Math.random() * 80; // Limit within 80% of viewport width

    // Update button position
    setNoButtonStyle({
      position: 'absolute',
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      transform: 'translate(-50%, -50%)',
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
          style={noButtonStyle || {}}
          onMouseEnter={handleNoHover}
        >
          No 😞
        </button>
      </div>
    </div>
  );
}

export default ThirdNo;
