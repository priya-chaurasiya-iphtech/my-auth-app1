<<<<<<< HEAD
import React, { useState } from "react";
=======

import React from "react";
>>>>>>> a89b0afcb9ac6f1634513546167c552d6b0da747
import "./Blog.css";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Phones in 2025 under ₹20,000",
      description: "Discover the best smartphones under ₹20,000 in 2025, combining performance, battery life, and value for money.",
      fullContent: `
        <h2>Top 10 Budget Smartphones for 2025</h2>
        <p>The budget smartphone segment has become increasingly competitive in 2025, with manufacturers offering premium features at affordable prices. Here are our top picks under ₹20,000:</p>
        
        <h3>1. Xiaomi Redmi Note 14</h3>
        <p>Featuring a 6.7-inch AMOLED display, Snapdragon 7 Gen 2 processor, and 108MP triple camera system, the Redmi Note 14 continues Xiaomi's tradition of offering excellent value.</p>
        
        <h3>2. Samsung Galaxy A35</h3>
        <p>Samsung's mid-range offering boasts a Super AMOLED display, Exynos 1380 chipset, and 4 years of Android updates, making it a great long-term investment.</p>
        
        <h3>3. Realme 11 Pro+</h3>
        <p>With its 200MP primary camera and 100W fast charging, the Realme 11 Pro+ redefines what's possible in the budget segment.</p>
        
        <h3>Key Considerations:</h3>
        <ul>
          <li>Processor performance for gaming and multitasking</li>
          <li>Camera quality in various lighting conditions</li>
          <li>Battery life and charging speed</li>
          <li>Software update policy</li>
          <li>Build quality and design</li>
        </ul>
        
        <p>When choosing your next budget smartphone, consider your primary usage patterns and prioritize features that matter most to you.</p>
      `,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      author: "Tech Review Team",
      date: "January 15, 2025"
    },
    {
      id: 2,
      title: "5G Phones Launching Soon in India",
      description: "Stay ahead with the latest 5G smartphones set to launch in India, featuring cutting-edge technology and fast connectivity.",
      fullContent: `
        <h2>Upcoming 5G Smartphones in India</h2>
        <p>The Indian smartphone market is set to welcome several exciting 5G devices in the coming months. Here's what to expect:</p>
        
        <h3>Flagship 5G Launches</h3>
        <p><strong>OnePlus 13:</strong> Expected to feature the latest Snapdragon 8 Gen 3 processor, improved Hasselblad cameras, and faster 150W charging.</p>
        
        <p><strong>Samsung Galaxy S25 Series:</strong> Samsung's next flagship lineup will focus on AI-powered features and enhanced 5G connectivity.</p>
        
        <h3>Mid-Range 5G Powerhouses</h3>
        <p><strong>Google Pixel 8a:</strong> Bringing Tensor G3 performance to the mid-range segment with excellent camera capabilities.</p>
        
        <p><strong>Nothing Phone (3):</strong> The third iteration of Nothing's transparent design philosophy with improved Glyph interface.</p>
        
        <h3>Budget 5G Options</h3>
        <p>Several Chinese manufacturers are preparing to launch 5G phones under ₹15,000, making 5G technology more accessible than ever.</p>
        
        <h3>5G Network Expansion</h3>
        <p>With Indian telecom operators rapidly expanding their 5G networks, these new devices will be able to leverage the full potential of high-speed connectivity for streaming, gaming, and productivity.</p>
        
        <p>Stay tuned for our detailed reviews as these devices become available in the Indian market.</p>
      `,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      author: "Mobile Tech Insider",
      date: "January 12, 2025"
    },
    {
      id: 3,
      title: "How to Choose the Right Smartphone for You",
      description: "A complete guide to selecting the perfect smartphone based on your needs, budget, and lifestyle preferences.",
      fullContent: `
        <h2>The Ultimate Smartphone Buying Guide</h2>
        <p>Choosing the right smartphone can be overwhelming with so many options available. This comprehensive guide will help you make an informed decision.</p>
        
        <h3>1. Determine Your Budget</h3>
        <p>Smartphones are available across various price segments:</p>
        <ul>
          <li><strong>Budget (Under ₹15,000):</strong> Basic features, decent performance</li>
          <li><strong>Mid-Range (₹15,000-₹40,000):</strong> Balanced performance and features</li>
          <li><strong>Premium (₹40,000+):</strong> Flagship features, best performance</li>
        </ul>
        
        <h3>2. Identify Your Primary Use Cases</h3>
        <p><strong>For Gamers:</strong> Focus on processor, RAM, and display refresh rate</p>
        <p><strong>For Photographers:</strong> Camera quality, sensor size, and features</p>
        <p><strong>For Business Users:</strong> Battery life, security features, and productivity apps</p>
        
        <h3>3. Operating System Preference</h3>
        <p><strong>Android:</strong> More customization options, wider device selection</p>
        <p><strong>iOS:</strong> Seamless ecosystem integration, regular updates</p>
        
        <h3>4. Key Specifications to Consider</h3>
        <ul>
          <li>Processor and RAM for performance</li>
          <li>Storage capacity and expandability</li>
          <li>Battery capacity and charging speed</li>
          <li>Display quality and size</li>
          <li>Camera system capabilities</li>
        </ul>
        
        <h3>5. Brand and After-Sales Service</h3>
        <p>Consider the brand's reputation, software update policy, and service center availability in your area.</p>
        
        <p>By carefully considering these factors, you can find a smartphone that perfectly matches your needs and budget.</p>
      `,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      author: "Tech Review Team",
      date: "January 10, 2025"
    },
    {
      id: 4,
      title: "Best Camera Phones in 2025",
      description: "Explore smartphones with the best cameras in 2025, from stunning photography to professional-grade videography features.",
      fullContent: `
        <h2>Top Camera Smartphones of 2025</h2>
        <p>Mobile photography has reached new heights in 2025. Here are the best camera phones for every type of photographer.</p>
        
        <h3>Flagship Camera Kings</h3>
        <p><strong>iPhone 16 Pro Max:</strong> Apple's latest flagship features a quad-camera system with periscope zoom and computational photography advancements.</p>
        
        <p><strong>Samsung Galaxy S24 Ultra:</strong> With its 200MP main sensor and advanced AI processing, it's a versatile tool for all shooting scenarios.</p>
        
        <p><strong>Google Pixel 8 Pro:</strong> Google's computational photography magic continues to impress with natural colors and excellent low-light performance.</p>
        
        <h3>Best for Video Content</h3>
        <p><strong>Sony Xperia 1 V:</strong> Professional-grade video features and manual controls make it favorite among videographers.</p>
        
        <h3>Mid-Range Camera Stars</h3>
        <p><strong>OnePlus 12R:</strong> Offers flagship-level camera performance at a more accessible price point.</p>
        
        <p><strong>Vivo X100:</strong> Zeiss-engineered cameras with exceptional portrait capabilities.</p>
        
        <h3>Emerging Camera Technologies</h3>
        <ul>
          <li>AI-powered scene optimization</li>
          <li>Computational photography advancements</li>
          <li>Improved low-light performance</li>
          <li>Professional video capabilities</li>
          <li>Multi-frame processing</li>
        </ul>
        
        <p>Whether you're a professional photographer or casual shooter, there's a camera phone that will exceed your expectations in 2025.</p>
      `,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      author: "Photography Expert",
      date: "January 8, 2025"
    },
    {
      id: 5,
      title: "Battery Life Comparison: Top Smartphones",
      description: "Which smartphones offer the best battery life? We tested the top models to help you make an informed decision.",
      fullContent: `
        <h2>Smartphone Battery Life Showdown 2025</h2>
        <p>Battery life is one of the most important factors for smartphone users. We put the top devices through rigorous testing to find the best performers.</p>
        
        <h3>Testing Methodology</h3>
        <p>Our tests include:</p>
        <ul>
          <li>Continuous video playback at 50% brightness</li>
          <li>Gaming sessions with graphics-intensive titles</li>
          <li>Mixed usage simulating typical daily activities</li>
          <li>Standby time measurement</li>
        </ul>
        
        <h3>Battery Life Champions</h3>
        <p><strong>1. Asus ROG Phone 8:</strong> 6500mAh battery providing over 12 hours of screen-on time</p>
        
        <p><strong>2. Samsung Galaxy A54:</strong> Excellent battery optimization offering 2-day battery life</p>
        
        <p><strong>3. iPhone 16 Plus:</strong> Apple's efficiency combined with large battery capacity</p>
        
        <h3>Fast Charging Leaders</h3>
        <p><strong>Realme GT Neo 5:</strong> 240W charging that goes from 0 to 100% in under 10 minutes</p>
        
        <p><strong>Xiaomi 14 Ultra:</strong> 120W wired and 80W wireless charging capabilities</p>
        
        <h3>Battery Saving Tips</h3>
        <ul>
          <li>Enable adaptive brightness</li>
          <li>Use dark mode where available</li>
          <li>Limit background app activity</li>
          <li>Reduce screen timeout duration</li>
          <li>Disable unnecessary connectivity features</li>
        </ul>
        
        <p>When choosing your next smartphone, consider both battery capacity and the manufacturer's power optimization techniques.</p>
      `,
      image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      author: "Battery Life Analyst",
      date: "January 5, 2025"
    },
    {
      id: 6,
      title: "Foldable Phones: The Future of Mobile?",
      description: "Are foldable phones worth the investment? We explore the pros and cons of this emerging technology.",
      fullContent: `
        <h2>The Foldable Phone Revolution</h2>
        <p>Foldable phones have evolved from niche products to mainstream contenders. Here's everything you need to know about this transformative technology.</p>
        
        <h3>Current Market Leaders</h3>
        <p><strong>Samsung Galaxy Z Fold 6:</strong> The most refined foldable with improved durability and software optimization.</p>
        
        <p><strong>Google Pixel Fold:</strong> Google's take on foldables with clean software and excellent cameras.</p>
        
        <p><strong>OnePlus Open:</strong> Innovative hinge design and lightweight construction.</p>
        
        <h3>Advantages of Foldable Phones</h3>
        <ul>
          <li>Larger screen real estate in compact form factor</li>
          <li>Enhanced multitasking capabilities</li>
          <li>Improved productivity for business users</li>
          <li>Better media consumption experience</li>
          <li>Future-proof technology</li>
        </ul>
        
        <h3>Challenges and Considerations</h3>
        <ul>
          <li>Higher price points compared to traditional smartphones</li>
          <li>Durability concerns with folding mechanisms</li>
          <li>Heavier and thicker when folded</li>
          <li>App compatibility and optimization</li>
          <li>Screen crease visibility</li>
        </ul>
        
        <h3>Who Should Consider Foldable Phones?</h3>
        <p><strong>Ideal for:</strong> Power users, business professionals, content creators, and early adopters who value screen size and multitasking.</p>
        
        <p><strong>Maybe wait:</strong> Budget-conscious users, those who prioritize one-handed use, or users concerned about long-term durability.</p>
        
        <h3>The Future of Foldables</h3>
        <p>With improving technology and decreasing prices, foldable phones are expected to become more accessible and reliable in the coming years.</p>
        
        <p>While not for everyone yet, foldable phones represent an exciting direction for mobile technology innovation.</p>
      `,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      author: "Future Tech Analyst",
      date: "January 3, 2025"
    }
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-wrapper">
          <button className="back-button" onClick={handleBackToBlog}>
            ← Back to Blog
          </button>

          <div className="blog-post-header">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="blog-post-image"
            />
            <div className="blog-post-meta">
              <h1 className="blog-post-title-full">{selectedPost.title}</h1>
              <div className="meta-info">
                <span className="author">By {selectedPost.author}</span>
                <span className="date">{selectedPost.date}</span>
              </div>
            </div>
          </div>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
          />

          <div className="blog-post-footer">
            <button className="back-button" onClick={handleBackToBlog}>
              ← Back to All Articles
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-wrapper">
        <h1 className="blog-title">Mobile Industry Trends 2025</h1>
        <p className="blog-subtitle">
          Latest news, reviews, and insights about smartphones and mobile technology
        </p>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-card"
            >
              <img
                src={post.image}
                alt={post.title}
                className="blog-image"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
                }}
              />
              <div className="blog-content">
                <h2 className="blog-post-title">
                  {post.title}
                </h2>
                <p className="blog-post-description">
                  {post.description}
                </p>
                <div className="blog-card-meta">
                  <span className="blog-date">{post.date}</span>
                </div>
                <button
                  className="read-more-btn"
                  onClick={() => handleReadMore(post)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
