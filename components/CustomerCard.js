import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";


const CustomerCard = () => {
  return (
    <a href="tel:+1-833-543-8024" className="card-link text-decoration-none">
    <div className="customer-card">
      <button className="help-btn">Need Help?</button>
      <h3 className="title">Our Experts are Rechable 24*7</h3>
      <p className="subtitle">
        Get in touch with our experts 24*7 for issues related to bookings, cancellations, and more.
      </p>

      <div className="list">
        <div className="list-item">
          <i className="fas fa-check-circle icon"></i> Tickets Booking
        </div>
        <div className="list-item">
          <i className="fas fa-check-circle icon"></i> Changes
        </div>
        <div className="list-item">
          <i className="fas fa-check-circle icon"></i> Cancellation
        </div>
        <div className="list-item">
          <i className="fas fa-check-circle icon"></i> Customer Service
        </div>
      </div>

      <a href="tel:+1-833-543-8024" className="call-btn">
         <FaPhoneVolume /> +1-833-543-8024
      </a>

      <p className="footer-text">
        Don’t hesitate to connect with our agents; they are ready to help you round the clock.
      </p>
    </div>
    </a>
  );
};

export default CustomerCard;
