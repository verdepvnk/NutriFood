import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/dashboard.scss";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Stack,
  Button,
  Card,
  Figure,
  Form,
  Offcanvas,
} from "react-bootstrap";

const tools = require("csvtexttools");
const logo = require("../assets/images/logo.png");
const avatar = require("../assets/images/avatar.png");

const Sidebar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOff = () => setShow(true);
  const isResponsive = useMediaQuery({ query: "(max-width: 990px)" });
  const [textAlmoco, setTextAlmoco] = useState("");
  const [textCafeDaManha, setTextCafeDaManha] = useState("");
  const [textLancheDaTarde, setTextLancheDaTarde] = useState("");
  const [textJantar, setTextJantar] = useState("");

  const handleFileChangeCafeDaManha = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        const output = tools.csvtexttools(fileContent, "sql", "cafeDaManha");
        console.log(output);
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleFileChangeAlmoco = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        const output = tools.csvtexttools(fileContent, "sql", "almoco");
        console.log(output);
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleFileChangeLancheDaTarde = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        const output = tools.csvtexttools(fileContent, "sql", "lancheDaTarde");
        console.log(output);
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleFileChangeJantar = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        const output = tools.csvtexttools(fileContent, "sql", "jantar");
        console.log(output);
      };
      reader.readAsText(selectedFile);
    }
  };

  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  const handleShow = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    navigate("/");
  };

  useEffect(() => {
    if (id != 1) {
      navigate("/");
    }
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return (
    <div className="dashboard">
      <Container fluid className="h-100 w-100">
        <Row className="h-100 d-flex">
          {isResponsive ? (
            <Container
              className={`dashboard w-100 cont-nv ${
                scrolling ? "scrolled" : ""
              }`}
              // className="w-100 cont-nv"
            >
              <Row className="w-100 d-flex align-items-center rr">
                <Col className="h-100 d-flex justify-content-center align-items-center">
                  <Button
                    variant="primary"
                    onClick={handleOff}
                    className="off-btn"
                  >
                    <ion-icon name="menu-outline"></ion-icon>
                  </Button>
                </Col>
                <Col className="h-100 d-flex justify-content-center align-items-center">
                  <Figure className="m-0 p-0">
                    <Figure.Image
                      className="m-0 p-0"
                      src={logo}
                      width={64}
                      height={64}
                    ></Figure.Image>
                  </Figure>
                </Col>
                <Col></Col>
              </Row>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <Figure>
                      <Figure.Image
                        src={logo}
                        width={64}
                        height={64}
                      ></Figure.Image>
                    </Figure>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Col
                    lg={2}
                    className="p-3 m-0 flex-column redm gap-1 d-flex h-100"
                  >
                    <Stack gap={4}>
                      <Card className="card-side">
                        <Card.Body>
                          <Row className="d-flex justify-content-center align-items-center">
                            <Col xs={4}>
                              <Figure className="m-0 w-100 d-flex justify-content-center">
                                <Figure.Image
                                  className="fig m-0"
                                  src={avatar}
                                  width={64}
                                  height={64}
                                ></Figure.Image>
                              </Figure>
                            </Col>
                            <Col className="d-flex justify-content-center">
                              Administrador
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Stack>
                    <Stack gap={2} className="stack-bt">
                      <Link
                        to="/dashboard"
                        className="text-decoration-none w-100"
                      >
                        <Button className="w-100">
                          <Row className="w-100">
                            {/* <Col>
                              <ion-icon name="stats-chart"></ion-icon>
                            </Col> */}
                            <Col>Estatísticas</Col>
                          </Row>
                        </Button>
                      </Link>
                      <Link
                        to="/dashboard/users"
                        className="text-decoration-none w-100"
                      >
                        <Button className="w-100">
                          <Row className="w-100">
                            {/* <Col md={2}>
                              <ion-icon name="people"></ion-icon>
                            </Col> */}
                            <Col>Usuários</Col>
                          </Row>
                        </Button>
                      </Link>
                      <Link
                        to="/dashboard/suggestions"
                        className="text-decoration-none w-100"
                      >
                        <Button className="w-100">
                          <Row className="w-100">
                            {/* <Col md={2}>
                              <ion-icon name="file-tray"></ion-icon>
                            </Col> */}
                            <Col>Sugestões</Col>
                          </Row>
                        </Button>
                      </Link>
                      <Link
                        to="/dashboard/cardapio"
                        className="text-decoration-none w-100"
                      >
                        <Button className="w-100 active-sidebar">
                          <Row className="w-100">
                            {/* <Col md={2}>
                              <ion-icon name="restaurant"></ion-icon>
                            </Col> */}
                            <Col>Cardápio</Col>
                          </Row>
                        </Button>
                      </Link>
                    </Stack>
                    <Stack className="align-self-end stack-log w-100">
                      <Button onClick={handleShow}>
                        <Row className="justify-content-center align-items-center">
                          <Col></Col>
                          <Col></Col>
                          <Col>Sair</Col>
                          <Col className="d-flex align-items-center">
                            <ion-icon name="log-out-outline"></ion-icon>
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      </Button>
                    </Stack>
                  </Col>
                </Offcanvas.Body>
              </Offcanvas>
            </Container>
          ) : (
            <Col lg={2} className="p-3 m-0 flex-column redm gap-1 d-flex h-100">
              <Stack gap={4}>
                <Figure>
                  <Figure.Image
                    src={logo}
                    width={64}
                    height={64}
                  ></Figure.Image>
                </Figure>
                <Card className="card-side">
                  <Card.Body>
                    <Row className="d-flex justify-content-center align-items-center">
                      <Col md={4}>
                        <Figure className="m-0">
                          <Figure.Image
                            className="fig m-0"
                            src={avatar}
                            width={64}
                            height={64}
                          ></Figure.Image>
                        </Figure>
                      </Col>
                      <Col md={8}>Administrador</Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Stack>
              <Stack gap={2} className="stack-bt">
                <Link to="/dashboard" className="text-decoration-none w-100">
                  <Button className="w-100">
                    <Row>
                      <Col md={2}>
                        <ion-icon name="stats-chart"></ion-icon>
                      </Col>
                      <Col md={2}>Estatísticas</Col>
                    </Row>
                  </Button>
                </Link>
                <Link
                  to="/dashboard/users"
                  className="text-decoration-none w-100"
                >
                  <Button className="w-100">
                    <Row>
                      <Col md={2}>
                        <ion-icon name="people"></ion-icon>
                      </Col>
                      <Col md={2}>Usuários</Col>
                    </Row>
                  </Button>
                </Link>
                <Link
                  to="/dashboard/suggestions"
                  className="text-decoration-none w-100"
                >
                  <Button className="w-100">
                    <Row>
                      <Col md={2}>
                        <ion-icon name="file-tray"></ion-icon>
                      </Col>
                      <Col md={2}>Sugestões</Col>
                    </Row>
                  </Button>
                </Link>
                <Link
                  to="/dashboard/cardapio"
                  className="text-decoration-none w-100"
                >
                  <Button className="w-100 active-sidebar">
                    <Row>
                      <Col md={2}>
                        <ion-icon name="restaurant"></ion-icon>
                      </Col>
                      <Col md={2}>Cardápio</Col>
                    </Row>
                  </Button>
                </Link>
              </Stack>
              <Stack className="align-self-end stack-log w-100">
                <Button onClick={handleShow}>
                  <Row className="justify-content-center align-items-center">
                    <Col md={2}>Sair</Col>
                    <Col md={2} className="d-flex align-items-center">
                      <ion-icon name="log-out-outline"></ion-icon>
                    </Col>
                  </Row>
                </Button>
              </Stack>
            </Col>
          )}

          {/* Conteudo */}
          <Col className="flex-shrink-1 overflow-scroll col-dash-cont">
            <Container fluid className="w-100 p-5">
              <Row className="p-0 m-0">
                <h2>Cardápio Mensal</h2>
                {isResponsive ? (
                  <Stack gap={4} className="d-flex p-0 pt-0 pb-2">
                    <Stack gap={4}>
                      <Col xs={12} sm={12} className="p-0 m-0">
                        <Card className="h-100">
                          <Card.Header>
                            Selecione um arquivo de Cafe Da Manhã
                          </Card.Header>
                          <Card.Body>
                            <Form>
                              <Form.Group controlId="formFile">
                                <Form.Control
                                  type="file"
                                  onChange={handleFileChangeCafeDaManha}
                                />
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={12} sm={12} className="p-0 m-0">
                        <Card className="h-100">
                          <Card.Header>
                            Selecione um arquivo de Almoço
                          </Card.Header>
                          <Card.Body>
                            <Form>
                              <Form.Group controlId="formFile">
                                <Form.Control
                                  type="file"
                                  onChange={handleFileChangeAlmoco}
                                />
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Stack>
                    <Stack gap={4}>
                      <Col md={12} lg={12} className="p-0 m-0">
                        <Card className="h-100">
                          <Card.Header>
                            Selecione um arquivo de Lanche Da Tarde
                          </Card.Header>
                          <Card.Body>
                            <Form>
                              <Form.Group controlId="formFile">
                                <Form.Control
                                  type="file"
                                  onChange={handleFileChangeLancheDaTarde}
                                />
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col md={12} lg={12} className="p-0 m-0">
                        <Card className="h-100">
                          <Card.Header>
                            Selecione um arquivo de Jantar
                          </Card.Header>
                          <Card.Body>
                            <Form>
                              <Form.Group controlId="formFile">
                                <Form.Control
                                  type="file"
                                  onChange={handleFileChangeJantar}
                                />
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col xs={12} sm={6}>
                        <Button className="bt-sub w-100">Enviar</Button>
                      </Col>
                    </Stack>
                  </Stack>
                ) : (
                  <Stack gap={4} className="d-flex flex-row">
                    <Stack gap={4}>
                      <Col md={12} lg={12} className="p-0 m-0">
                        <Card className="h-100">
                          <Card.Header>
                            Selecione um arquivo de Cafe Da Manhã
                          </Card.Header>
                          <Card.Body>
                            <Form>
                              <Form.Group controlId="formFile">
                                <Form.Control
                                  type="file"
                                  onChange={handleFileChangeCafeDaManha}
                                />
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={12} lg={12} className="p-0 m-0">
                        <Card className="h-100">
                          <Card.Header>
                            Selecione um arquivo de Almoço
                          </Card.Header>
                          <Card.Body>
                            <Form>
                              <Form.Group controlId="formFile">
                                <Form.Control
                                  type="file"
                                  onChange={handleFileChangeAlmoco}
                                />
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Stack>
                    <Stack gap={4}>
                      <Col md={12} lg={12} className="p-0 m-0">
                        <Card className="h-100">
                          <Card.Header>
                            Selecione um arquivo de Lanche Da Tarde
                          </Card.Header>
                          <Card.Body>
                            <Form>
                              <Form.Group controlId="formFile">
                                <Form.Control
                                  type="file"
                                  onChange={handleFileChangeLancheDaTarde}
                                />
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col md={12} lg={12} className="p-0 m-0">
                        <Card className="h-100">
                          <Card.Header>
                            Selecione um arquivo de Jantar
                          </Card.Header>
                          <Card.Body>
                            <Form>
                              <Form.Group controlId="formFile">
                                <Form.Control
                                  type="file"
                                  onChange={handleFileChangeJantar}
                                />
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Button className="bt-sub">Enviar</Button>
                    </Stack>
                  </Stack>
                )}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Sidebar;
