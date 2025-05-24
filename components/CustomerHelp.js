"use client";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const features = [
  {
    title: "Affordable Fares",
    description:
      "We offer exclusive deals because great travel experiences shouldn't come with a huge price tag.",
    // icon: "/images/icons/fare.png",
  },
  {
    title: "Premium Services",
    description:
      "From a user-friendly interface to easy bookings, we believe in making your experience seamless.",
    // icon: "/images/icons/support.png",
  },
  {
    title: "24*7 Customer Assistance",
    description:
      "Our experts are available 24*7 to help you with all your concerns related to bookings, cancellations, and more. ",
    // icon: "/images/icons/secure.png",
  },
  {
    title: "Complete Transparency",
    description:
      "We focus on complete transparency so that customers can make informed decisions with confidence.",
    // icon: "/images/icons/platform.png",
  },
];

const CustomerHelp = () => {
  return (
    <Container className="text-center my-5">
      <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
        <div
          style={{ height: "2px", background: "#0d6efd", width: "80px" }}
        ></div>
        <h3
          className="fw-bold px-4 py-2 rounded-pill text-white"
          style={{
            background: "linear-gradient(to right, #0d6efd, #6ea8fe)",
            marginBottom: 0,
          }}
        >
       Smart Travelers Book Here
        </h3>
        <div
          style={{ height: "2px", background: "#0d6efd", width: "80px" }}
        ></div>
      </div>
      <Row>
        {features.map((feature, idx) => (
         <Col key={idx} md={3} lg={3} className="my-1">
         <div className="card h-100 p-3 ">
           <h5 className="fw-bold">{feature.title}</h5>
           <p className="text-muted small">{feature.description}</p>
         </div>
       </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerHelp;
