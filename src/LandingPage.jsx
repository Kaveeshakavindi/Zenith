import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faPause, 
  faClock, 
  faCoffee, 
  faMusic, 
  faPalette,
  faCog,
  faArrowRight,
  faCheckCircle,
  faStar,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';

export default function LandingPage({ onGetStarted }) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: faClock,
      title: "Focus Timer",
      description: "25-minute focused work sessions to maximize productivity",
      color: "#ff6b6b"
    },
    {
      icon: faCoffee,
      title: "Break Timer", 
      description: "Short breaks to recharge and maintain mental clarity",
      color: "#4ecdc4"
    },
    {
      icon: faMusic,
      title: "Background Music",
      description: "Ambient sounds to enhance focus and concentration",
      color: "#45b7d1"
    },
    {
      icon: faPalette,
      title: "Custom Themes",
      description: "Beautiful themes to match your style and mood",
      color: "#96ceb4"
    }
  ];

  const benefits = [
    "Increase productivity by 40%",
    "Reduce mental fatigue",
    "Improve focus and concentration", 
    "Better work-life balance",
    "Track your progress",
    "Customizable experience"
  ];

  return (
    <div className={`landing-page ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Zenith</span>
              <br />
              <span className="subtitle">Pomodoro Timer</span>
            </h1>
            <p className="hero-description">
              Master your time with the most beautiful and intuitive Pomodoro timer. 
              Boost your productivity, stay focused, and achieve your goals with style.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Productivity Boost</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
            <button className="get-started-btn" onClick={onGetStarted}>
              <span>Get Started</span>
              <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
            </button>
          </div>
          <div className="hero-visual">
            <div className="timer-preview">
              <div className="circular-timer">
                <div className="timer-ring"></div>
                <div className="timer-content">
                  <span className="timer-time">25:00</span>
                  <span className="timer-label">Focus Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Zenith?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${currentFeature === index ? 'active' : ''}`}
                style={{ '--feature-color': feature.color }}
              >
                <div className="feature-icon">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Set Your Time</h3>
                <p>Choose your focus and break durations to match your workflow</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Start Focus Mode</h3>
                <p>Begin your focused work session with ambient background music</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Take Breaks</h3>
                <p>Relax during break time to recharge your mental energy</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Repeat & Achieve</h3>
                <p>Continue the cycle and watch your productivity soar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="container">
          <h2 className="section-title">Unlock Your Potential</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <FontAwesomeIcon icon={faCheckCircle} className="benefit-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Users Say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <p>"Zenith has completely transformed my workday. I'm more focused and productive than ever!"</p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>Product Designer</span>
              </div>
            </div>
            <div className="testimonial">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <p>"The beautiful UI and smooth animations make using this timer a joy every day."</p>
              <div className="testimonial-author">
                <strong>Mike Chen</strong>
                <span>Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <h2>Ready to Boost Your Productivity?</h2>
          <p>Join thousands of users who have transformed their work habits with Zenith</p>
          <button className="cta-btn" onClick={onGetStarted}>
            <span>Start Your Journey</span>
            <FontAwesomeIcon icon={faHeart} className="btn-icon" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="landing-footer">
        <div className="container">
          <p>Made with <FontAwesomeIcon icon={faHeart} className="heart" /> for productivity enthusiasts</p>
        </div>
      </div>
    </div>
  );
}
