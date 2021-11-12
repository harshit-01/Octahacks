import React from 'react';
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {Dialog,DialogContent,DialogTitle} from '@mui/material';
import { Container, Card, Row,Col, Button} from 'react-bootstrap';
import "./PersonalInstructor.css";
import { v1 as uuid } from "uuid";
import { useHistory } from "react-router-dom";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <label htmlFor={props.id || props.name}>{label}</label>
                </Col>
                <Col md={8}>
                    <input className="text-input" {...field} {...props} />
                    {meta.touched && meta.error ? (
                        <div className="error text-danger">*{meta.error}</div>
                    ) : null}
                </Col>
            </Row>
        </Container>
    );
};

const PersonalInstructor = () => {

    const [openCallDialog, setOpenCallDialog] = React.useState(false);
    const [openEmailDialog, setOpenEmailDialog] = React.useState(false);

    const history = useHistory();

    const handleOpen = (event) => {
        if(event.target.name === "call"){
            setOpenCallDialog(true);
        }else{
            setOpenEmailDialog(true);
        }
    };

    const handleClose = (event) => {
        if(event.target.name === "call"){
            setOpenCallDialog(false);
        }else{
            setOpenEmailDialog(false);
        }
    };

    const handleChat = () => {
        const ID = uuid();
        // send Id , link to the server 
        history.push(`/personal-instructor/chat/${ID}`);
    }

    return (
        <Container>
            <Row >
                <h3 className="m-2 p-2">Choose your option how do you want to solve your doubt?</h3>
            </Row>
            <Row xs={1} md={3} className="mt-3">
                <Col>
                    <Card border="info" className="m-2" >
                        <Card.Img variant="top" src="https://www.kautilyacareers.com/utilities/images/chat.jpg" className="contact-instructor-img mt-2 p-2"/>
                        <Card.Body className="text-center">
                            <Button variant="outline-info" className="rounded-pill px-4" onClick={handleChat}>Chat</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="info" className="m-2" >
                        <Card.Img variant="top" src="https://iconarchive.com/download/i99374/dtafalonso/android-lollipop/Phone.ico" className="contact-instructor-img mt-2 p-2" />
                        <Card.Body className="text-center">
                            <Button name="call" variant="outline-info" className="rounded-pill px-4" onClick={handleOpen}>Call </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="info" className="m-2" >
                        <Card.Img variant="top" src="https://icon-library.com/images/webmail-icon/webmail-icon-8.jpg" className="contact-instructor-img mt-2 p-3" />
                        <Card.Body className="text-center">
                            <Button variant="outline-info" name="email" className="rounded-pill px-4" onClick={handleOpen}>Email</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Dialog open={openCallDialog} onClose={handleClose}>
                <DialogTitle>Call</DialogTitle>
                <DialogContent>
                    <p className="font-weight-normal"> 
                        Solve your doubt by connecting with your assigned SME through call. 
                    </p>
                    <Formik
                        initialValues={{
                            phoneNumber: ''
                        }}

                        validationSchema={Yup.object({
                            phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required')
                        })}

                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                setOpenCallDialog(false);
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form>
                            <MyTextInput label="Phone Number :" name="phoneNumber" type="tel" placeholder="9999999999" />
                            <br />
                            <Button type="submit" variant="outline-info" >Submit</Button>{'    '}
                            <Button name="call" variant="outline-info" onClick={handleClose}>Cancel</Button>
                        </Form>
                    </Formik>
                </DialogContent>
            </Dialog>

            <Dialog open={openEmailDialog} onClose={handleClose}>
                <DialogTitle>Email</DialogTitle>
                <DialogContent>
                    <p className="font-weight-normal"> 
                        Solve your doubt by connecting with your assigned SME through Email. 
                    </p>

                    <Formik
                        initialValues={{
                            email: ''
                        }}

                        validationSchema={Yup.object({
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required')
                        })}

                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                setOpenEmailDialog(false);
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form>
                            <MyTextInput label="Email Address :" name="email" type="email" placeholder="jane@formik.com" />
                            <br />
                            <Button type="submit" variant="outline-info" >Submit</Button>{'    '}
                            <Button name="email" variant="outline-info" onClick={handleClose}>Cancel</Button>
                        </Form>
                    </Formik>
                </DialogContent>
            </Dialog>

        </Container>
    )
}
export default PersonalInstructor;