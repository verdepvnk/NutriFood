import React, { useState } from "react";
import {

  Container,
  Form,
  ProgressBar,
  Navbar,
  Button,
  Row,
} from "react-bootstrap";

const ReviewsConst = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    group1: null,
    group2: null
  });


  const handleOpcaoChange = (event, group1) => {
    const selectedValue = event.target.id;
    if (group1 && selectedOptions[group1] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group1]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange2 = (event, group2) => {
    const selectedValue = event.target.id;
    if (group2 && selectedOptions[group2] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group2]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange3 = (event, group3) => {
    const selectedValue = event.target.id;
    if (group3 && selectedOptions[group3] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group3]: selectedValue,
      }));
    }
  };
  const handleOpcaoChange4 = (event, group4) => {
    const selectedValue = event.target.id;
    if (group4 && selectedOptions[group4] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group4]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange5 = (event, group5) => {
    const selectedValue = event.target.id;
    if (group5 && selectedOptions[group5] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group5]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange6 = (event, group6) => {
    const selectedValue = event.target.id;
    if (group6 && selectedOptions[group6] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group6]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange7 = (event, group7) => {
    const selectedValue = event.target.id;
    if (group7 && selectedOptions[group7] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group7]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange8 = (event, group8) => {
    const selectedValue = event.target.id;
    if (group8 && selectedOptions[group8] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group8]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange9 = (event, group9) => {
    const selectedValue = event.target.id;
    if (group9 && selectedOptions[group9] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group9]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange10 = (event, group10) => {
    const selectedValue = event.target.id;
    if (group10 && selectedOptions[group10] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group10]: selectedValue,
      }));
    }
  };

  const calculateProgress = () => {
    const selectedCount = Object.values(selectedOptions).filter(
      (value) => value !== null
    ).length;
    return (selectedCount / 10) * 100;
  };

  const progress = calculateProgress();
  return (
    <>
      <Container className="h-100">
        <Row className="overflow-scroll w-100 mt-5 scroll-row overflow-x-hidden">
          <Container className="">
            <Navbar id="progress-nav">
              <Container className="mt-2">
                <ProgressBar now={progress} id="progress-bar" />
              </Container>
            </Navbar>
            <div className="cont2 mt-2 justify-content-center align-items-center">

              <Form> <h2>Coleta da avaliação</h2>
              </Form>
              <Form>
                <h5>
                  Dentre os pontos abordados abaixo, qual a sua avaliação em
                  relação ao Restaurante Institucional?
                </h5>
              </Form>
              <Form>

                <h5>Apresentação das preparações</h5>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4 rate">
                    <input
                      type={type}
                      id={`star5_group1`}
                      name="group1"
                      value="5"
                      onChange={(e) => handleOpcaoChange(e, "group1")}
                      checked={selectedOptions.group1 === `star5_group1`}
                      className="radio-input"
                    />
                    <label htmlFor="star5_group1" title="text"></label>

                    <input
                      type={type}
                      id={`star4_group1`}
                      name="group1"
                      value="4"
                      onChange={(e) => handleOpcaoChange(e, "group1")}
                      checked={selectedOptions.group1 === `star4_group1`}
                      className="radio-input"
                    />
                    <label htmlFor="star4_group1" title="text"></label>

                    <input
                      type={type}
                      id={`star3_group1`}
                      name="group1"
                      value="3"
                      onChange={(e) => handleOpcaoChange(e, "group1")}
                      checked={selectedOptions.group1 === `star3_group1`}
                      className="radio-input"
                    />
                    <label htmlFor="star3_group1" title="text"></label>

                    <input
                      type={type}
                      id={`star2_group1`}
                      name="group1"
                      value="2"
                      onChange={(e) => handleOpcaoChange(e, "group1")}
                      checked={selectedOptions.group1 === `star2_group1`}
                      className="radio-input"
                    />
                    <label htmlFor="star2_group1" title="text"></label>

                    <input
                      type={type}
                      id={`star1_group1`}
                      name="group1"
                      value="1"
                      onChange={(e) => handleOpcaoChange(e, "group1")}
                      checked={selectedOptions.group1 === `star1_group1`}
                      className="radio-input"
                    />
                    <label htmlFor="star1_group1" title="text"></label>


                  </div>
                ))}
              </Form>
              <Form>
                <h5>Variedade do cardápio</h5>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4 rate">
                    <input
                      type={type}
                      id={`star5_group2`}
                      name="group2"
                      value="5"
                      onChange={(e) => handleOpcaoChange2(e, "group2")}
                      checked={selectedOptions.group2 === `star5_group2`}
                      className="radio-input"
                    />
                    <label htmlFor="star5_group2" title="text"></label>

                    <input
                      type={type}
                      id={`star4_group2`}
                      name="group2"
                      value="4"
                      onChange={(e) => handleOpcaoChange2(e, "group2")}
                      checked={selectedOptions.group2 === `star4_group2`}
                      className="radio-input"
                    />
                    <label htmlFor="star4_group2" title="text"></label>

                    <input
                      type={type}
                      id={`star3_group2`}
                      name="group2"
                      value="3"
                      onChange={(e) => handleOpcaoChange2(e, "group2")}
                      checked={selectedOptions.group2 === `star3_group2`}
                      className="radio-input"
                    />
                    <label htmlFor="star3_group2" title="text"></label>

                    <input
                      type={type}
                      id={`star2_group2`}
                      name="group2"
                      value="2"
                      onChange={(e) => handleOpcaoChange2(e, "group2")}
                      checked={selectedOptions.group2 === `star2_group2`}
                      className="radio-input"
                    />
                    <label htmlFor="star2_group2" title="text"></label>

                    <input
                      type={type}
                      id={`star1_group2`}
                      name="group2"
                      value="1"
                      onChange={(e) => handleOpcaoChange2(e, "group2")}
                      checked={selectedOptions.group2 === `star1_group2`}
                      className="radio-input"
                    />
                    <label htmlFor="star1_group2" title="text"></label>

                  </div>
                ))}
              </Form>
              <Form>
                <h5>Sabor das refeições</h5>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4 rate">
                    <input
                      type={type}
                      id={`star5_group3`}
                      name="group3"
                      value="5"
                      onChange={(e) => handleOpcaoChange3(e, "group3")}
                      checked={selectedOptions.group3 === `star5_group3`}
                      className="radio-input"
                    />
                    <label htmlFor="star5_group3" title="text"></label>

                    <input
                      type={type}
                      id={`star4_group3`}
                      name="group3"
                      value="4"
                      onChange={(e) => handleOpcaoChange3(e, "group3")}
                      checked={selectedOptions.group3 === `star4_group3`}
                      className="radio-input"
                    />
                    <label htmlFor="star4_group3" title="text"></label>

                    <input
                      type={type}
                      id={`star3_group3`}
                      name="group3"
                      value="3"
                      onChange={(e) => handleOpcaoChange3(e, "group3")}
                      checked={selectedOptions.group3 === `star3_group3`}
                      className="radio-input"
                    />
                    <label htmlFor="star3_group3" title="text"></label>

                    <input
                      type={type}
                      id={`star2_group3`}
                      name="group3"
                      value="2"
                      onChange={(e) => handleOpcaoChange3(e, "group3")}
                      checked={selectedOptions.group3 === `star2_group3`}
                      className="radio-input"
                    />
                    <label htmlFor="star2_group3" title="text"></label>

                    <input
                      type={type}
                      id={`star1_group3`}
                      name="group3"
                      value="1"
                      onChange={(e) => handleOpcaoChange3(e, "group3")}
                      checked={selectedOptions.group3 === `star1_group3`}
                      className="radio-input"
                    />
                    <label htmlFor="star1_group3" title="text"></label>

                  </div>
                ))
                }
              </Form>
              <Form>
                <h5>Sabor do suco</h5>

                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4 rate">
                    <input
                      type={type}
                      id={`star5_group4`}
                      name="group4"
                      value="5"
                      onChange={(e) => handleOpcaoChange4(e, "group4")}
                      checked={selectedOptions.group4 === `star5_group4`}
                      className="radio-input"
                    />
                    <label htmlFor="star5_group4" title="text"></label>

                    <input
                      type={type}
                      id={`star4_group4`}
                      name="group4"
                      value="4"
                      onChange={(e) => handleOpcaoChange4(e, "group4")}
                      checked={selectedOptions.group4 === `star4_group4`}
                      className="radio-input"
                    />
                    <label htmlFor="star4_group4" title="text"></label>

                    <input
                      type={type}
                      id={`star3_group4`}
                      name="group4"
                      value="3"
                      onChange={(e) => handleOpcaoChange4(e, "group4")}
                      checked={selectedOptions.group4 === `star3_group4`}
                      className="radio-input"
                    />
                    <label htmlFor="star3_group4" title="text"></label>

                    <input
                      type={type}
                      id={`star2_group4`}
                      name="group4"
                      value="2"
                      onChange={(e) => handleOpcaoChange4(e, "group4")}
                      checked={selectedOptions.group4 === `star2_group4`}
                      className="radio-input"
                    />
                    <label htmlFor="star2_group4" title="text"></label>

                    <input
                      type={type}
                      id={`star1_group4`}
                      name="group4"
                      value="1"
                      onChange={(e) => handleOpcaoChange4(e, "group4")}
                      checked={selectedOptions.group4 === `star1_group4`}
                      className="radio-input"
                    />
                    <label htmlFor="star1_group4" title="text"></label>

                  </div>
                ))}
              </Form>
              <Form>
                <h5>Sabor da sobremesa</h5>

                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4 rate">
                    <input
                      type={type}
                      id={`star5_group5`}
                      name="group5"
                      value="5"
                      onChange={(e) => handleOpcaoChange5(e, "group5")}
                      checked={selectedOptions.group5 === `star5_group5`}
                      className="radio-input"
                    />
                    <label htmlFor="star5_group5" title="text"></label>

                    <input
                      type={type}
                      id={`star4_group5`}
                      name="group5"
                      value="4"
                      onChange={(e) => handleOpcaoChange5(e, "group5")}
                      checked={selectedOptions.group5 === `star4_group5`}
                      className="radio-input"
                    />
                    <label htmlFor="star4_group5" title="text"></label>

                    <input
                      type={type}
                      id={`star3_group5`}
                      name="group5"
                      value="3"
                      onChange={(e) => handleOpcaoChange5(e, "group5")}
                      checked={selectedOptions.group5 === `star3_group5`}
                      className="radio-input"
                    />
                    <label htmlFor="star3_group5" title="text"></label>

                    <input
                      type={type}
                      id={`star2_group5`}
                      name="group5"
                      value="2"
                      onChange={(e) => handleOpcaoChange5(e, "group5")}
                      checked={selectedOptions.group5 === `star2_group5`}
                      className="radio-input"
                    />
                    <label htmlFor="star2_group5" title="text"></label>

                    <input
                      type={type}
                      id={`star1_group5`}
                      name="group5"
                      value="1"
                      onChange={(e) => handleOpcaoChange5(e, "group5")}
                      checked={selectedOptions.group5 === `star1_group5`}
                      className="radio-input"
                    />
                    <label htmlFor="star1_group5" title="text"></label>


                  </div>
                ))}
              </Form>
              <Form>
                <h5>Temperatura dos alimentos</h5>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4 rate">
                    <input
                      type={type}
                      id={`star5_group6`}
                      name="group6"
                      value="5"
                      onChange={(e) => handleOpcaoChange6(e, "group6")}
                      checked={selectedOptions.group6 === `star5_group6`}
                      className="radio-input"
                    />
                    <label htmlFor="star5_group6" title="text"></label>

                    <input
                      type={type}
                      id={`star4_group6`}
                      name="group6"
                      value="4"
                      onChange={(e) => handleOpcaoChange6(e, "group6")}
                      checked={selectedOptions.group6 === `star4_group6`}
                      className="radio-input"
                    />
                    <label htmlFor="star4_group6" title="text"></label>

                    <input
                      type={type}
                      id={`star3_group6`}
                      name="group6"
                      value="3"
                      onChange={(e) => handleOpcaoChange6(e, "group6")}
                      checked={selectedOptions.group6 === `star3_group6`}
                      className="radio-input"
                    />
                    <label htmlFor="star3_group6" title="text"></label>

                    <input
                      type={type}
                      id={`star2_group6`}
                      name="group6"
                      value="2"
                      onChange={(e) => handleOpcaoChange6(e, "group6")}
                      checked={selectedOptions.group6 === `star2_group6`}
                      className="radio-input"
                    />
                    <label htmlFor="star2_group6" title="text"></label>

                    <input
                      type={type}
                      id={`star1_group6`}
                      name="group6"
                      value="1"
                      onChange={(e) => handleOpcaoChange6(e, "group6")}
                      checked={selectedOptions.group6 === `star1_group6`}
                      className="radio-input"
                    />
                    <label htmlFor="star1_group6" title="text"></label>


                  </div>
                ))}
              </Form>
              <Form>
                <h5>Atendimento dos funcionários</h5>

                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4 rate">
                    <input
                      type={type}
                      id={`star5_group7`}
                      name="group7"
                      value="5"
                      onChange={(e) => handleOpcaoChange7(e, "group7")}
                      checked={selectedOptions.group7 === `star5_group7`}
                      className="radio-input"
                    />
                    <label htmlFor="star5_group7" title="text"></label>

                    <input
                      type={type}
                      id={`star4_group7`}
                      name="group7"
                      value="4"
                      onChange={(e) => handleOpcaoChange7(e, "group7")}
                      checked={selectedOptions.group7 === `star4_group7`}
                      className="radio-input"
                    />
                    <label htmlFor="star4_group7" title="text"></label>

                    <input
                      type={type}
                      id={`star3_group7`}
                      name="group7"
                      value="3"
                      onChange={(e) => handleOpcaoChange7(e, "group7")}
                      checked={selectedOptions.group7 === `star3_group7`}
                      className="radio-input"
                    />
                    <label htmlFor="star3_group7" title="text"></label>

                    <input
                      type={type}
                      id={`star2_group7`}
                      name="group7"
                      value="2"
                      onChange={(e) => handleOpcaoChange7(e, "group7")}
                      checked={selectedOptions.group7 === `star2_group7`}
                      className="radio-input"
                    />
                    <label htmlFor="star2_group7" title="text"></label>

                    <input
                      type={type}
                      id={`star1_group7`}
                      name="group7"
                      value="1"
                      onChange={(e) => handleOpcaoChange7(e, "group7")}
                      checked={selectedOptions.group7 === `star1_group7`}
                      className="radio-input"
                    />
                    <label htmlFor="star1_group7" title="text"></label>

                  </div>
                ))}
              </Form>
              <Form>
                <h5>
                  Higiene do restaurante
                </h5>
         
                <p>
                         (buffet, mesas, cadeiras, pisos, pratos, bandejas e talheres)
                </p>

                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4 rate">
                    <input
                      type={type}
                      id={`star5_group8`}
                      name="group8"
                      value="5"
                      onChange={(e) => handleOpcaoChange8(e, "group8")}
                      checked={selectedOptions.group8 === `star5_group8`}
                      className="radio-input"
                    />
                    <label htmlFor="star5_group8" title="text"></label>

                    <input
                      type={type}
                      id={`star4_group8`}
                      name="group8"
                      value="4"
                      onChange={(e) => handleOpcaoChange8(e, "group8")}
                      checked={selectedOptions.group8 === `star4_group8`}
                      className="radio-input"
                    />
                    <label htmlFor="star4_group8" title="text"></label>

                    <input
                      type={type}
                      id={`star3_group8`}
                      name="group8"
                      value="3"
                      onChange={(e) => handleOpcaoChange8(e, "group8")}
                      checked={selectedOptions.group8 === `star3_group8`}
                      className="radio-input"
                    />
                    <label htmlFor="star3_group8" title="text"></label>

                    <input
                      type={type}
                      id={`star2_group8`}
                      name="group8"
                      value="2"
                      onChange={(e) => handleOpcaoChange8(e, "group8")}
                      checked={selectedOptions.group8 === `star2_group8`}
                      className="radio-input"
                    />
                    <label htmlFor="star2_group8" title="text"></label>

                    <input
                      type={type}
                      id={`star1_group8`}
                      name="group8"
                      value="1"
                      onChange={(e) => handleOpcaoChange8(e, "group8")}
                      checked={selectedOptions.group8 === `star1_group8`}
                      className="radio-input"
                    />
                    <label htmlFor="star1_group8" title="text"></label>
                  </div>
                ))}
              </Form>
              <Form>
                <h5>Temperatura do ambiente</h5>

                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4 rate">
                    <input
                      type={type}
                      id={`star5_group9`}
                      name="group9"
                      value="5"
                      onChange={(e) => handleOpcaoChange9(e, "group9")}
                      checked={selectedOptions.group9 === `star5_group9`}
                      className="radio-input"
                    />
                    <label htmlFor="star5_group9" title="text"></label>

                    <input
                      type={type}
                      id={`star4_group9`}
                      name="group9"
                      value="4"
                      onChange={(e) => handleOpcaoChange9(e, "group9")}
                      checked={selectedOptions.group9 === `star4_group9`}
                      className="radio-input"
                    />
                    <label htmlFor="star4_group9" title="text"></label>

                    <input
                      type={type}
                      id={`star3_group9`}
                      name="group9"
                      value="3"
                      onChange={(e) => handleOpcaoChange9(e, "group9")}
                      checked={selectedOptions.group9 === `star3_group9`}
                      className="radio-input"
                    />
                    <label htmlFor="star3_group9" title="text"></label>

                    <input
                      type={type}
                      id={`star2_group9`}
                      name="group9"
                      value="2"
                      onChange={(e) => handleOpcaoChange9(e, "group9")}
                      checked={selectedOptions.group9 === `star2_group9`}
                      className="radio-input"
                    />
                    <label htmlFor="star2_group9" title="text"></label>

                    <input
                      type={type}
                      id={`star1_group9`}
                      name="group9"
                      value="1"
                      onChange={(e) => handleOpcaoChange9(e, "group9")}
                      checked={selectedOptions.group9 === `star1_group9`}
                      className="radio-input"
                    />
                    <label htmlFor="star1_group9" title="text"></label>
                  </div>
                ))}
              </Form>
              <Form>
                <h5>
                  Tempo de espera para preparar o prato
                </h5>
                (sem considerar fila)
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4 rate">

                    <input
                      type={type}
                      id={`star5_group10`}
                      name="group10"
                      value="5"
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `star5_group10`}
                      className="radio-input"
                    />
                    <label htmlFor="star5_group10" title="text"></label>

                    <input
                      type={type}
                      id={`star4_group10`}
                      name="group10"
                      value="4"
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `star4_group10`}
                      className="radio-input"
                    />
                    <label htmlFor="star4_group10" title="text"></label>

                    <input
                      type={type}
                      id={`star3_group10`}
                      name="group10"
                      value="3"
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `star3_group10`}
                      className="radio-input"
                    />
                    <label htmlFor="star3_group10" title="text"></label>

                    <input
                      type={type}
                      id={`star2_group10`}
                      name="group10"
                      value="2"
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `star2_group10`}
                      className="radio-input"
                    />
                    <label htmlFor="star2_group10" title="text"></label>

                    <input
                      type={type}
                      id={`star1_group10`}
                      name="group10"
                      value="1"
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `star1_group10`}
                      className="radio-input"
                    />
                    <label htmlFor="star1_group10" title="text"></label>


                  </div>
                ))}
                <Button type="submit" id="button-login-signup">
                  Enviar
                </Button>
              </Form>

            </div></Container>

        </Row>
      </Container>
    </>
  );
};

export default ReviewsConst;
{/* <Form.Check
                      inline
                      name="group10"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      name="group10"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      name="group10"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      name="group10"
                      type={type}
                      id={`inline-${type}-4`}
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      name="group10"
                      type={type}
                      id={`inline-${type}-5`}
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `inline-${type}-5`}
                    /> */}