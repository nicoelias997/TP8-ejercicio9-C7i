import React from 'react'

import { useState } from 'react'

import { Col, Card, Row } from 'react-bootstrap'
import CardCitas from './CardCitas'

const AdministradorCitas = () => {

    const [citas, setCitas] = useState(false)

  return (
    <Col>
    <Card className='mt-3'>
        <Card.Header>
            <Card.Title className='text-center'>
            {
                citas ? "Administrar las citas" : "No hay citas"
            }
            </Card.Title>
        </Card.Header>
        <Card.Body>
          <Row xs={12} sm={6} md={3} lg={4}>
            {/* Aqui tendre que hacer un map al local storage, que si es true, pinte las card, si es false, no hay citas */}
            <CardCitas></CardCitas>
            <CardCitas></CardCitas>
            <CardCitas></CardCitas>
            <CardCitas></CardCitas>
            <CardCitas></CardCitas>
            <CardCitas></CardCitas>

          </Row>
        </Card.Body>
    </Card>
    </Col>
  )
}

export default AdministradorCitas