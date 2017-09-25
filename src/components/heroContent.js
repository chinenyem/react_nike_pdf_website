import React, { Component } from "react";
import styled from 'styled-components';
import greenlogo from '../assets/logo-green.svg';
import heroImage from '../assets/content-1-bg.png';


const Main = styled.div`
  background-image: linear-gradient(to right, black 0%,black 100%), url(${heroImage});
  height: 56%;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: screen;
`;

const Mercurial = styled.h2`
  text-align:center;
  font-family:'Raleway', sans-serif;
  color: #a4d359;
  font-size: 4.5em;
`;

const SubTitle = styled.h4`
  color:#fcf7f5;
  font-size: 3em;
`;

const Centered = styled.div`
  text-align:center;
  top: 139px;
  bottom: 0;
  left: 0;
  margin: auto;
`;



class HeroContent extends Component{
  render(){
    return(
      <Main className="col-lg-12 yes">
          <Centered className="col-lg-12">
            <div className="col-lg-12">
                <img src={greenlogo} className="App-logo" alt="logo" />
            </div>
            <Mercurial className="col-lg-12">
              MERCURIAL SUPERFLY
            </Mercurial>
            <SubTitle>
              It's time to destroy defenses.
            </SubTitle>
          </Centered>
      </Main>
    )
  }

}


export default HeroContent;
