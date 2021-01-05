import React from "react";
import { Link } from "react-router-dom";
// import { StyledFooter } from "./styles";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledFooter = styled(Navbar)`
    background-color: transparent;
    -webkit-box-shadow: 0 24px 38px 3px #f7f7f72e, 0 9px 46px 8px #ffffff2b, 0 11px 15px -7px #ffffff45;
    box-shadow: 0 24px 38px 3px #f7f7f72e, 0 9px 46px 8px #ffffff2b, 0 11px 15px -7px #ffffff45;
    border-top: 2px solid black;
    position: fixed;
        bottom: 0;
        width: 100%;
    

`;
const Footer = () => {
    return (
        <StyledFooter sticky="bottom">
            <div style={{ float: "left" }}>© 2020 Copyright: Robert Rivas</div>
            <div style={{ float: "right", marginLeft: "auto" }}>

            </div>
        </StyledFooter>
    );
};

export default Footer;