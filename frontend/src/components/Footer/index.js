import React from "react";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4 className="currency-title">CURRENCY</h4>
          <div className="currency">
            <img src="/images/usaflag.png" alt="USD" />
            <span>USD</span>
          </div>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr />

      <div className="footer-links">
        <div className="footer-col">
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaLinkedin />
          </div>
          <h4 className="accepts">mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6124/6124994.png"
              alt="Google Pay"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png"
              alt="Mastercard"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/825/825454.png"
              alt="PayPal"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
              alt="Amex"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/825/825437.png"
              alt="Apple Pay"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
              alt="RazorPay"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
