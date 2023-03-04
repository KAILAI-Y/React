import React, { Component, Fragment } from "react";
import { GlobalStyle } from "./style";
import { GlobalFontStyle } from "./statics/iconfont/iconfont";
import Header from './common/header'

class App extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <GlobalStyle />
        <GlobalFontStyle />
      </Fragment>
    );

  }
}

export default App;
