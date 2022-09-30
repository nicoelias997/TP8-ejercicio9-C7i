import React, {useState} from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { ErrorMessage, useFormik } from 'formik'
import * as Yup from 'yup'

const Formulario = () => {

    const formik = useFormik({
        initialValues: {
            mascota : "",
            duenio : "",
            fecha: "",
            hora: "", 
            sintoma: ""
        },

        ValidationSchema : Yup.object({
            mascota: Yup.string()
            .min(2, "Debe tener al menos 2 caracteres")
            .max(10, "No debe superar los 10 caracteres")
            .required("campo requerido"),

            duenio: Yup.string()
            .min(2, "Debe tener al menos 2 caracteres")
            .max(15, "No debe superar los 15 caracteres")
            .required("campo requerido"),

            fecha: Yup.date()
            // .regex(/^(0[1-9]|[12]\d|3[01])[\/\-\.](0[1-9]|1[0-2])[\/\-\.](19|20)\d{2}$/gm, "Debe seguir el formato dd/mm/yyyy")
            .required("campo requerido"),

            hora: Yup.date()
            // .regex(/^(((0|1)[0-9])|2[0-3]):[0-5][0-9]$/, "Debe seguir el formato hh:mm")
            .required("campo requerido"), 

            sintoma: Yup.string()
            .min(6, "Descripcion no tan breve") 
            .max(25, "Descripcion no tan extensa")
            .required("campo requerido")
        })      
    })


  return (
        <Col xs={12}>
        <Card>
            <Card.Header>
                <Card.Text className='h6'>
                    Llenar el formulario para generar una cita
                </Card.Text>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={formik.handleSubmit}>  
                    <Form.Group className="mb-2">
                        <Row>
                            <Col>
                                <Form.Label>Nombre de mascota:</Form.Label>
                                <Form.Control type="text" onBlur={formik.handleBlur} placeholder='Ingresar nombre mascota' name="mascota" id="mascota" value={formik.values.mascota} onChange={formik.handleChange} ></Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Row>
                            <Col>
                                <Form.Label>Nombre de dueño:</Form.Label>
                                <Form.Control type="text" onBlur={formik.handleBlur} placeholder='Ingresar nombre dueño' name="duenio" id="duenio" value={formik.values.duenio} onChange={formik.handleChange}></Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Row>
                        <Col xs={12} sm={12} md={6}>
                        <Form.Group className='mb-2'>
                        <Form.Label>Fecha:</Form.Label>
                        <Form.Control placeholder='dd/mm/yyyy' onBlur={formik.handleBlur} name="fecha" id="fecha" value={formik.values.fecha} onChange={formik.handleChange}></Form.Control>
                        </Form.Group>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                        <Form.Group className='mb-2'>
                        <Form.Label>Hora:</Form.Label>
                        <Form.Control  placeholder='hh:mm' onBlur={formik.handleBlur} name="hora" id="hora" value={formik.values.hora} onChange={formik.handleChange} ></Form.Control>
                        </Form.Group>
                        </Col>         
                    </Row>
                    <Form.Group className='mb-2'>
                        <Row>
                            <Col>
                                <Form.Label>Sintomas:</Form.Label>
                                <Form.Control type="text" placeholder='Breve descripcion de los sintomas' onBlur={formik.handleBlur} name="sintoma" id="sintoma" value={formik.values.sintoma} onChange={formik.handleChange} ></Form.Control>
                               
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Card.Body>
            <Card.Footer className='text-center'>
                <Button className='btn btn-primary col-4 mt-3 mb-3' type='submit'>
                    Agregar nueva cita
                </Button>
            </Card.Footer>
        </Card>   
        </Col>
  )
}

export default Formulario