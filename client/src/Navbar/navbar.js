import React from 'react';
import { NavDropdown, Navbar, Nav , OverlayTrigger, Popover,Button, NavItem,Container,Dropdown,ButtonGroup,Row,Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const FixedNavbar = ()=>{
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
    return (
        <Container>
            <Navbar collapseOnSelect expand="md" bg="info" variant="light" fixed="top">
                <Navbar.Brand href="#" className="font-weight-bold" style={{color:"#000080"}}><img src="https://static.thenounproject.com/png/2390111-200.png" alt="solution" style={{height:"60px",width:"60px"}}></img>Solutionists</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/home" className="bg-nav">Home</Nav.Link>
                    <Nav.Link href="/aboutus" className="bg-nav">About Us</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <NavDropdown title="Resources" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/discussion-forum"><i class="fa fa-commenting" aria-hidden="true" style={{color:"blue"}}></i><Link to="/discussion-forum" style={{color:"black",
                        textDecoration:"none"}}>&nbsp;&nbsp;Discussion Forum</Link></NavDropdown.Item>
                        <NavDropdown.Item href="/personal-instructor">
                        <img src="https://static.thenounproject.com/png/510086-200.png" alt="Personal tutor pic" style={{height:"25px",width:"25px"}}/> 
                        <Link to="/personal-instructor" style={{color:"black",
                        textDecoration:"none"}}>Personal Instructor</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                        <img src="https://cdn-icons-png.flaticon.com/512/3449/3449692.png" alt="Personal tutor pic" style={{height:"25px",width:"25px"}} 
                        />  <Link to="/tutor" style={{color:"black",
                        textDecoration:"none"}}>Wanna be Tutor</Link></NavDropdown.Item>
                        
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Dropdown as={ButtonGroup}>
                    <Button variant="primary">Signup/Login</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <div>
                        <span className="d-flex justify-content-start ml-3"><Avatar {...stringAvatar('Kent Dodds')} className="mr-3"/>
                        <span className="mt-1">Ben Stone</span>
                        </span>
                        </div>
                        <Dropdown.Item href="#/action-2" className="border mt-1">User profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        </Container>
    )
}
export default FixedNavbar;