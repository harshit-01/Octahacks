import React from 'react';
import {Container,Row,Col,Card,Button,Carousel} from 'react-bootstrap'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { pink } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { withRouter } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Pricing = (props)=>{
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        props.history.push('/payment');
        //setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
    return(
        <Container>
            <Row>
                <Col md={5}>
                    <Card border="info">
                        <Card.Header style={{height:"17.5rem",fontSize:"2rem"}} className="d-flex justify-content-center align-items-center text-info font-weight-bold font-italic">Free Tier</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                <Col xs={4}>
                                Type :
                                </Col> 
                                <Col xs={6}>
                                Free tier 
                                </Col>
                                </Row>
                                <Row>
                                <Col xs={4}>
                                Call Facilty : 
                                </Col>
                                <Col xs={6}>
                                5 mins per day <span className="badge badge-success">Free</span> 
                                </Col>
                                </Row>
                                <Row>
                                <Col xs={6}>
                                Email Facility :
                                </Col> 
                                <Col xs={4}>
                                <CheckIcon  color="success" fontSize="large"/>
                                </Col>
                                </Row>
                                <Row>
                                <Col xs={6}>
                                Discussion Forum : 
                                </Col>
                                <Col xs={6}>
                                <CheckIcon  color="success" fontSize="large"/>
                                </Col>
                                </Row>
                                <Row>
                                <Col xs={6}>
                                Personal Instructor : 
                                </Col>
                                <Col xs={6}>
                                <CloseIcon sx={{ color: pink[500] }} fontSize="large"></CloseIcon>
                                </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card border="info">
                        <Card.Header style={{height:"12.7rem",fontSize:"2rem"}} className="d-flex justify-content-center align-items-center text-info font-weight-bold font-italic">Premium Tier
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                <Col xs={4}>
                                Type :
                                </Col> 
                                <Col xs={6}>
                                Paid tier
                                </Col>
                                </Row>
                                <Row>
                                <Col xs={4}>
                                Pricing
                                </Col> 
                                <Col xs={6}>
                                Rs 5000 per month
                                </Col>
                                </Row>
                                <Row>
                                <Col xs={4}>
                                Call Facilty : 
                                </Col>
                                <Col xs={6}>
                                Unlimited 
                                </Col>
                                </Row>
                                <Row>
                                <Col xs={6}>
                                Email Facility :
                                </Col> 
                                <Col xs={4}>
                                <CheckIcon  color="success" fontSize="large"/>
                                </Col>
                                </Row>
                                <Row>
                                <Col xs={6}>
                                Discussion Forum : 
                                </Col>
                                <Col xs={6}>
                                <CheckIcon  color="success" fontSize="large"/>
                                </Col>
                                </Row>
                                <Row>
                                <Col xs={6}>
                                Personal Instructor : 
                                </Col>
                                <Col xs={6}>
                                <CheckIcon  color="success" fontSize="large"/>
                                </Col>
                                </Row>
                            </Card.Text>
                            <Button variant="outline-info" onClick={handleClick}>Pay</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {open ?
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar anchorOrigin={{ vertical: "top",horizontal: "right"}} open={open} autoHideDuration={4000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Transaction Completed Successfully
                        </Alert>
                    </Snackbar>
                    {/* <Alert severity="success">This is a success message!</Alert> */}
                </Stack>:null}
        </Container>
    )
}
export default withRouter(Pricing);