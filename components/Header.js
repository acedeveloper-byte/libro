"use client";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Link from "next/link";
import "../app/globals.css";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-bg-color">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image src="/logo/logo.png" width={170} height={50} alt="logo" className="logo-layout"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " style={{ fontSize: '11px !important' }} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto mob-nav">
            <a
              href="/"
              className="mx-2 fw-medium text-decoration-none text-dark mx-3"
            >
              Home
            </a>
            <a
              href="/about-us"
              className="mx-2 fw-medium text-decoration-none text-dark mx-3"
            >
              About Us
            </a>
            {/* <a
              href="/blog"
              className="mx-2 fw-medium text-decoration-none text-dark mx-3"
            >
              Blog
            </a> */}
            <a
              href="/contact-us"
              className="mx-2 fw-medium text-decoration-none text-dark mx-3"
            >
              Contact Us
            </a>
          </Nav>

          {/* Right-Aligned Button */}
          <div className="ms-5">
            <Link href="tel:+1-833-543-8024">
              <Button variant="primary" className="  toll-free">
                <FaPhoneVolume /> <a href="tel:+1-833-543-8024" className='text-decoration-none text-white'>+1-833-543-8024</a>
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
