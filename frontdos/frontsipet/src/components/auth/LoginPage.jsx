import React from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { FaUser, FaLock } from 'react-icons/fa';
import './LoginPage.css'; // Este es tu CSS personalizado

const LoginPage = () => {
  return (
    <div className="login-page">
      <Container fluid>
        <Row className="vh-100">
          <Col md={6} className="left-panel d-flex justify-content-center align-items-center">
            <img src="logo.png" alt="Logo IAMA" className="logo-img" />
          </Col>
          <Col md={6} className="right-panel d-flex justify-content-center align-items-center">
            <Card className="p-4 shadow login-card">
              <div className="text-center mb-3">
                <small>Bienvenido a SIPET</small>
                <h3 className="fw-bold">Iniciar sesión</h3>
              </div>
              <Form>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text><FaUser /></InputGroup.Text>
                    <Form.Control type="text" placeholder="Usuario" />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-2">
                  <InputGroup>
                    <InputGroup.Text><FaLock /></InputGroup.Text>
                    <Form.Control type="password" placeholder="Contraseña" />
                  </InputGroup>
                  <div className="text-end">
                    <small className="text-muted">¿Olvidaste tu contraseña?</small>
                  </div>
                </Form.Group>

                <div className="d-grid mt-3">
                  <Button variant="primary">Ingresar</Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
