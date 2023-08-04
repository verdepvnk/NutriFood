import "../sass/login.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const LoginConst = () => {
  return (
    <>
      <div className="cont">
        <Row className="row">
          <Col>
          
            <Form id="form-login">
              <h2>Login</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Endereço de email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" />
                <Form.Text className="text-muted">
                  Nós nunca iremos compartilhar seu email com terceiros
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Lembrar de mim" />
              </Form.Group>
              <Button type="submit" id="button-login-signup">
                Entrar
              </Button>
          <div>

              <Link to="/sign-up">Não tem conta? Cadastre-se agora</Link>
          </div>  </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoginConst;
