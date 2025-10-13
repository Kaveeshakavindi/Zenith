import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTrophy, faFire, faCalendar } from '@fortawesome/free-solid-svg-icons';
import './StatsPanel.css';

export default function StatsPanel() {
  const [stats, setStats] = useState({
    totalSessions: 0,
    totalFocusTime: 0,
    streak: 0,
    todaySessions: 0
  });

  useEffect(() => {
    // Load stats from localStorage
    const savedStats = localStorage.getItem('zenith-stats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  const updateStats = (newStats) => {
    setStats(prevStats => {
      const updated = { ...prevStats, ...newStats };
      localStorage.setItem('zenith-stats', JSON.stringify(updated));
      return updated;
    });
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const statsItems = [
    {
      icon: faClock,
      label: 'Total Focus',
      value: formatTime(stats.totalFocusTime),
      color: '#4CAF50'
    },
    {
      icon: faTrophy,
      label: 'Sessions',
      value: stats.totalSessions,
      color: '#2196F3'
    },
    {
      icon: faFire,
      label: 'Streak',
      value: `${stats.streak} days`,
      color: '#FF9800'
    },
    {
      icon: faCalendar,
      label: 'Today',
      value: `${stats.todaySessions} sessions`,
      color: '#9C27B0'
    }
  ];

  return (
    <div className="stats-panel">
      <h3 className="stats-title">Your Progress</h3>
      <div className="stats-grid">
        {statsItems.map((item, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon" style={{ '--stat-color': item.color }}>
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
