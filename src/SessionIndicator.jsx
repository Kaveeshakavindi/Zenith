import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './SessionIndicator.css';

export default function SessionIndicator({ isFocusSession }) {
  return (
    <div className="session-indicator">
      <div className={`session-badge ${isFocusSession ? 'focus' : 'break'}`}>
        <div className="session-icon">
          {isFocusSession ? (
            <FontAwesomeIcon icon={faPlay} />
          ) : (
            <FontAwesomeIcon icon={faCoffee} />
          )}
        </div>
        <div className="session-text">
          {isFocusSession ? 'Focus Time' : 'Break Time'}
        </div>
      </div>
    </div>
  );
}
