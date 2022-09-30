import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const Formulario = () => {
  return (
        <Col xs={12}>
        <Card>
            <Card.Header>
                <Card.Text className='h6'>
                    Llenar el formulario para generar una cita
                </Card.Text>
            </Card.Header>
            <Card.Body>
                <Form>  
                    <Form.Group className="mb-2">
                        <Row>
                            <Col>
                                <Form.Label>Nombre de mascota:</Form.Label>
                                <Form.Control type="text" placeholder='Ingresar nombre mascota'></Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Row>
                            <Col>
                                <Form.Label>Nombre de dueño:</Form.Label>
                                <Form.Control type="text" placeholder='Ingresar nombre dueño'></Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Row>
                        <Col xs={12} sm={12} md={6}>
                        <Form.Group className='mb-2'>
                        <Form.Label>Fecha:</Form.Label>
                        <Form.Control placeholder='dd/mm/yyyy'></Form.Control>
                        </Form.Group>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                        <Form.Group className='mb-2'>
                        <Form.Label>Hora:</Form.Label>
                        <Form.Control  placeholder='hh:mm'></Form.Control>
                        </Form.Group>
                        </Col>         
                    </Row>
                    <Form.Group className='mb-2'>
                        <Row>
                            <Col>
                                <Form.Label>Sintomas:</Form.Label>
                                <Form.Control type="text" placeholder='Breve descripcion de los sintomasz'></Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Card.Body>
            <Card.Footer className='text-center'>
                <Button className='btn btn-primary col-4 mt-3 mb-3'>
                    Agregar nueva cita
                </Button>
            </Card.Footer>
        </Card>   
        </Col>
  )
}

export default Formulario