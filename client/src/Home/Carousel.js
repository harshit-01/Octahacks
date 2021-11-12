import React, {useState} from 'react';
import {Container,Row,Col,Card,Button,Carousel} from 'react-bootstrap'

const ControlledCarousel = ()=>{
   return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://images-na.ssl-images-amazon.com/images/I/81NyT6pR3iL.jpg"
            alt="First slide"
            style={{height: "30em",width:"50em"}}
          />
          <Carousel.Caption>
            <h3 style={{color: "floralwhite"}}>First slide label</h3>
            <p style={{color: "floralwhite"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://images-na.ssl-images-amazon.com/images/I/81NyT6pR3iL.jpg"
            alt="Second slide"
            style={{height: "30em",width:"50em"}}
          />
      
          <Carousel.Caption>
            <h3 style={{color: "floralwhite"}}>Second slide label</h3>
            <p style={{color: "floralwhite"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://images-na.ssl-images-amazon.com/images/I/81NyT6pR3iL.jpg"
            alt="Third slide"
            style={{height: "30em",width:"50em"}}
          />
      
          <Carousel.Caption>
            <h3 style={{color: "floralwhite"}}>Third slide label</h3>
            <p style={{color: "floralwhite"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   )
  }
export default ControlledCarousel;