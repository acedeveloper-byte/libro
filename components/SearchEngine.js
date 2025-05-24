"use client";
import { useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import {
  Button,
  Form,
  Dropdown,
  Row,
  Col,
  ToggleButton,
  ButtonGroup,
  OverlayTrigger,
  Popover,
  InputGroup,
} from "react-bootstrap";
import {
  FaSearch,
  FaExchangeAlt,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaUser,
} from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

const SearchEngine = () => {
  const [tripType, setTripType] = useState("oneway");
  const [cabinClass, setCabinClass] = useState("Economy");
  const [departureDate, setDepartureDate] = useState("2025-04-15");
  const [returnDate, setReturnDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [travelers, setTravelers] = useState({
    adult: 1,
    child: 0,
    infant: 0,
  });

  const updateTraveler = (type, delta) => {
    setTravelers((prev) => {
      const updated = { ...prev, [type]: Math.max(0, prev[type] + delta) };
      if (type === "adult" && updated.adult === 0) updated.adult = 1;
      return updated;
    });
  };

  const totalTravelers = travelers.adult + travelers.child + travelers.infant;

  const renderTravelerText = () =>
    `${totalTravelers} Passenger${totalTravelers > 1 ? "s" : ""}`;

  const travelerPopover = (
    <Popover>
      <Popover.Body>
        {["adult", "child", "infant"].map((type) => {
          const label =
            type === "adult"
              ? "Adult -"
              : type === "child"
                ? "Child (2-11) -"
                : "Infant (0-2) -";
          return (
            <div
              key={type}
              className="d-flex justify-content-between align-items-center mb-2"
            >
              <div>{label}</div>
              <div className="d-flex align-items-center gap-2">
                <Button size="sm" onClick={() => updateTraveler(type, -1)}>
                  -
                </Button>
                <span>{travelers[type]}</span>
                <Button size="sm" onClick={() => updateTraveler(type, 1)}>
                  +
                </Button>
              </div>
            </div>
          );
        })}
        <div className="text-end pt-2">
          <Button size="sm" variant="primary">
            Done
          </Button>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <div style={{ position: "relative", height: "450px" }}>
      {/* Background */}
      <Image
        src="/images/home-poster.jpg"
        alt="Poster"
        fill
        style={{ objectFit: "cover", zIndex: 1 }}
      />

      {/* Title and Description */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          paddingTop: "40px",
          paddingBottom: "20px",
          textAlign: "center",
          color: "#fff",
          background: 'radial-gradient(black, transparent)'
        }}
      >
        <h1 className="fw-bold display-5">Find Discounted Flight Fares!
        </h1>
        <p className="lead">
        Get unlimited deals and save big on your next flight.
        </p>
      </div>

      {/* Search Form Box */}
      <div
        className="bg-white p-3 rounded shadow"
        style={{
          position: "absolute",
          top: "178px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          width: "95%",
          maxWidth: "1300px",
        }}
      >
        {/* Trip Type + Cabin Class */}
        <Row className="g-2 mb-2 align-items-center">
          <Col xs="auto">
            <ButtonGroup>
              <ToggleButton
                type="radio"
                variant={
                  tripType === "roundtrip" ? "primary" : "outline-primary"
                }
                checked={tripType === "roundtrip"}
                onClick={() => setTripType("roundtrip")}
              >
                Round Trip
              </ToggleButton>
              <ToggleButton
                type="radio"
                variant={tripType === "oneway" ? "primary" : "outline-primary"}
                checked={tripType === "oneway"}
                onClick={() => setTripType("oneway")}
              >
                One Way
              </ToggleButton>
            </ButtonGroup>
          </Col>

          <Col xs="auto">
            <Dropdown>
              <Dropdown.Toggle variant="light">{cabinClass}</Dropdown.Toggle>
              <Dropdown.Menu>
                {["Economy", "Business", "First"].map((cls) => (
                  <Dropdown.Item key={cls} onClick={() => setCabinClass(cls)}>
                    {cls}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* Input Fields */}
        <Row className="g-2 align-items-end">
          <Col md>
            <Form.Label>From</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaPlaneDeparture />
              </InputGroup.Text>
              <Form.Control
                placeholder="From where?"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </InputGroup>
          </Col>

          <Col
            xs="auto"
            className="d-flex justify-content-center align-items-end"
          >
            <Button variant="primary" className="mb-1">
              <FaExchangeAlt />
            </Button>
          </Col>

          <Col md>
            <Form.Label>To</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaPlaneArrival />
              </InputGroup.Text>
              <Form.Control
                placeholder="To where?"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </InputGroup>
          </Col>

          <Col md>
            <Form.Label>Depart</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <BsCalendarDate />
              </InputGroup.Text>
              <Form.Control
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
            </InputGroup>
          </Col>

          {tripType === "roundtrip" && (
            <Col md>
              <Form.Label>Return</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <BsCalendarDate />
                </InputGroup.Text>
                <Form.Control
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={departureDate}
                />
              </InputGroup>
            </Col>
          )}

          <Col md>
            <Form.Label>Travelers</Form.Label>
            <OverlayTrigger
              trigger="click"
              placement="bottom-end"
              overlay={travelerPopover}
              rootClose
            >
              <InputGroup>
                <InputGroup.Text>
                  <FaUser />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  readOnly
                  value={renderTravelerText()}
                  style={{ cursor: "pointer", backgroundColor: "#fff" }}
                />
              </InputGroup>
            </OverlayTrigger>
          </Col>

          <Col xs="auto">
            <Button variant="primary" className="px-3 mt-4">
              <FaSearch />
            </Button>
          </Col>
        </Row>
      </div>
    </div >
  );
};

export default SearchEngine;
