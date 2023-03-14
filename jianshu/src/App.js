import React, { Component } from "react";
import { GlobalStyle } from "./style";
import { GlobalFontStyle } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';


class App extends Component{
  render(){
    return (
      <Provider store= {store}>
        <Header />
        <GlobalStyle />
        <GlobalFontStyle />
        <BrowserRouter>
          <Routes>
            <Route path='/' exact Component={Home}></Route>
            <Route path='detail' exact Component={Detail}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );

  }
}

export default App;
