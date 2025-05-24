'use client'
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card, Col } from 'react-bootstrap';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <Header />

      <Container className="mt-5 mb-5">
        <div className="text-center mb-4">
          <p className="text-primary mb-1">OUR BLOGS</p>
          <h3 className="text-capitalize">What You Want to Know</h3>
        </div>

        <Row className="g-4">
          {[1].map((item, index) => (
            <Col key={index} md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Image
                  src="/images/cards-blog.png"
                  alt="blog"
                  width={353}
                  height={180}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Airlines</Card.Title>
                  <Card.Text>
                    American Airlines extends its service to lesser-visited islands.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Page
