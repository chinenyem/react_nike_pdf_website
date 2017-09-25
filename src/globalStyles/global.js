import { injectGlobal } from 'styled-components';

injectGlobal`
 @import url('https://fonts.googleapis.com/css?family=Raleway:900|Source+Sans+Pro|Assistant:200');


 html, body{
   width: 100%;
   height: 100%;
   margin: 0px;
   padding: 0px;
   overflow-x: hidden;
 }

 html {
  height: 100%;
 }

 body {
   background-color:#020203;
   font-family:'Source Sans Pro', sans-serif;
   min-height: 100%;

   .container-fluid{
     padding-right: 0;
     padding-left: 0;
   }
  .app{
    height: 1020px;
  }

  .shoecontainer {
    margin-bottom: 35px;
  }

  .noborder{
    border:none;
  }

  .hide{
    display:none;
  }

  .parent{
    position:relative;
  }

  .childimg{
    position:absolute;
    left: -16%;
    top: 19%;
    max-width: 78%;
  }

 }


`
