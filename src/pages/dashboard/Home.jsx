import React, { useState, useEffect } from "react";
import "./Home.css";

const categories = ["Apple", "Samsung", "OnePlus", "Vivo", "Realme", "Xiaomi"];

const mobileBrands = {
  Apple: [
    { id: 1, name: "iPhone 15 Pro", price: 999, image: "data:image/jpeg;base64,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", discount: "$48 OFF" },
    { id: 2, name: "iPhone 15", price: 799, image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80", discount: "$30 OFF" },
    { id: 3, name: "iPhone 14", price: 699, image: "data:image/jpeg;base64,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", discount: "$25 OFF" },
    { id: 18, name: "iPhone 13", price: 599, image: "data:image/jpeg;base64,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", discount: "$20 OFF" },
    { id: 19, name: "iPhone SE", price: 429, image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=400&q=80", discount: "$15 OFF" }
  ],
  Samsung: [
    { id: 4, name: "Galaxy S25 Ultra", price: 1199, image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80", discount: "$50 OFF" },
    { id: 5, name: "Galaxy Z Fold 5", price: 1799, image: "https://images.unsplash.com/photo-1685540198098-8c8c84f28ee0?auto=format&fit=crop&w=400&q=80", discount: "$100 OFF" },
    { id: 20, name: "Galaxy S24", price: 799, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80", discount: "$40 OFF" },
    { id: 21, name: "Galaxy A54", price: 449, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80", discount: "$30 OFF" }
  ],
  OnePlus: [
    { id: 6, name: "OnePlus 13 Pro", price: 899, image: "https://images.unsplash.com/photo-1661961119676-2ff6e3e1d5f6?auto=format&fit=crop&w=400&q=80", discount: "$40 OFF" },
    { id: 7, name: "OnePlus 13", price: 699, image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80", discount: "$35 OFF" },
    { id: 22, name: "OnePlus 12", price: 799, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80", discount: "$45 OFF" },
    { id: 23, name: "OnePlus Nord", price: 399, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80", discount: "$25 OFF" }
  ],
  Vivo: [
    { id: 8, name: "Vivo X100 Pro", price: 749, image: "https://images.unsplash.com/photo-1606813901875-f823eb7f5e9c?auto=format&fit=crop&w=400&q=80", discount: "$30 OFF" },
    { id: 9, name: "Vivo V30", price: 499, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80", discount: "$25 OFF" },
    { id: 24, name: "Vivo Y27", price: 199, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80", discount: "$15 OFF" }
  ],
  Realme: [
    { id: 10, name: "Realme GT 3", price: 599, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=400&q=80", discount: "$20 OFF" },
    { id: 11, name: "Realme 11 Pro", price: 399, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80", discount: "$15 OFF" },
    { id: 25, name: "Realme C55", price: 179, image: "https://images.unsplash.com/photo-1598327105854-c8674faddf74?auto=format&fit=crop&w=400&q=80", discount: "$10 OFF" }
  ],
  Xiaomi: [
    { id: 12, name: "Xiaomi 14 Ultra", price: 799, image: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?auto=format&fit=crop&w=400&q=80", discount: "$35 OFF" },
    { id: 13, name: "Redmi Note 13", price: 299, image: "https://images.unsplash.com/photo-1598327105854-c8674faddf74?auto=format&fit=crop&w=400&q=80", discount: "$20 OFF" },
    { id: 26, name: "Poco X6", price: 249, image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80", discount: "$18 OFF" }
  ]
};

const featuredDeals = [
  { id: 14, name: "iPhone 15 Pro Max", price: 1199, originalPrice: 1247, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&q=80", brand: "Apple" },
  { id: 15, name: "Samsung Galaxy S25", price: 899, originalPrice: 949, image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80", brand: "Samsung" },
  { id: 16, name: "OnePlus 13 Pro", price: 899, originalPrice: 939, image: "https://images.unsplash.com/photo-1661961119676-2ff6e3e1d5f6?auto=format&fit=crop&w=400&q=80", brand: "OnePlus" }
];

// Custom images for the hero banner and special offers
const customImages = {
  heroBanner: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  specialOffer: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  featuredProduct1: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  featuredProduct2: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  featuredProduct3: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
};

export default function Home() {
  const [activeBrand, setActiveBrand] = useState("Apple");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  // Auto slide for featured mobiles - now showing 3 at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        (prev + 1) % Math.ceil(mobileBrands[activeBrand].length / 3)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [activeBrand]);

  const handleBrandClick = (brand) => {
    setActiveBrand(brand);
    setCurrentSlide(0);
  };

  const handleBuyNow = (product) => {
    const order = {
      id: Date.now(),
      product: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand || activeBrand,
      orderDate: new Date().toLocaleDateString(),
      orderTime: new Date().toLocaleTimeString(),
      status: "Confirmed",
      trackingId: "TRK" + Math.random().toString(36).substr(2, 9).toUpperCase()
    };

    setOrderDetails(order);
    setShowOrderModal(true);
  };

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);

    // Show cart notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">✓</span>
        <span>${product.name} added to cart!</span>
      </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 2000);
  };

  const closeModal = () => {
    setShowOrderModal(false);
  };

  // Get current 3 products to display
  const getCurrentProducts = () => {
    const products = mobileBrands[activeBrand];
    const startIndex = currentSlide * 3;
    return products.slice(startIndex, startIndex + 3);
  };

  return (
    <div className="home-container">
      {/* Order Confirmation Modal */}
      {showOrderModal && (
        <div className="modal-overlay">
          <div className="order-modal">
            <div className="modal-content">
              <div className="success-icon">✓</div>
              <h2>Order Confirmed!</h2>
              <p className="order-subtitle">Thank you for your purchase</p>

              <div className="order-details-card">
                <div className="product-preview">
                  <img src={orderDetails?.image} alt={orderDetails?.product} />
                  <div className="product-meta">
                    <h4>{orderDetails?.product}</h4>
                    <p>{orderDetails?.brand}</p>
                    <span className="product-price">${orderDetails?.price}</span>
                  </div>
                </div>

                <div className="order-info">
                  <div className="info-row">
                    <span>Order ID:</span>
                    <strong>#{orderDetails?.id}</strong>
                  </div>
                  <div className="info-row">
                    <span>Status:</span>
                    <span className="status-badge">{orderDetails?.status}</span>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn-continue" onClick={closeModal}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Dashboard */}
      <div className="dashboard-header">
        <div className="dashboard-stats">
          <div className="stat-item">
            <span className="stat-value">$0.00</span>
            <span className="stat-label">Your Balance</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{cartCount}</span>
            <span className="stat-label">Items in Cart</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">0</span>
            <span className="stat-label">Wishlist</span>
          </div>
        </div>
      </div>

      {/* Hero Banner with Special Offer */}
      <div className="hero-banner">
        <div className="banner-content">
          <div className="offer-badge">SAVE UP TO $400</div>
          <h1>On Selected Smartphones</h1>
          <p>Latest models with exclusive discounts</p>
          <div className="banner-cta">
            <button className="cta-primary">Shop Now</button>
            <span className="terms">Terms and Condition Apply</span>
          </div>
        </div>
        <div className="banner-image-center">
          <img src={customImages.heroBanner} alt="Smartphone Collection" />
        </div>
      </div>


      {/* Three Mobile Display with Slider */}
      <div className="mobile-display-section">
        <h2>{activeBrand} Mobiles</h2>
        <div className="mobile-slider-container">
          <div className="mobile-grid">
            {getCurrentProducts().map((mobile) => (
              <div className="mobile-card" key={mobile.id}>
                <div className="discount-badge">{mobile.discount}</div>
                <div className="mobile-image-container">
                  <img src={mobile.image} alt={mobile.name} />
                </div>
                <div className="mobile-info">
                  <h3>{mobile.name}</h3>
                  <p className="price">${mobile.price}</p>
                  <div className="action-buttons">
                    <button
                      className="btn-cart-small"
                      onClick={() => handleAddToCart(mobile)}
                    >
                      <span className="btn-icon">🛒</span>
                      Add to Cart
                    </button>
                    <button
                      className="btn-buy-small"
                      onClick={() => handleBuyNow(mobile)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            {Array.from({ length: Math.ceil(mobileBrands[activeBrand].length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Deals with Custom Images */}
      <div className="featured-deals">
        <div className="section-header">
          <h2>Featured Deals</h2>
          <span className="save-tag">Save $48.00+</span>
        </div>
        <div className="deal-grid">
          <div className="featured-deal-card" key="featured-1">
            <div className="deal-badge">HOT DEAL</div>
            <div className="mobile-image-container">
              <img src={customImages.featuredProduct1} alt="Premium Smartphone" />
            </div>
            <div className="deal-info">
              <h3>Premium Smartphone Pro</h3>
              <p className="brand">Latest Brand</p>
              <div className="price-section">
                <span className="current-price">$899</span>
                <span className="original-price">$999</span>
                <span className="savings">Save $100</span>
              </div>
              <div className="action-buttons">
                <button
                  className="btn-cart-small"
                  onClick={() => handleAddToCart({
                    id: 27,
                    name: "Premium Smartphone Pro",
                    price: 899,
                    image: customImages.featuredProduct1,
                    brand: "Premium"
                  })}
                >
                  <span className="btn-icon">🛒</span>
                  Add to Cart
                </button>
                <button
                  className="btn-buy-small"
                  onClick={() => handleBuyNow({
                    id: 27,
                    name: "Premium Smartphone Pro",
                    price: 899,
                    image: customImages.featuredProduct1,
                    brand: "Premium"
                  })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="featured-deal-card" key="featured-2">
            <div className="deal-badge">HOT DEAL</div>
            <div className="mobile-image-container">
              <img src={customImages.featuredProduct2} alt="Ultra Smartphone" />
            </div>
            <div className="deal-info">
              <h3>Ultra Smartphone Max</h3>
              <p className="brand">Elite Brand</p>
              <div className="price-section">
                <span className="current-price">$1099</span>
                <span className="original-price">$1299</span>
                <span className="savings">Save $200</span>
              </div>
              <div className="action-buttons">
                <button
                  className="btn-cart-small"
                  onClick={() => handleAddToCart({
                    id: 28,
                    name: "Ultra Smartphone Max",
                    price: 1099,
                    image: customImages.featuredProduct2,
                    brand: "Elite"
                  })}
                >
                  <span className="btn-icon">🛒</span>
                  Add to Cart
                </button>
                <button
                  className="btn-buy-small"
                  onClick={() => handleBuyNow({
                    id: 28,
                    name: "Ultra Smartphone Max",
                    price: 1099,
                    image: customImages.featuredProduct2,
                    brand: "Elite"
                  })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="featured-deal-card" key="featured-3">
            <div className="deal-badge">HOT DEAL</div>
            <div className="mobile-image-container">
              <img src={customImages.featuredProduct3} alt="Compact Smartphone" />
            </div>
            <div className="deal-info">
              <h3>Compact Smartphone Lite</h3>
              <p className="brand">Compact Brand</p>
              <div className="price-section">
                <span className="current-price">$599</span>
                <span className="original-price">$699</span>
                <span className="savings">Save $100</span>
              </div>
              <div className="action-buttons">
                <button
                  className="btn-cart-small"
                  onClick={() => handleAddToCart({
                    id: 29,
                    name: "Compact Smartphone Lite",
                    price: 599,
                    image: customImages.featuredProduct3,
                    brand: "Compact"
                  })}
                >
                  <span className="btn-icon">🛒</span>
                  Add to Cart
                </button>
                <button
                  className="btn-buy-small"
                  onClick={() => handleBuyNow({
                    id: 29,
                    name: "Compact Smartphone Lite",
                    price: 599,
                    image: customImages.featuredProduct3,
                    brand: "Compact"
                  })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      {/* <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MyPhoneHub</h3>
            <p>Your trusted destination for the latest smartphones and mobile accessories. We bring you the best deals from top brands.</p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul className="footer-links">
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Support Center</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📧 support@myphonehub.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Mobile Street, Tech City</p>
            <p>🕒 Mon-Fri: 9AM-6PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 MyPhoneHub. All rights reserved. | Designed with ❤️ for mobile enthusiasts</p>
        </div>
      </footer> */}

      {/* Special Offer Banner */}
      <div className="special-offer">
        <div className="offer-content">
          <h3>Apple iPad Mini G2356</h3>
          <p className="discount">25.60% OFF</p>
          <p className="final-price">$1,050.00</p>
          <div className="action-buttons">
            <button
              className="btn-cart-small"
              onClick={() => handleAddToCart({
                id: 17,
                name: "Apple iPad Mini G2356",
                price: 1050,
                image: customImages.specialOffer,
                brand: "Apple"
              })}
            >
              <span className="btn-icon">🛒</span>
              Add to Cart
            </button>
            <button
              className="btn-buy-small"
              onClick={() => handleBuyNow({
                id: 17,
                name: "Apple iPad Mini G2356",
                price: 1050,
                image: customImages.specialOffer,
                brand: "Apple"
              })}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="offer-image-center">
          <img src={customImages.specialOffer} alt="iPad Mini" />
        </div>
      </div>

    </div>

  );
}
