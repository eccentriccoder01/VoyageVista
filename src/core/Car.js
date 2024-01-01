import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import View1 from './../image/View1.jpg';
import View2 from './../image/View2.jpg';
import View3 from './../image/View3.jpg';
import View4 from './../image/Salto Ángel, Venezuela.jpg';
import View5 from './../image/View5.jpg';
import View6 from './../image/View6.jpg';
import "./../CSS/Car.css";
import { Link } from "react-router-dom";

export default function Car() {
    return (
  <Carousel className="container-fluid p-0">
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={View1} alt="First slide"/>
    <Carousel.Caption className="Car-caption-center justify-content-end">
      <div className="text-center">
      <h1 className="display-5 text-white pb-3 font-weight-bold">Crafting Unforgettable Journeys for Every Wallet With <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span></h1>
      <button className="btn text-white mt-2" style={{ backgroundColor: '#13274F' }}><Link to='/shop' className="text-white">Explore</Link></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={View2} alt="First slide"/>
    <Carousel.Caption className="Car-caption-center justify-content-end">
      <div className="text-center">
      <h1 className="display-5 text-white pb-3 font-weight-bold"><span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span>: Discovering New Worlds, Where Every Voyage is a Lesson</h1>
      <button className="btn text-white mt-2" style={{ backgroundColor: '#13274F' }}><Link to='/shop' className="text-white">Explore</Link></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={View3} alt="First slide"/>
    <Carousel.Caption className="Car-caption-center justify-content-start">
      <div className="text-center">
      <h1 className="display-5 text-white pb-3 font-weight-bold">Unveil New Horizons: From Solo Escapes to Group Expeditions With <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span></h1>
      <button className="btn text-white mt-2" style={{ backgroundColor: '#13274F' }}><Link to='/shop' className="text-white">Explore</Link></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={View4} alt="First slide"/>
    <Carousel.Caption className="Car-caption-center justify-content-start">
      <div className="text-center">
      <h1 className="display-5 text-white pb-3 font-weight-bold">Chase Your Ideal Getaway With <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span>: Unleash the Adventure Within</h1>
      <button className="btn text-white mt-2" style={{ backgroundColor: '#13274F' }}><Link to='/shop' className="text-white">Explore</Link></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={View5} alt="First slide"/>
    <Carousel.Caption className="Car-caption-center justify-content-center">
      <div className="text-center">
      <h1 className="display-5 text-white pb-3 font-weight-bold">Grab a Ticket With <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span>, Set Your Sights, Relax and Wander</h1>
      <button className="btn text-white mt-2" style={{ backgroundColor: '#13274F' }}><Link to='/shop' className="text-white">Explore</Link></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={View6} alt="First slide"/>
    <Carousel.Caption className="Car-caption-center justify-content-center">
      <div className="text-center">
      <h1 className="display-5 text-white pb-3 font-weight-bold">Venture Beyond With <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span>, Embrace the Unknown</h1>
      <button className="btn text-white mt-2" style={{ backgroundColor: '#13274F' }}><Link to='/shop' className="text-white">Explore</Link></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
