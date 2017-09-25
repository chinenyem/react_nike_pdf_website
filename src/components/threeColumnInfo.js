import React, { Component } from "react";
import styled from 'styled-components';
import grayHorizontalline from '../assets/horizontal-line.svg';


const Column = styled.div`
  color:#fcf7f5;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const Para = styled.p`
  font-family:'Assistant', sans-serif;
  font-size: 11px;
  line-height: 25px;
  text-align:left;
`;

const CenterRows = styled.div`
  padding-right:14%;
  padding-left:14%;

  > h5{
    font-size:16px;
    font-weight:bolder;
  }
`

const Img = styled.img`
  float:left;
  width: 2%;
  padding-left: 5px;
  margin-bottom: 24px;
`

const Line = styled.div`
  margin-left: 45%;
`


class ThreeColumnInfo extends Component{
  render(){
    return(
      <Column className="col-lg-12">
        <Line className="col-lg-12">
          <Img src={grayHorizontalline} className="App-logo" alt="line" />
          <Img src={grayHorizontalline} className="App-logo" alt="line" />
        </Line>
        <CenterRows className="col-lg-12">
          <div className="col-lg-4">
            <h5>BLANDIT<br/>TINCIDUNT METUS</h5>
            <Para>
              Proin eget tortor malesuada, dapibus mis pretium, semper diam. Donec in rutrum turpis. Duis eu
              faucibus est. Aliquam bitae nibh vestibulum, rhonocus augue eu, venenatis erat. Vivamus ipsum metus,
              sodales nec sceleriques faucibus cursus in quam. Mauris nibh neque, euismod in malesuada sed, commoodo et lacus.
              Maecenas gravida, lacus dictum eleifend faciisis, justo felis alqiqum dui, nec soldales quam neque.
            </Para>
          </div>
          <div className="col-lg-4">
            <h5>METUS<br/>PELLENTESQUE</h5>
            <Para>
              Proin eget tortor malesuada, dapibus mis pretium, semper diam. Donec in rutrum turpis. Duis eu
              faucibus est. Aliquam bitae nibh vestibulum, rhonocus augue eu, venenatis erat. Vivamus ipsum metus,
              sodales nec sceleriques faucibus cursus in quam. Mauris nibh neque, euismod in malesuada sed, commoodo et lacus.
              Maecenas gravida, lacus dictum eleifend faciisis, justo felis alqiqum dui, nec soldales quam neque.
            </Para>
          </div>
          <div className="col-lg-4">
            <h5>BLANDIT<br/>TINCIDUNT METUS</h5>
            <Para>
              Proin eget tortor malesuada, dapibus mis pretium, semper diam. Donec in rutrum turpis. Duis eu
              faucibus est. Aliquam bitae nibh vestibulum, rhonocus augue eu, venenatis erat. Vivamus ipsum metus,
              sodales nec sceleriques faucibus cursus in quam. Mauris nibh neque, euismod in malesuada sed, commoodo et lacus.
              Maecenas gravida, lacus dictum eleifend faciisis, justo felis alqiqum dui, nec soldales quam neque.
            </Para>
          </div>
        </CenterRows>
      </Column>
    )
  }
}

export default ThreeColumnInfo;
