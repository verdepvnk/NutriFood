import React, { useState } from "react";
import {
  Container,
  Carousel,
  Form,
  ProgressBar,
  Nav
} from "react-bootstrap";

import "../assets/styles/reviews.scss";
const ReviewsConst = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(false);
  // const [opcaoSelecionada, setOpcaoSelecionada] = useState(false);

  const [progress, setProgress] = useState(0);

  const handleOpcaoChange = (event) => {
    setOpcaoSelecionada(event.target.checked);
    setProgress((prevProgress) => prevProgress + 7, 8);
  };

  // const handleNextClick = () => {
  //   if (opcaoSelecionada) {
  //     // Avance para a próxima etapa
  //   } else {
  //     // Exiba uma mensagem de erro ou tome a ação apropriada
  //   }
  // };

  return (
    <>
      <div className="cont2">
        {/* Barra de progresso */}

        <ProgressBar now={progress}/>

        {/* Troca de página */}
        <Carousel
          prevIcon={null}
          nextIcon={null}
          indicators={false}
          interval={null} // Desabilita a rotação automática do carrossel
          wrap={false} // Desabilita o loop do carrossel
          className="car"
        >
          <Carousel.Item className="car-item">
            <h2>Coleta de Usuário</h2>
            <Form className="formulario-av">
              <h5>
                1. Qual seu vínculo com o IFES - Campus Santa Teresa?{" "}
                <span id="asterisco">*</span>
              </h5>
              <p>Marque apenas uma opção.</p>

              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Aluno do ensino médio"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Aluno da graduação"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Servidor, docente ou tercerizado"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
            <Form className="formulario-av">
              <h5>
                2. Qual refeição você realiza no restaurante institucional?
                <span id="asterisco">*</span>
              </h5>
              <p>Marque todas que se aplicam.</p>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Café da manhã"
                    name="group2"
                    type={type}
                    id={`inline-${type}-4`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Almoço"
                    name="group2"
                    type={type}
                    id={`inline-${type}-5`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Lanche da tarde"
                    name="group2"
                    type={type}
                    id={`inline-${type}-6`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Jantar"
                    name="group2"
                    type={type}
                    id={`inline-${type}-7`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>

            <Form className="formulario-av">
              <h5>
                3. Você é vegetariano?<span id="asterisco">*</span>
              </h5>
              <p>Marque apenas uma opção.</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Sim"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Não"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
          </Carousel.Item>
          <Carousel.Item className="car-item">
            <h2>Coleta da avaliação</h2>
            <Form className="formulario-av">
              <h6>
                Dentre os pontos abordados abaixo, qual a sua avaliação em
                relação ao Restaurante Institucional?
              </h6>
              <h5>4. Apresentação das preparações:</h5>
              <p>Marque apenas uma opção.</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Gosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Gosto moderado"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Não gosto/desgosto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto moderadamente"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
            <Form className="formulario-av">
              <h5>5. Variedade do cardápio:</h5>
              <p>Marque apenas uma opção.</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Gosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Gosto moderado"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Não gosto/desgosto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto moderadamente"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>{" "}
            <Form className="formulario-av">
              <h5>6. Sabor das refeições:</h5>
              <p>Marque apenas uma opção.</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Gosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Gosto moderado"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Não gosto/desgosto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto moderadamente"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
            <Form className="formulario-av">
              <h5>7. Sabor do suco:</h5>
              <p>Marque apenas uma opção.</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Gosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Gosto moderado"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Não gosto/desgosto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto moderadamente"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
            <Form className="formulario-av">
              <h5>8. Sabor da sobremesa:</h5>
              <p>Marque apenas uma opção.</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Gosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Gosto moderado"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Não gosto/desgosto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto moderadamente"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
            <Form className="formulario-av">
              <h5>9. Temperatura dos alimentos:</h5>
              <p>Marque apenas uma opção.</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Gosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Gosto moderado"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Não gosto/desgosto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto moderadamente"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
            <Form className="formulario-av">
              <h5>10. Atendimento dos funcionários:</h5>
              <p>Marque apenas uma opção.</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Gosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Gosto moderado"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Não gosto/desgosto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto moderadamente"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Desgosto muito"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
            <Form className="formulario-av">
              <h5>
                11. Higiene do restaurante(buffet, mesas, cadeiras, pisos,
                pratos, bandejas e talheres):
              </h5>
              <p>Marque apenas uma opção.</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Ótimo"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Bom"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Regular"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Ruim"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Péssimo"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
            <Form className="formulario-av">
              <h5>12. Temperatura do ambiente:</h5>
              <p>Marque apenas uma opção.</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Ótimo"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Bom"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Regular"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Ruim"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Péssimo"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
            <Form className="formulario-av">
              <h5>
                13. Tempo de espera para preparar o prato(sem considerar fila):
              </h5>
              <p>Marque apenas uma opção.</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-4">
                  <Form.Check
                    inline
                    label="Ótimo"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Bom"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Regular"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Ruim"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Péssimo"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
          </Carousel.Item>

          {/* <Pagination>
            <Pagination.Prev
              className="carousel-control-prev"
              onClick={handleNextClick}
              disabled={!opcaoSelecionada} // Desativa o botão quando nenhuma opção estiver selecionada
            >
              Voltar
            </Pagination.Prev>
              <Pagination.Next
              className="carousel-control-next"
              onClick={handleNextClick}
              disabled={!opcaoSelecionada} // Desativa o botão quando nenhuma opção estiver selecionada
            >
              Próximo
            </Pagination.Next>
          </Pagination> */}
        </Carousel>
      </div>
    </>
  );
};

export default ReviewsConst;
