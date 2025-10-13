import React, { createContext, useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NotificationSystem.css';

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'success', duration = 5000) => {
    const id = Date.now() + Math.random();
    const notification = {
      id,
      message,
      type,
      duration,
    };

    setNotifications(prev => [...prev, notification]);

    setTimeout(() => {
      removeNotification(id);
    }, duration);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const showTimerComplete = (isBreak) => {
    const message = isBreak 
      ? "Break time is over! Time to get back to work! 💪" 
      : "Focus session complete! Great job! Time for a break! ☕";
    const type = isBreak ? 'focus' : 'break';
    addNotification(message, type, 8000);
  };

  const value = {
    addNotification,
    removeNotification,
    showTimerComplete,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer notifications={notifications} onRemove={removeNotification} />
    </NotificationContext.Provider>
  );
};

const NotificationContainer = ({ notifications, onRemove }) => {
  return (
    <div className="notification-container">
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          notification={notification}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

const Notification = ({ notification, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = () => {
    setIsVisible(false);
    setTimeout(() => onRemove(notification.id), 300);
  };

  const getIcon = () => {
    switch (notification.type) {
      case 'focus':
        return <FontAwesomeIcon icon={faCheckCircle} />;
      case 'break':
        return <FontAwesomeIcon icon={faCoffee} />;
      default:
        return <FontAwesomeIcon icon={faCheckCircle} />;
    }
  };

  return (
    <div className={`notification ${notification.type} ${isVisible ? 'visible' : ''}`}>
      <div className="notification-content">
        <div className="notification-icon">
          {getIcon()}
        </div>
        <div className="notification-message">
          {notification.message}
        </div>
        <button className="notification-close" onClick={handleRemove}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="notification-progress">
        <div 
          className="notification-progress-bar"
          style={{ animationDuration: `${notification.duration}ms` }}
        />
      </div>
    </div>
  );
};

export default NotificationProvider;
