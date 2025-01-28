import { useState } from 'react';
import video5 from '../emoj6.mp4';
import './FirstPage.css';
import { useNavigate } from 'react-router-dom';

function ThirdNo() {
  const [noButtonStyle, setNoButtonStyle] = useState(null); // Start with no inline styles

  const handleNoHover = () => {
    // Generate random positions within the viewport
    const randomTop = Math.random() * 90; // Between 0% and 90% of the viewport height
    const randomLeft = Math.random() * 90; // Between 0% and 90% of the viewport width

    // Update the button's position
    setNoButtonStyle({
      position: 'absolute', // Switch to absolute positioning
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      transform: 'translate(-50%, -50%)',
    });
  };

  const navigate = useNavigate();

  async function FinallyYes() {
    navigate('/FinallyYes');
  }

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <video className="responsive-video" autoPlay loop muted>
          <source src={video5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Text moved outside the container */}
      <h3 className="question-outside">Baby Man jao na! Kitna bhav Khaogi 😩😭</h3>
      <div className="button-container">
        <button className="response-button yes-button" onClick={FinallyYes}>
          Yes 🤞
        </button>
        <button
          className="response-button no-button"
          style={noButtonStyle || {}} // Apply inline styles only after hover
          onMouseEnter={handleNoHover}
        >
          No 😞
        </button>
      </div>
    </div>
  );
}

export default ThirdNo;
