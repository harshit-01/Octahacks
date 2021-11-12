import React, {useState} from 'react';
import {Container,Row,Col,Card,Button,ListGroup,ListItem,Modal} from 'react-bootstrap'
import TutorForm from './TutorForm';

const Tutor = ()=>{
    const [show, setShow] = useState(false);
    return(
        <>
         <Container>
             <Row>
                <h4 className="ml-3">Wanna Be a tutor ?</h4>
             </Row>
             <Row>
                <Col md={5}>
                    <Card border="info" className="tutor">
                        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3449/3449692.png" style={{height:"50%",width:"50%",textAlign:"center"}} fluid
                        className="ml-5"/>
                        <Card.Body>
                        <Card.Title className="font-weight-bold ml-1">Apply Now</Card.Title>
                        <Button variant="outline-primary"  onClick={() => setShow(true)}>
                        Apply</Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Job Type : Teacher </ListGroup.Item>
                            <ListGroup.Item>Duration : 4hrs per day</ListGroup.Item>
                            <ListGroup.Item>Stipend  : 5k per week</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={6} className="ml-md-2 mt-2 mt-md-0">
                    <Card border="info">
                        <Card.Header className="font-weight-bold">Teacher Requirements :</Card.Header>
                        <Card.Body>
                            Bachelor’s degree in teaching or relevant field.
                            A minimum of 6 months experience as a teacher.
                            In-depth knowledge of teaching methods and legal educational procedures.
                            Outstanding written and verbal communication skills.
                            Well-organized with excellent leadership abilities.
                            Exceptional interpersonal and presentation skills.
                        </Card.Body>
                    </Card>
                </Col>
             </Row>
         </Container>
         {show?
            <Modal
            size="lg"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header>
                <Modal.Title id="example-modal-sizes-title-lg">
                   Tutor Registration Form
                </Modal.Title>
                <i class="fa fa-times" aria-hidden="true" onClick={() => setShow(false)}
                role="button" ></i>
                </Modal.Header>
                <Modal.Body><TutorForm /></Modal.Body>
            </Modal> : null
         }
        </>
    )
}
export default Tutor;