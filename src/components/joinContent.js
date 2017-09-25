import React, { Component } from "react";
import styled from 'styled-components';


const JoinMain = styled.div`
    color:#fcf7f5;
    background-color:#a4d359;
`;

const Download = styled.div`
  padding-bottom: 3%;
  padding-top: 3%;
`;

const Para = styled.p`
  font-family:'Assistant', sans-serif;
  font-size: 11px;
  text-align:left;
`;

const Content = styled.div`
  padding-right:14%;
  padding-left:14%;
  padding-bottom: 2%;

`;

const Button = styled.button`
  background-color:#fcf7f5;
  color:#a4d359;
  border-style: none;
  width: 12%;
  height: 30px;
  border-radius: 3px;
  font-size: 11px;

   &:hover{
     background-color:#282b2a;
     color:#fcf7f5;
   }
`;



class JoinContent extends Component{
  render(){
    return(
      <JoinMain className="col-lg-12">
        <Content className="col-lg-12">
          <Download className="col-lg-12">
            <h5>DOWNLOAD & WATCH ALL TUTORIALS ON YOUR DEVICE</h5>
            <h5>DESKTOP COMPUTER, IPHONE, IPAD OR APPLE DEVICE</h5>
          </Download>
          <div className="col-lg-12">
            <Para>
              Sed facilsisls quis sapien es facilisis. Maeconas rutrum augue urt nisl handrerit facilisis. Donec sagittis sit amet odio id adfpiscing. Fusce porttitor fermentum nibhs. Aenean malesuada velit lectus,
              vet ullamcorpes lacus ullamcorper et vet ullamcorpes lacus ullamcorper et.
            </Para>
            <br/>
            <Para>
              Proin ot tortor at justo vulputate tincidunt non sed justo. Vivamus scelerisque arcu at pretiam pellentesque.
            </Para>
            <br/>
            <Button className="btn">JOIN</Button>
          </div>
        </Content>
      </JoinMain>
    )
  }
}


export default JoinContent;
