"use client"
import React,{useEffect} from "react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import myLogo from '../../public/sonulogo.png'
import myImage from '../../public/heroImage.png'
import { Link as ScrollLink } from "react-scroll/modules";

export default function MyNavbar() {
  useEffect(() => {
    require ('bootstrap/dist/js/bootstrap.js')
}, []);
const navStyle = {
  fontSize:"17px",
  color:"#3998B6",
  fontWeight:"500",
}
const brandStyle = {
  fontSize:"22px",
  color:"#3998B6",
  fontWeight:"600"
}
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-backgroundFirst text-textColor border-b-1 border-textColor">
    <Container className="text-reactColor">
      <Navbar.Brand href="#home" style={brandStyle}>SKUMAR</Navbar.Brand>
      {/* <Image
          width={100}
          height={30}
          className='border-2 border-textColor rounded-lg'
          alt="Sonu Kumar Image"
          src={myLogo}
        /> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto text-reactColor">
          <Nav.Link href="#" style={navStyle}><ScrollLink to="about" smooth={true} duration={300}>ABOUT</ScrollLink></Nav.Link>
          <Nav.Link href="#" style={navStyle}><ScrollLink to="works" smooth={true} duration={300}>WORKS</ScrollLink></Nav.Link>
          <Nav.Link href="#" style={navStyle}><ScrollLink to="projects" smooth={true} duration={300}>PROJECTS</ScrollLink></Nav.Link>
          <Nav.Link href="#" style={navStyle}><ScrollLink to="skills" smooth={true} duration={300}>SKILLS</ScrollLink></Nav.Link>
          <Nav.Link href="#" style={navStyle}> <ScrollLink to="contacts" smooth={true} duration={300}>CONTACTS</ScrollLink></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
