import React, { Component } from "react";
import styled from 'styled-components';
import blacklogo from '../assets/logo.svg';



const HeaderDiv = styled.div`
      background-color: #282b2a;
      height: 43px;
      right: 0;
      left: 0;
      z-index: 999;
      top: 0;
    `;

const SectionLogo = styled.div`
      width: 15%;
      float:left;
      background-color:#a4d359;
      position:absolute;
      height: 100%;
      margin-left: -15px;

      > img {
        width: 41%;
        margin-top: 6px;
        left: 27%;
        position: absolute;
        height: 30px;
      }
    `;

const SectionNav = styled.div`
        margin-left: 20%;
        position: absolute;
        width: 85%;
        height: 100%;
      > ul {
        list-style-type: none;
        text-align: center;
        color: #fcf7f5;
        float: left;
        margin-left: 3%;
        margin-top: 11px;
        > li {
          display: inline;
          margin-right: 3em;
          font-size: 12px;
          > a {
            text-decoration:none;
            color:#fcf7f5;
          }
          > a:hover {
            color:#a4d359;
          }
        }
      }
     `;




class HeaderNav extends Component{

  render(){
    return(
      <HeaderDiv className="col-lg-12">
        <SectionLogo className="col-lg-3">
          <img src={blacklogo} className="App-logo" alt="logo" />
        </SectionLogo>
        <SectionNav className="col-lg-8">
          <ul>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">INVOLEMENT</a>
            </li>
          </ul>
        </SectionNav>
      </HeaderDiv>
    )
  }
}


export default HeaderNav;
