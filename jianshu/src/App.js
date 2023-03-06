import React, { Component } from "react";
import { GlobalStyle } from "./style";
import { GlobalFontStyle } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import Header from './common/header';
import store from './store';


class App extends Component{
  render(){
    return (
      <Provider store= {store}>
        <Header />
        <GlobalStyle />
        <GlobalFontStyle />
      </Provider>
    );

  }
}

export default App;
