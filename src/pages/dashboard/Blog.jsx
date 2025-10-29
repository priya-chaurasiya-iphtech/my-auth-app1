
import React from "react";
import "./Blog.css";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Phones in 2025 under ₹20,000",
      description: "Discover the best smartphones under ₹20,000 in 2025, combining performance, battery life, and value for money.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "5G Phones Launching Soon in India",
      description: "Stay ahead with the latest 5G smartphones set to launch in India, featuring cutting-edge technology and fast connectivity.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "How to Choose the Right Smartphone for You",
      description: "A complete guide to selecting the perfect smartphone based on your needs, budget, and lifestyle preferences.",
      image: "https://images.unsplash.com/photo-1598327105854-c8674faddf74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "Best Camera Phones in 2025",
      description: "Explore smartphones with the best cameras in 2025, from stunning photography to professional-grade videography features.",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      title: "Battery Life Comparison: Top Smartphones",
      description: "Which smartphones offer the best battery life? We tested the top models to help you make an informed decision.",
      image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      title: "Foldable Phones: The Future of Mobile?",
      description: "Are foldable phones worth the investment? We explore the pros and cons of this emerging technology.",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    }
  ];

  return (
    <div className="blog-container">
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
              <button className="read-more-btn">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
