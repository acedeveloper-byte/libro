import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/app/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Page = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1 className="my-3 fw-bold fs-2">Terms & Conditions</h1>
        </div>
        <hr />
        <p>
          Welcome to <strong>librovuelos.com</strong> ("we", "us", or "our"). These Terms and Conditions ("Terms")
          govern your access to and use of our website and services. By using librovuelos.com, you agree to be
          bound by these Terms. Please read them carefully.
        </p>

        <h3>1. Use of the Website</h3>
        <p>
          Librovuelos.com is a third-party travel booking platform that enables users to search for, compare,
          and reserve travel-related services such as flights, hotels, and car rentals offered by third-party
          providers.
        </p>
        <p>By using this website, you represent that you:</p>
        <ul>
          <li>Are at least 18 years of age.</li>
          <li>Have the legal authority to enter into binding agreements.</li>
          <li>Will use the website in accordance with these Terms.</li>
        </ul>

        <h3>2. Bookings and Payments</h3>
        <p>
          All bookings made through Librovuelos are subject to availability and the terms and conditions of the
          third-party travel providers.
        </p>
        <h4>a. Pricing and Availability</h4>
        <p>
          Prices and availability are not guaranteed until booking is confirmed. We are not responsible for
          price changes, booking errors, or service interruptions caused by third-party providers.
        </p>
        <h4>b. Payment</h4>
        <p>
          You may be required to provide payment information at the time of booking. Payments are processed
          either by us or directly through the service provider, depending on the arrangement.
        </p>
        <h4>c. Modifications and Cancellations</h4>
        <p>
          Changes or cancellations to your booking are subject to the terms of the travel provider. We do not
          guarantee refunds or changes unless explicitly stated by the provider.
        </p>

        <h3>3. User Responsibilities</h3>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate and complete information when using the website or making a reservation.</li>
          <li>Use the website only for personal and non-commercial purposes.</li>
          <li>Not use the site for fraudulent, illegal, or abusive purposes.</li>
        </ul>

        <h3>4. Intellectual Property</h3>
        <p>
          All content on this website—including graphics, text, logos, icons, and software—is the property of
          librovuelos.com or its content suppliers and is protected by copyright, trademark, and other laws. You
          may not reproduce, modify, or distribute any content without our express written permission.
        </p>

        <h3>5. Third-Party Services</h3>
        <p>
          We act only as an intermediary between you and third-party travel service providers. We do not control
          or guarantee the services offered by these providers. Any issues, claims, or disputes regarding
          reservations, cancellations, or travel experiences must be resolved directly with the provider.
        </p>

        <h3>6. Limitation of Liability</h3>
        <p>To the maximum extent permitted by law, librovuelos.com is not liable for any:</p>
        <ul>
          <li>Direct, indirect, consequential, or incidental damages</li>
          <li>Loss of data, revenue, or profits</li>
          <li>Issues arising from delays, cancellations, or disruptions caused by third-party providers</li>
        </ul>
        <p>We provide our site and services "as is" without warranties of any kind, either express or implied.</p>

        <h3>7. Privacy</h3>
        <p>
          Your use of the site is also governed by our Privacy Policy, which describes how we gather, use, and
          protect your personal information.
        </p>

        <h3>8. Changes to Terms</h3>
        <p>
          We, at Librovuelos, reserve the right to modify these Terms at any time. Once we post the changes,
          they will be effective immediately. If you accept the revised terms, only then proceed further to use
          our site or services.
        </p>

        <h3>9. Termination</h3>
        <p>
          We may suspend or terminate your access to the website at any time and for any reason, including if we
          believe you have violated these Terms.
        </p>

        <h3>10. Governing Law</h3>
        <p>
          These Terms of Service shall be interpreted and enforced pursuant to the laws of the United States,
          without regard to conflict of law principles.
        </p>

        <h3>11. Contact Us</h3>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>
          <strong>librovuelos.com</strong>
          <br />
          Email: <strong>support@librovuelos.com</strong>
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default Page;
