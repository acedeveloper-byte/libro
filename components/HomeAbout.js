import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeContent = () => {
  return (
    <div>
      <Container className="my-2">
        <Row>
          <Col md={6} className="mob-layout">
            <Image
              src="/images/home-about-poster.jpg"
              alt=" Airlines"
              width={550}
              height={500}
            />
          </Col>
          <Col md={6}>
            <p className="fw-bold">Travel For Less! </p>

            <h2 className="fs-3 fw-bold">
            Librovuelos- Where Budget Meets the Skies

            </h2>
            <p>
            At Librovuelos, we believe that exploring the world shouldn’t come with a hefty price tag. That’s why we’ve made it easy to search, compare, and book the cheapest flights from multiple airlines. If you are looking for the best travel experience within your budget, we can be your perfect pick. Decide where you want to go, set up a budget, and we will craft a perfect itinerary even for less. Connect with us to plan your long-awaited trip.

            </p>
            <h4>What You Get?</h4>
            <ul>
             
              <li>
                <b>
              Exclusive Deals: </b>Get countless flight deals to snap up on the big savings.

              </li>
              <li>
             <b> Personalized Experience:</b> Share your priorities, and customzie your journey accordingly.

              
              </li>
              <li>
              <b>Safe & Secure Bookings:</b> Book confidently with us, knowing all your data is safe.

              </li>
              <li>
              <b>World-Class Services:</b> Choose us for top-notch travel booking services.

              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeContent;
