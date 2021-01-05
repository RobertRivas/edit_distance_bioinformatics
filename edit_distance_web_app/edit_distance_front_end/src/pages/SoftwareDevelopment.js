import React, {Component} from 'react';
import { Jumbotron as Jumbo,Container } from "react-bootstrap";


import EditDistance from "../applications/edit_distance/edit_distance_form";
import NavBar from "../siteStructures/nav_bar";
import Footer from "../siteStructures/Footer";
import styled from "styled-components";

import computerPic_ from '../assets/computerPic.jpg';

const computerPic = '/static/computerPic.jpg';


const Styles = styled.div`
.jumbo {
    background: url(${computerPic}) no-repeat fixed bottom;
    background-size: cover;
    background-position: center;
    height: 400px;
    z-index: -2;
    
   }
    
   
`;

class SoftwareDevelopment extends Component{
  render()
  {
    return (

            <Styles>
        <NavBar />

        <Jumbo fluid className="jumbo" />

        <EditDistance />
        <Footer/>
        </Styles>

    );
  }
}

export default SoftwareDevelopment;