import React, { Component } from "react";
import styled from 'styled-components';
import grayHorizontalline from '../assets/horizontal-line-white.svg';
import circle from '../assets/oval.svg';
import bigPicture from '../assets/content-2-bg.png';
import greencircle from '../assets/circle-bg.png';
import bigleft from '../assets/big-left.png';
import bigright from '../assets/big-right.png';
import bottomright from '../assets/bottom-view.png';


const SuperMainContainer = styled.div`
  background-image: linear-gradient(to right,black 0%,gray 100%), url(${bigPicture});
  height: 100%;
  background-repeat: no-repeat;
  background-position: right;
  color: #fcf7f5;
  background-blend-mode: soft-light;
`;

const SuperContainer = styled.div`
  padding-right: 12%;
  padding-left: 11.9%;
  z-index: 12;
  padding-top: 79px;
`;

const Overlay = styled.div`
  background-color: black;
  z-index: 10;
  height: 100%;
  opacity: 0.6;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;


const Para = styled.p`
  font-family:'Assistant', sans-serif;
  font-size: 11px;
  line-height: 25px;
  text-align:left;
`;

const H5 = styled.h5`
  font-size:16px;
  font-weight:bolder;
`;

const Img = styled.img`
  float:left;
  width: 4%;
  padding-left: 5px;
  margin-bottom: 24px;
`;

const Circle = styled.img`
  width: 3%;
`;

const Line = styled.div`
  margin-left: 44.8%;
  margin-top: -11px;
`;

const GreenCircleImg = styled.div`
  > .parent {
     img{
      width: 77%;
      margin-left: 12%;
    }
  }

`;

const Holder = styled.div`
  margin-bottom: 32px;
`;

const Nike = styled.p`
  font-size: 8px;
  font-weight: 200;
  line-height: .5;
`;

const SuperFly = styled.p`
  line-height: 0;
`;

const Shoes = styled.img`
  width: 76px;
  padding: 6px;
  border: .5px solid #a4d359;
`;




class SuperFlyContainer extends Component{
  constructor(props){
    super(props)
    this.state = {imgShoe: bigleft}
  }

  getInitialState() {
        return {
            imgShoe: bigleft
        };
    }

  setImage(image){
      this.setState({imgShoe: Object.values(image)[0]})
  }

  render(){
    return(
      <SuperMainContainer className="col-lg-12">
        <Overlay className="col-lg-12"></Overlay>
        <SuperContainer className="col-lg-12">
          <div className="col-lg-12 col-xs-12">
            <div className="col-lg-2 col-xs-6">
              <Holder className="col-lg-12">
                <Nike>NIKE</Nike>
                <SuperFly>SUPERFLY FG</SuperFly>
              </Holder>
              <div className="col-lg-12 shoecontainer">
                <Shoes src={bigleft} className="col-lg-12" alt="leftsneaker"   onClick={(img) => this.setImage({bigleft})}  />
              </div>
              <div className="col-lg-12 shoecontainer">
                <Shoes src={bigright} className="col-lg-12 noborder" alt="rightsneaker" onClick={(img) => this.setImage({bigright})}/>
              </div>
              <div className="col-lg-12 shoecontainer">
                <Shoes src={bottomright} className="col-lg-12 noborder" alt="bottomsneaker"   onClick={(img) => this.setImage({bottomright})}/>
              </div>
            </div>
            <GreenCircleImg className="col-lg-8 col-xs-6">
                <div className="parent">
                  <img src={greencircle} className="" alt="greencircle" />
                  <img src={this.state.imgShoe} className="childimg" alt="bigleft" />
                </div>
            </GreenCircleImg>
          </div>
          <div className="col-lg-12 col-xs-12">
              <Line className="col-lg-12">
                <Img src={grayHorizontalline} className="App-logo" alt="line" />
                <Img src={grayHorizontalline} className="App-logo" alt="line" />
              </Line>
              <div className="col-lg-12">
                <div className="col-lg-4 col-xs-12">
                  <H5>BLANDIT<br/>TINCIDUNT METUS</H5>
                  <Para>
                    Proin eget tortor malesuada, dapibus mis pretium, semper diam. Donec in rutrum turpis. Duis eu
                    faucibus est. Aliquam bitae nibh vestibulum, rhonocus augue eu, venenatis erat. Vivamus ipsum metus,
                    sodales nec sceleriques faucibus cursus in quam. Mauris nibh neque, euismod in malesuada sed, commoodo et lacus.
                    Maecenas gravida, lacus dictum eleifend faciisis, justo felis alqiqum dui, nec soldales quam neque.
                  </Para>
                  <Circle src={circle} className="App-logo" alt="circle" />
                </div>
                <div className="col-lg-4 col-xs-12">
                  <h5>METUS<br/>PELLENTESQUE</h5>
                  <Para>
                    Proin eget tortor malesuada, dapibus mis pretium, semper diam. Donec in rutrum turpis. Duis eu
                    faucibus est. Aliquam bitae nibh vestibulum, rhonocus augue eu, venenatis erat. Vivamus ipsum metus,
                    sodales nec sceleriques faucibus cursus in quam. Mauris nibh neque, euismod in malesuada sed, commoodo et lacus.
                    Maecenas gravida, lacus dictum eleifend faciisis, justo felis alqiqum dui, nec soldales quam neque.
                  </Para>
                  <Circle src={circle} className="circle" alt="circle" />
                </div>
                <div className="col-lg-4 col-xs-12">
                  <h5>BLANDIT<br/>TINCIDUNT METUS</h5>
                  <Para>
                    Proin eget tortor malesuada, dapibus mis pretium, semper diam. Donec in rutrum turpis. Duis eu
                    faucibus est. Aliquam bitae nibh vestibulum, rhonocus augue eu, venenatis erat. Vivamus ipsum metus,
                    sodales nec sceleriques faucibus cursus in quam. Mauris nibh neque, euismod in malesuada sed, commoodo et lacus.
                    Maecenas gravida, lacus dictum eleifend faciisis, justo felis alqiqum dui, nec soldales quam neque.
                  </Para>
                </div>
              </div>
          </div>
        </SuperContainer>
      </SuperMainContainer>
    )
  }

}


export default SuperFlyContainer;
