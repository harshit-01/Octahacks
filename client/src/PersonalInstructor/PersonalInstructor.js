import React , {useEffect}from 'react';
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {Dialog,DialogContent,DialogTitle} from '@mui/material';
import { Container, Card, Row,Col, Button} from 'react-bootstrap';
import "./PersonalInstructor.css";
import { v1 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux"
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {createCall ,createEmail}  from "../Redux/actions/UserAction.js"

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
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const PersonalInstructor = () => {

    const [openCallDialog, setOpenCallDialog] = React.useState(false);
    const [openEmailDialog, setOpenEmailDialog] = React.useState(false);
    const [openVideoDialog, setOpenVideoDialog] = React.useState(false);
    const [openAlert,setOpenAlert] = React.useState(false);
    const [emailAlert,setEmailAlert] = React.useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleOpen = (event) => {
        if(event.target.name === "call"){
            setOpenCallDialog(true);
        }else if(event.target.name === "email"){
            setOpenEmailDialog(true);
        }else{
            setOpenVideoDialog(true);
        }
    };

    const handleClose = () => {
            setOpenCallDialog(false);
            setOpenEmailDialog(false);
            setOpenVideoDialog(false);
    };

    const handleChat = () => {
        const ID = uuid();
        // send Id , link to the server 
        history.push(`/personal-instructor/chat/${ID}`);
    }
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenAlert(false);
    };
    const handleCloseEmail = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setEmailAlert(false);
    };
    return (
        <Container>
            <Row >
                <h3 className="m-2 p-2">Choose your option how do you want to solve your doubt?</h3>
            </Row>
            <Row xs={1} md={4} className="mt-3">
                <Col>
                    <Card border="info" className="m-2" >
                        <Card.Img variant="top" src="https://cdn.dribbble.com/users/232189/screenshots/3507230/media/369ae4694cb418636b0d90d8a1d40f5f.jpg" className="contact-instructor-img mt-2 p-3" />
                        <Card.Body className="text-center">
                            <Button variant="outline-info" name="video" className="rounded-pill px-4" onClick={handleOpen}>Video Chat</Button>
                        </Card.Body>
                    </Card>
                </Col>
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
                            phone: '',
                            email: ''
                        }}

                        validationSchema={Yup.object({
                            phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required')
                        })}

                        onSubmit={(values, { setSubmitting }) => {
                            dispatch(createCall(values));
                            setTimeout(() => {
                                setOpenCallDialog(false);
                                setOpenAlert(true);
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form>
                            <MyTextInput label="Phone Number :" name="phone" type="tel" placeholder="9999999999" />
                            <br />
                            <MyTextInput label="Email Address :" name="email" type="email" placeholder="jane@formik.com" />
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
                            dispatch(createEmail(values));
                            setTimeout(() => {
                                setOpenEmailDialog(false);
                                setEmailAlert(true);
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

            <Dialog open={openVideoDialog} onClose={handleClose}>
                <DialogTitle>Video Chat</DialogTitle>
                <DialogContent>
                    <p className="font-weight-normal"> 
                        Solve your doubt by connecting with your assigned SME through Video Chat. 
                    </p>
                    <h6 className="text-center text-info">Coming Soon!!!</h6>
                    <br />
                    <Button name="video" variant="outline-info" onClick={handleClose}>Cancel</Button>
                </DialogContent>
            </Dialog>
            {openAlert ?
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar anchorOrigin={{ vertical: "top",horizontal: "right"}} open={openAlert} autoHideDuration={4000} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                        Details sent to your email successfully. Please check.
                    </Alert>
                </Snackbar>
                    {/* <Alert severity="success">This is a success message!</Alert> */}
            </Stack>:null}
            {emailAlert ?
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar anchorOrigin={{ vertical: "top",horizontal: "right"}} open={emailAlert} autoHideDuration={4000} onClose={handleCloseEmail}>
                    <Alert onClose={handleCloseEmail} severity="success" sx={{ width: '100%' }}>
                        Details sent to your email successfully. Please check.
                    </Alert>
                </Snackbar>
                    {/* <Alert severity="success">This is a success message!</Alert> */}
            </Stack>:null}
        </Container>
    )
}
export default PersonalInstructor;