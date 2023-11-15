import { useState, useEffect } from "react";
import { Container, Table, Accordion, Row, Col } from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";
const MenuConst = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [showAdmin, setShowAdmin] = useState("");
  useEffect(() => {
    if (id == 1) {
      navigate("/dashboard");
    }
  }, [id]);
  return (
    <>
      <Container className="menu-cont h-100">
        <Row className="w-100 d-flex justify-content-center text-center">
          <Col md={10}>
            {showAdmin ? (
              <Row>Teste</Row>
            ) : (
              <Accordion className="w-100">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Segunda-feira</Accordion.Header>
                  <Accordion.Body>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Café da manhã</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Comida</th>
                                <th>Bebida</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Almoço</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Principal</th>
                                <th>Opção</th>

                                <th>Vegetariano</th>
                                <th>Arroz</th>
                                <th>Feijão</th>
                                <th>Guarnição</th>
                                <th>Salada I</th>
                                <th>Salada II</th>
                                <th>Sobremesa</th>
                                <th>Suco</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Café da tarde</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Comida</th>
                                <th>Bebida</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Jantar</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Principal</th>
                                <th>Opção</th>

                                <th>Vegetariano</th>
                                <th>Arroz</th>
                                <th>Feijão</th>
                                <th>Guarnição</th>
                                <th>Salada I</th>
                                <th>Salada II</th>
                                <th>Sobremesa</th>
                                <th>Suco</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Terça-feira</Accordion.Header>
                  <Accordion.Body>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Café da manhã</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Comida</th>
                                <th>Bebida</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Almoço</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Principal</th>
                                <th>Opção</th>

                                <th>Vegetariano</th>
                                <th>Arroz</th>
                                <th>Feijão</th>
                                <th>Guarnição</th>
                                <th>Salada I</th>
                                <th>Salada II</th>
                                <th>Sobremesa</th>
                                <th>Suco</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Café da tarde</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Comida</th>
                                <th>Bebida</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Jantar</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Principal</th>
                                <th>Opção</th>

                                <th>Vegetariano</th>
                                <th>Arroz</th>
                                <th>Feijão</th>
                                <th>Guarnição</th>
                                <th>Salada I</th>
                                <th>Salada II</th>
                                <th>Sobremesa</th>
                                <th>Suco</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Quarta-feira</Accordion.Header>
                  <Accordion.Body>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Café da manhã</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Comida</th>
                                <th>Bebida</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Almoço</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Principal</th>
                                <th>Opção</th>

                                <th>Vegetariano</th>
                                <th>Arroz</th>
                                <th>Feijão</th>
                                <th>Guarnição</th>
                                <th>Salada I</th>
                                <th>Salada II</th>
                                <th>Sobremesa</th>
                                <th>Suco</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Café da tarde</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Comida</th>
                                <th>Bebida</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Jantar</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Principal</th>
                                <th>Opção</th>

                                <th>Vegetariano</th>
                                <th>Arroz</th>
                                <th>Feijão</th>
                                <th>Guarnição</th>
                                <th>Salada I</th>
                                <th>Salada II</th>
                                <th>Sobremesa</th>
                                <th>Suco</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Quinta-feira</Accordion.Header>
                  <Accordion.Body>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Café da manhã</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Comida</th>
                                <th>Bebida</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Almoço</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Principal</th>
                                <th>Opção</th>

                                <th>Vegetariano</th>
                                <th>Arroz</th>
                                <th>Feijão</th>
                                <th>Guarnição</th>
                                <th>Salada I</th>
                                <th>Salada II</th>
                                <th>Sobremesa</th>
                                <th>Suco</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Café da tarde</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Comida</th>
                                <th>Bebida</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Jantar</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Principal</th>
                                <th>Opção</th>

                                <th>Vegetariano</th>
                                <th>Arroz</th>
                                <th>Feijão</th>
                                <th>Guarnição</th>
                                <th>Salada I</th>
                                <th>Salada II</th>
                                <th>Sobremesa</th>
                                <th>Suco</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Sexta-feira</Accordion.Header>
                  <Accordion.Body>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Café da manhã</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Comida</th>
                                <th>Bebida</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Almoço</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Principal</th>
                                <th>Opção</th>

                                <th>Vegetariano</th>
                                <th>Arroz</th>
                                <th>Feijão</th>
                                <th>Guarnição</th>
                                <th>Salada I</th>
                                <th>Salada II</th>
                                <th>Sobremesa</th>
                                <th>Suco</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Café da tarde</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Comida</th>
                                <th>Bebida</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Jantar</Accordion.Header>
                        <Accordion.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Principal</th>
                                <th>Opção</th>

                                <th>Vegetariano</th>
                                <th>Arroz</th>
                                <th>Feijão</th>
                                <th>Guarnição</th>
                                <th>Salada I</th>
                                <th>Salada II</th>
                                <th>Sobremesa</th>
                                <th>Suco</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MenuConst;
