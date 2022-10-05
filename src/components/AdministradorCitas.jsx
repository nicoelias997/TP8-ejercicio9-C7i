import React, { useState } from "react";

import { Col, Card, Row } from "react-bootstrap";
import CardCitas from "./CardCitas";

const AdministradorCitas = () => {
  let storageCard = JSON.parse(localStorage.getItem("listaCitas")) || [];

  const [arrayCard, setArrayCard] = useState(storageCard)
  const [citas, setCitas] = useState(false)

  React.useEffect(() => {
    localStorage.setItem("listaCitas", JSON.stringify(arrayCard));
    if(storageCard.length > 0) 
    setCitas(true)
    else {
    setCitas(false)
    }
  }, [arrayCard, storageCard.length]);
 
  const eliminarCard = (id) => {
    const arrayFiltrado = arrayCard.filter(item => item.id !== id)
    setArrayCard(arrayFiltrado)
    
  }

  return (
    <Col>
      <Card className="mt-3">
        <Card.Header>
          <Card.Title className="text-center">
            {
                citas ? "Administrar citas" : "No hay citas"
            }
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Row xs={12} sm={6} md={3} lg={4}>
              {
                arrayCard.map(element => <CardCitas key={element.id} nombreMascota={element.mascota} nombreDuenio={element.duenio} fecha={element.fecha} hora={element.hora} sintoma={element.sintoma} eliminarCard={() => eliminarCard(element.id)}></CardCitas>
                )
              }        
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AdministradorCitas;
