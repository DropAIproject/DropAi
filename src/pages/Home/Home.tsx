"use client"

import { useState, useEffect } from "react"
import "./home.css"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(featureInterval)
  }, [])

  const features = [
    {
      title: "Airdrop Scanner",
      description: "AI-powered scanning of blockchain projects preparing for airdrops",
      icon: "🔍",
    },
    {
      title: "Personalized Checklist",
      description: "Get customized tasks, registrations, and deadlines for each airdrop",
      icon: "✅",
    },
    {
      title: "Anti-Scam Filter",
      description: "Stay protected from fake projects with our advanced filtering system",
      icon: "🛡️",
    },
    {
      title: "Pro Mode",
      description: "Automate wallet interactions based on predefined farming strategies",
      icon: "⚡",
    },
  ]

  return (
    <div className="home-container">
      <div className={`hero-section ${isVisible ? "visible" : ""}`}>
        <div className="logo-container">
          <div className="logo">
            <span className="drop">Drop</span>
            <span className="ai">Ai</span>
          </div>
        </div>

        <h1 className="title">The Smart Way to Hunt Airdrops</h1>
        <p className="subtitle">AI-powered tools to find, analyze, and optimize your airdrop strategy</p>

        <div className="cta-buttons">
          <button className="primary-button">Get Started</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">Powered by AI</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${index === activeFeature ? "active" : ""}`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Airdrops Tracked</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50k+</span>
          <span className="stat-label">Active Users</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">$2M+</span>
          <span className="stat-label">Value Claimed</span>
        </div>
      </div>

      <div className="pro-section">
        <div className="pro-content">
          <h2 className="pro-title">Upgrade to Pro Mode</h2>
          <p className="pro-description">
            Automate your airdrop farming with wallet automation and advanced strategies
          </p>
          <button className="pro-button">Upgrade Now</button>
        </div>
        <div className="pro-glow"></div>
      </div>

      
    </div>
  )
}
