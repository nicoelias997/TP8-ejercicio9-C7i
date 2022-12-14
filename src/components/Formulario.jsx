import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

import AdministradorCitas from "./AdministradorCitas";

import {
  validarDuenio,
  validarFecha,
  validarHora,
  validarMascota,
  validarSintoma,
} from "../validacionesForm";

const Formulario = () => {
  let storageCard = JSON.parse(localStorage.getItem("listaCitas")) || [];

  const [mascota, setMascota] = useState("");
  const [duenio, setDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintoma, setSintoma] = useState("");


  const [arrayCard, setArrayCard] = useState(storageCard);

  useEffect(() => {
    localStorage.setItem("listaCitas", JSON.stringify(arrayCard));
  }, [arrayCard]);

  const agregarCard = (e) => {
    e.preventDefault();
    let cardNueva = 
    {
      mascota: mascota,
      duenio: duenio,
      fecha: fecha,
      hora: hora,
      sintoma: sintoma,
      id: uuidv4()
    }
    if (
      !validarDuenio(duenio) ||
      !validarFecha(fecha) ||
      !validarHora(hora) ||
      !validarMascota(mascota) ||
      !validarSintoma(sintoma)
    ) {
      alert("Debes completar todos los campos");
      return;
    } else {
      setArrayCard([
        ...arrayCard,
        cardNueva
      ])
    }
    console.log(cardNueva)

  };

  const eliminarCard = (id) => {
  const arrayFiltrado = arrayCard.filter(item => item.id !== id)
  setArrayCard(arrayFiltrado)
  }

  return (
    <Container>
    <Col xs={12}>
      <Form onSubmit={agregarCard}>
        <Card>
          <Card.Header>
            <Card.Text className="h6">
              Llenar el formulario para generar una cita
            </Card.Text>
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-2">
              <Row>
                <Col>
                  <Form.Label>Nombre de mascota:</Form.Label>
                  <Form.Control
                    type="text"
                    onBlur={() => validarMascota(mascota)}
                    placeholder="Ingresar nombre mascota"
                    value={mascota}
                    onChange={(e) => setMascota(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-2">
              <Row>
                <Col>
                  <Form.Label>Nombre de due??o:</Form.Label>
                  <Form.Control
                    type="text"
                    onBlur={() => validarDuenio(duenio)}
                    placeholder="Ingresar nombre due??o"
                    value={duenio}
                    onChange={(e) => setDuenio(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Form.Group>
            <Row>
              <Col xs={12} sm={12} md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Fecha:</Form.Label>
                  <Form.Control
                    placeholder="dd/mm/yyyy"
                    onBlur={() => validarFecha(fecha)}
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Hora:</Form.Label>
                  <Form.Control
                    placeholder="hh:mm"
                    onBlur={() => validarHora(hora)}
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-2">
              <Row>
                <Col>
                  <Form.Label>Sintomas:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Breve descripcion de los sintomas"
                    onBlur={() => validarSintoma(sintoma)}
                    value={sintoma}
                    onChange={(e) => setSintoma(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-center">
            <Button
              className="btn btn-primary col-4 mt-3 mb-3"
              type="submit"
            >
              Agregar nueva cita
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </Col>
    {
      
        <AdministradorCitas arrayCard={arrayCard} eliminarCard={eliminarCard}></AdministradorCitas>          
    }
    </Container>
  );
};

export default Formulario;
