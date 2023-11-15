import { Container, Col, Row } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import "../assets/styles/about.scss";
import Chart from "chart.js/auto";
import { Link, useNavigate } from "react-router-dom";
const AboutConst = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  useEffect(() => {
    if (id == 1) {
      navigate("/dashboard");
    }
  }, [id]);
  return (
    <>
      <Container className="flex-column r-about">
        <Row md={12} className="m-5">
          <Col
            md={12}
            className="text-center align-items-center justify-content-center d-flex"
          >
            <h2>Nutrifood</h2>
          </Col>
          <Col>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </Col>
        </Row>
        <Row md={12} className="m-5">
          <Col
            md={4}
            className="text-center align-items-center justify-content-center d-flex"
          >
            <h2>Nutrifood</h2>
          </Col>
          <Col md={8}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </Col>
        </Row>
        <Row md={12} className="m-5">
          <Col
            md={4}
            className="text-center align-items-center justify-content-center d-flex"
          >
            <h2>Nutrifood</h2>
          </Col>
          <Col md={8}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </Col>
        </Row>{" "}
        <Row md={12} className="m-5">
          <Col
            md={4}
            className="text-center align-items-center justify-content-center d-flex"
          >
            <h2>Nutrifood</h2>
          </Col>
          <Col md={8}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </Col>
        </Row>
        <Row md={12} className="m-5">
          <Col
            md={12}
            className="text-center align-items-center justify-content-center d-flex"
          >
            <h2>Nutrifood</h2>
          </Col>
          <Col>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutConst;
