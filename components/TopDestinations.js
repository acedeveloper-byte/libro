"use client";
import Image from "next/image";
import { Container, Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const destinations = [
  {
    country: "USA",
    location: "New York",
    price: "$249",
    image: "/images/destinations/new-york.jpg",
  },
  {
    country: "USA",
    location: "Chicago",
    price: "$150",
    image: "/images/destinations/chicago.jpg",
  },
  {
    country: "USA",
    location: "Los Angeles",
    price: "$240",
    image: "/images/destinations/los-angeles.jpg",
  },

  {
    country: "USA",
    location: "San Diego",
    price: "$250",
    image: "/images/destinations/san-diego.jpg",
  },
];

const TopDestinations = () => {
  return (
    <Container className="my-5 text-center ">
      {/* Section Title */}
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
          Top Destinations
        </h3>
        <div
          style={{ height: "2px", background: "#0d6efd", width: "80px" }}
        ></div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        className="cards-mob"
      >
        {destinations.map((dest, idx) => (
          <SwiperSlide key={idx}>
            <Card className="border-0 shadow-sm rounded-4 m-2">
              <div
                style={{ position: "relative", width: "100%", height: "220px" }}
              >
                <Image
                  src={dest.image}
                  alt={dest.location}
                  fill
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
              </div>
              <Card.Body className="text-start">
                <small className="text-muted">{dest.country}</small>
                <Card.Title className="fw-bold fs-5 mt-1">
                  {dest.location}
                </Card.Title>
                <div className="d-flex justify-content-between mt-3">
                  <Button variant="primary" className="rounded-pill px-3 py-1 ">
                    {dest.price}
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="rounded-pill px-3 py-1 fw-semibold"
                  >
                    <a href="tel: +1-833-543-8024" className="text-decoration-none ">
                      {" "}
                      Book Now &gt;
                    </a>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TopDestinations;
