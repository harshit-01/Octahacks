import React from 'react';
import { withRouter } from 'react-router-dom';
import {Container,Row,Col,Card,Button,Carousel} from 'react-bootstrap'
import ControlledCarousel from './Carousel.js'
import RecentNews from './RecentNews.js'
import ForumIcon from '@mui/icons-material/Forum';

const Home = (props)=>{
    return(
        <Container>
            <Row className="mb-3">
                <Col sm={6} md={6}>
                    <Card border="info" className="home">
                        <Card.Header className="text-info font-weight-bold">
                        <ForumIcon /> Discussion Forum
                        <span className="badge badge-primary ml-1">Info</span></Card.Header>
                        <Card.Body>
                        <Card.Title>Solving Doubt through Forum</Card.Title>
                        <Card.Text>
                            We at Solutionists are available for you 24/7 with our highly
                            skilled teachers to guide you and solve you doubts with the help of 
                            discussion forum facility.
                        </Card.Text>
                        <Button variant="outline-info" onClick={() =>{
                            props.history.push("/discussion-forum")
                        }}>Proceed To Forum</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={5}>
                    <Card border="info" className="home mt-1 mt-sm-0">
                        <Card.Header className="text-info font-weight-bold">
                        <i class="fa fa-phone mr-1" aria-hidden="true"></i>Call/Email Facility
                        <span className="badge badge-primary ml-1">Info</span></Card.Header>
                        <Card.Body>
                        <Card.Title>Solving Doubt via Call/Email Facility</Card.Title>
                        <Card.Text>
                            In case you want to personally interact with our teachers we also provide calling and email facilities absolutely <span className="badge badge-success">Free</span> of cost.
                        </Card.Text>
                        <Button variant="outline-info"  onClick={() =>{
                            props.history.push("/personal-instructor")
                        }}>Proceed</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                  <ControlledCarousel />
                </Col>
                <Col md={4} className="news">
                    <RecentNews />
                </Col>
            </Row>
        </Container>
    )
}
export default withRouter(Home);
