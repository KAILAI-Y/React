import React from "react";
import CountButton from "./components/CountButton";
import CountNum from "./components/CountNum";
import { Provider} from "react-redux";
import store from "./store";
import { createStore } from "redux";
// import "./App.css";

function App(){
    return (
        <Provider store={store}>
            <div className="App">
                <CountButton />
                <CountNum />
            </div>
        </Provider>
    )

}

export default App;