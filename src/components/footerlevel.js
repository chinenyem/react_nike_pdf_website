import React, { Component } from "react";
import styled from 'styled-components';
import blacklogo from '../assets/logo.svg';



const Content = styled.div`
  background-color:#fcf7f5;
`;

const Main = styled.div`
  padding-right: 9%;
  padding-left: 10%;
  padding-top: 4%;
`;

const Ul = styled.ul`
  list-style-type: none;
  text-align: left;
  color:#282b2a;
  font-size:12px;
  >li {
      line-height: 23px;
    > a {
      text-decoration:none;
      color:#282b2a;
    }
    > a:hover {
      color:#a4d359;
    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  >img{
    width:5%;
  }
`;


const Columnone = styled.div`
  color:#282b2a;
`;

const Columntwo = styled.div`
  color:#282b2a;
`;


const Mainli = styled.li`
  font-weight:bolder;
`;

const Designers = styled.div`
      padding-left: 23%;
`;

class FooterLevel extends Component{
  render(){
    return(
      <Content className="col-lg-12">
        <Main className="col-lg-12">
          <Columnone className="col-lg-6 col-xs-12">
            <div className="col-lg-6 col-xs-12">
              <Ul>
                <Mainli>WEB DESIGN STUDIO TUTORIALS</Mainli>
                <li>
                  <a href="#">Design a creative Blog</a>
                </li>
                <li>
                  <a href="#">Design a iPAD Blog</a>
                </li>
                <li>
                  <a href="#">Single Page sales portfolio</a>
                </li>
                <li>
                  <a href="#">Flat product website in Photoshop</a>
                </li>
                <li>
                  <a href="#">Design a creative Blog</a>
                </li>
                <li>
                  <a href="#">Design a iPAD Blog</a>
                </li>
                <li>
                  <a href="#">Single Page sales portfolio</a>
                </li>
              </Ul>
            </div>
            <div className="col-lg-6 col-xs-12">
              <Ul>
                <Mainli>WEB DESIGN STUDIO TUTORIALS</Mainli>
                <li>
                  <a href="#">Design a creative Blog</a>
                </li>
                <li>
                  <a href="#">Design a iPAD Blog</a>
                </li>
                <li>
                  <a href="#">Single Page sales portfolio</a>
                </li>
                <li>
                  <a href="#">Flat product website in Photoshop</a>
                </li>
                <li>
                  <a href="#">Design a creative Blog</a>
                </li>
              </Ul>
            </div>
          </Columnone>
          <Columntwo className="col-lg-6 col-xs-12">
            <Designers className="col-lg-6 col-xs-12">
              <Ul>
                <Mainli>DESIGNERS</Mainli>
                <li>
                  <a href="#">Blaz Robar</a>
                </li>
                <li>
                  <a href="#">Nick Toranto</a>
                </li>
                <li>
                  <a href="#">Joisp Kelava</a>
                </li>
              </Ul>
            </Designers>
            <div className="col-lg-6 col-xs-12">
              <Ul>
                <Mainli>BLAZROBAR.COM</Mainli>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Web Design Video Tutorials</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </Ul>
            </div>
          </Columntwo>
          <ImageContainer className="col-lg-12">
            <img src={blacklogo} className="App-logo" alt="logo" />
          </ImageContainer>
        </Main>
      </Content>
    )
  }
}

export default FooterLevel;
