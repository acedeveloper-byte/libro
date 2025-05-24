"use client";

import React, { useState } from "react";
import { Table, Button, Form, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Page = () => {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Karamveer", lastName: "Singh", username: "@karam" },
    { id: 2, firstName: "Mayank", lastName: "Kumar", username: "@mayank" },
  ]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
    };
    setUsers([...users, newUser]);
    setForm({ firstName: "", lastName: "", username: "" });
  };

  const handleEdit = (id) => {
    console.log("Edit clicked for ID:", id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container py-4">
      {/* Form Card */}
      <Row className="mb-4">
        <Col md={12}>
          <Card>
            <Card.Header>Create New User</Card.Header>
            <Card.Body>
              <Form onSubmit={handleAddUser}>
                <Row className="g-3 container">
                  <Col md={4}>
                    <Form.Control
                      type="text"
                      name="categoryname"
                      placeholder="Category Name"
                      value={form.categoryname}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      type="text"
                      name="date"
                      placeholder="Date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </Col>

                  <Col md={4}>
                    <Form.Control
                      type="number"
                      name="number"
                      placeholder="Number"
                      value={form.number}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={4}>
                    <Form.Control
                      type="number"
                      name="result"
                      placeholder="Result"
                      value={form.result}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={4}>
                    <Form.Control
                      type="text"
                      name="time"
                      placeholder="Time"
                      value={form.time}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      type="number"
                      name="next_result"
                      placeholder="Next Result"
                      value={form.time}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <div className="mt-3 text-end">
                  <Button type="submit" variant="primary">
                    Add User
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Table Card */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>User List</Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.username}</td>
                      <td>
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => handleEdit(user.id)}
                          className="me-2"
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(user.id)}
                        >
                          <MdDeleteForever />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
