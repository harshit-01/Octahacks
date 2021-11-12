import React from 'react';
import { Container,Row,Col,Card} from 'react-bootstrap';
import "./AboutUs.css";

const AboutUs = () => {

    const team = [
        {
            name: "Harshit Kashyap",
            position: "Founder"
        }, 
        {
            name: "Puneet Goel",
            position: "Founder"
        }, 
        {
            name: "Henry Perry",
            position: "Physics SME"
        }, 
        {
            name: "David Hoover",
            position: "Mathematics SME"
        }, 
        {
            name: "Aydan Liu",
            position: "Law SME"
        }, 
        {
            name: "Jamar Skinner",
            position: "Regional Language SME"
        }, 
        {
            name: "Pranav Mcintosh",
            position: "Computer Science SME"
        }
    ];

    return (
        <Container>
            <Row className="m-3">
                <h2 className="text-primary font-weight-bold">About Us</h2>
            </Row>
            <Row className="m-3">
                <p>
                    We are an Ed-tech startup. We provide solutions to your subject-related queries. 
                    <br />
                    Our main motive is to enlighten you for your shining future. We provide knowledge for various entrance exams.
                    <br />
                    Connect with your assigned  Subject Matter Expert (via Call, Chat, Email, 
                    Video <span class="badge badge-info p-2">Coming Soon !!</span> {'  '}
                    ) for more clarification related to your doubts.
                </p>
            </Row>
            <Row className="m-3 justify-content-center">
                <h4 className="text-center text-info font-weight-bolder"> Meet Our Team </h4>
            </Row>
            <Row xs={1} md={3}>
                {team.map((member, idx) => (
                    <Col key = {idx} className="p-3">
                        <Card border="info">
                            <Card.Img variant="top" src="https://www.w3schools.com/howto/img_avatar.png" style={{height: "35vh"}}/>
                            <Card.Body>
                                <Card.Title className="text-center font-weight-bolder" >{member.name}</Card.Title>
                                <Card.Text className="text-center font-weight-bolder">
                                    {member.position} 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default AboutUs;