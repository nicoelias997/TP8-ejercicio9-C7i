import React, {useState} from 'react'


import { Col, Card, Row } from 'react-bootstrap'
import CardCitas from './CardCitas'

const AdministradorCitas = () => {

  let storageCard = JSON.parse(localStorage.getItem("listaCitas")) || [];
  
  // const [citas, setCitas] = useState(false)

  return (
    <Col>
    <Card className='mt-3'>
        <Card.Header>
            <Card.Title className='text-center'>
            {/* {
                citas ? "Administrar las citas" : "No hay citas"
            } */}
            "No hay citas"
            </Card.Title>
        </Card.Header>
        <Card.Body>
          <Row xs={12} sm={6} md={3} lg={4}>
                {/* <CardCitas key={element.id} nombreMascota={element.mascota} nombreDuenio={element.duenio} fecha={element.fecha} hora={element.hora} sintoma={storageCard.sintoma}></CardCitas>            */}
                <CardCitas></CardCitas>
          </Row>
        </Card.Body>
    </Card>
    </Col>
  )
}

export default AdministradorCitas