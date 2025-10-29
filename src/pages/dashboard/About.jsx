import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>About <span className="brand-name">MyMobileHub</span></h1>
          <p>Your Ultimate Destination for Smartphones & Gadgets</p>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop"
            alt="Smartphone Collection"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        {/* Introduction */}
        <div className="about-section">
          <div className="section-header">
            <h2>Welcome to MyMobileHub</h2>
            <div className="accent-line"></div>
          </div>
          <p className="intro-text">
            <strong>MyMobileHub</strong> is your ultimate hub for everything smartphones!
            Our platform provides the latest devices, best deals, and expert insights
            about mobile technology. Whether you're a tech enthusiast or looking for
            your next smartphone, MyMobileHub is here to guide you.
          </p>
        </div>

        {/* What We Offer */}
        <div className="about-section">
          <div className="section-header">
            <h2>What We Offer</h2>
            <div className="accent-line"></div>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Latest Devices</h3>
              <p>Brand new smartphones from top brands with exclusive deals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Expert Reviews</h3>
              <p>Detailed product reviews and honest comparisons</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with regular discounts and offers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping across the country</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mission-card">
            <div className="card-header">
              <h3>Our Mission</h3>
              <div className="icon">🎯</div>
            </div>
            <p>
              To make technology accessible, affordable, and exciting for everyone
              by providing trusted insights and the best deals on smartphones.
            </p>
          </div>
          <div className="vision-card">
            <div className="card-header">
              <h3>Our Vision</h3>
              <div className="icon">👁️</div>
            </div>
            <p>
              To become the most trusted and comprehensive online destination
              for smartphone enthusiasts worldwide.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="about-section">
          <div className="section-header">
            <h2>Our Story</h2>
            <div className="accent-line"></div>
          </div>
          <div className="story-content">
            <p>
              Founded in 2022, MyMobileHub started as a small platform sharing smartphone
              tips and product reviews. Over time, it has grown into a full-fledged
              e-commerce platform delivering the latest devices, exclusive deals,
              and trusted insights to users worldwide.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="about-section">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <div className="accent-line"></div>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">PS</div>
              <h4>Priya Sharma</h4>
              <p>Founder & CEO</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">RV</div>
              <h4>Rohit Verma</h4>
              <p>Lead Tech Reviewer</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">AG</div>
              <h4>Ananya Gupta</h4>
              <p>Content Manager</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">VS</div>
              <h4>Vikram Singh</h4>
              <p>Web Developer</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="about-section">
          <div className="section-header">
            <h2>Our Journey</h2>
            <div className="accent-line"></div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h4>MyMobileHub Founded</h4>
                <p>Started as a smartphone review platform</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>10K+ Customers</h4>
                <p>Reached 10,000 monthly active customers</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>E-commerce Launch</h4>
                <p>Launched exclusive smartphone deals section</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h4>Multi-Brand Expansion</h4>
                <p>Expanded to cover all major smartphone brands</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Brands</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}