import React from 'react';
import { Jumbotron as Jumbo,Container } from "react-bootstrap";

import styled from "styled-components";

import flowers_ from '../assets/flowers.jpg'
import NavBar from "../siteStructures/nav_bar";
import Footer from "../siteStructures/Footer";

const flowers = '/static/flowers.jpg'


const Styles = styled.div`
.jumbo {
    background: url(${flowers}) no-repeat fixed bottom;
    background-size: cover;
    background-position: center;
    
    color: #efefef;
    height: 100vh;
    width: 100vw;
    
    position: absolute;
    z-index: -2;
    margin-bottom: 0rem;
    
  }
  .overlay {
  display: none;
  position: fixed;
   width: 100%;
   height: 100%;
   
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    
    z-index: -1;
    
    
  }
  
  .inside-jumbo{
  text-align: center;
  }
  

`;


export const Home = () =>(

 <Styles>

    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <NavBar />
        <Container className={'inside-jumbo'}>
            <h1>Robert Rivas</h1>
            <p>Portfolio</p>
        </Container>
        <Footer />

    </Jumbo>


    </Styles>

)