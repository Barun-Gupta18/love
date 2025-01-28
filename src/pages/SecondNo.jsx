import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import video3 from '../Video3.mp4';
import './FirstPage.css';

function SecondNo() {

  const navigate = useNavigate();

  async function pressNo() {
    navigate('/PleasePleaseSayYes');
  }

  async function pressYes() {
    navigate('/FinallyYes');
  }

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <video className="responsive-video" autoPlay loop muted>
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Text moved outside the container */}
      <h3 className="question-outside">Ek aur bar Soch lo! 😭</h3>
      <div className="button-container">
        <button className="response-button yes-button" onClick={pressYes}>Yes 🤞</button>
        <button className="response-button no-button" onClick={pressNo}>No 😞</button>
      </div>
    </div>
  );
}

export default SecondNo;
