import React, { useState } from "react";
import { Row, Form, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../actions/auth";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  });
  const [validated, setValidated] = useState({});

  const { userName, password } = formData;
  const handleSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
      login(userName, password);
    }
  };
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Row className="justify-content-center">
      <Card>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name"
                name="userName"
                value={userName}
                onChange={e => onChange(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Username cannot be empty
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={e => onChange(e)}
              />
              <Form.Control.Feedback type="invalid">
                Password cannot be empty
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(Login);
