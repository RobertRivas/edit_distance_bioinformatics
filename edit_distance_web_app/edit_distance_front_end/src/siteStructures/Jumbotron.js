import React from 'react';
import { Jumbotron as Jumbo,Container } from "react-bootstrap";
import styled from "styled-components";



const spacePic = '/static/spacePic.jpg'
const Styles = styled.div`
.jumbo {
    background: url(${spacePic}) no-repeat fixed bottom;
    background-size: auto;
    color: #efefef;
    height: 600px;
    position: relative;
    z-index: -2;
  }
  .overlay {
   
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
export const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
        <Container>
            <h1>Robert Rivas</h1>
            <p>Portfolio</p>
        </Container>
    </Jumbo>
    </Styles>
)