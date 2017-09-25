import React, { Component } from 'react';
import HeaderNav from './headerNav';
import HeroContent from './heroContent';
import ThreeColumnInfo from './threeColumnInfo';
import SuperFlyContainer from './superFlyContainer';
import JoinContent from './joinContent';
import FooterLevel from './footerlevel.js'
import styled from 'styled-components';


const AppMain = styled.div`
  padding-right:0;
  padding-left:0;
`

class App extends Component {
  render() {
    return (
      <AppMain className="app col-lg-12">
       <HeaderNav />
       <HeroContent />
       <ThreeColumnInfo />
       <SuperFlyContainer />
       <JoinContent />
       <FooterLevel />
      </AppMain>
    );
  }
}

export default App;
