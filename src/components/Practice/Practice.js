import React from 'react';
import { Link } from 'react-router-dom';
import './Practice.css';

function Practice() {
  return (
    <div className="practice-container" id="practice">
      <div className="practice-buttons">
        <Link to="/problems">
          <button className="practice-button">
            <img src="/assets/easy-button.png" alt="Button 1" />
          </button>
        </Link>
        <Link to="/problems">
          <button className="practice-button">
            <img src="/assets/medium-button.png" alt="Button 2" />
          </button>
        </Link>
        <Link to="/problems">
          <button className="practice-button">
            <img src="/assets/hard-button.png" alt="Button 3" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Practice;
