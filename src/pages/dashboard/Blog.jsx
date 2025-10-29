// import React from "react";

// export default function Blog() {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "Top 5 iPhone Features in 2025",
//       description:
//         "Explore the latest iPhone features including camera upgrades, battery life improvements, and new iOS functionalities.",
//       image:
//         "data:image/jpeg;base64,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",
//     },
//     {
//       id: 2,
//       title: "iPhone vs Android: Which is better?",
//       description:
//         "A detailed comparison between iPhone and Android devices to help you choose the best smartphone for your needs.",
//       image:
//         "data:image/jpeg;base64,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",
//     },
//     {
//       id: 3,
//       title: "Tips & Tricks for iPhone Users",
//       description:
//         "Discover hidden features, shortcuts, and tips that every iPhone user should know to make the most of their device.",
//       image:
//         "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=400&auto=format&fit=crop",
//     },
//   ];

//   return (
//     <div>
//       <h1>MyPhoneHub Blog</h1>
//       <p>Latest news, tips, and insights about iPhones and their ecosystem.</p>

//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
//         {blogPosts.map((post) => (
//           <div
//             key={post.id}
//             style={{
//               flex: "1 1 250px",
//               backgroundColor: "#fff",
//               borderRadius: "8px",
//               boxShadow: "0 0 8px rgba(0,0,0,0.2)",
//               overflow: "hidden",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <img src={post.image} alt={post.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
//             <div style={{ padding: "12px" }}>
//               <h3>{post.title}</h3>
//               <p>{post.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
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