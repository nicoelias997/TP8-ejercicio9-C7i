import React from 'react'
import { Card, Col, Form, Row, Image, Button } from 'react-bootstrap'

const CardCitas = (props) => {



  return (
        <Card>
            <Card.Header>
                <Row className='d-flex align-content-center justify-content-center align-items-center text-center'>
                    <Col xs={3} sm={4} md={12} className="mt-1 mb-1">
                        <Image fluid src="https://picsum.photos/100" roundedCircle></Image>
                    </Col>
                    <Col xs={9} sm={8} md={12}>
                        <Card.Text>Mascota: {props.nombreMascota}</Card.Text>
                        <Card.Text className='text-black-50'>Dueño: {props.nombreDuenio}</Card.Text>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Col>
                    <Row>
                    <Form.Group className='mb-2'>
                    <Form.Label>Fecha:</Form.Label>
                    <Form.Control placeholder='dd/mm/yyyy' defaultValue={props.fecha}></Form.Control>
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className='mb-2'>
                    <Form.Label>Hora:</Form.Label>
                    <Form.Control  placeholder='hh:mm' defaultValue={props.hora}></Form.Control>
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className='mb-2'>
                    <Form.Label>Sintomas:</Form.Label>
                    <Form.Control type="text" placeholder='Breve descripcion' defaultValue={props.sintoma}></Form.Control>
                    </Form.Group>
                    </Row>
                    </Col>
                </Form>
            </Card.Body>
            <Card.Footer>
                <Button className="btn btn-danger float-end" >
                    Borrar
                </Button>
            </Card.Footer>
        </Card>
  )
}

export default CardCitas    
