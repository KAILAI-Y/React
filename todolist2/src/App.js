import React, { Component, Fragment } from 'react';
import './style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            // show: true
            list: []
        }
        this.handleAddItem = this.handleAddItem.bind(this)
    }

    render(){
        return(
            <Fragment>
                <TransitionGroup>
                {
                    this.state.list.map((item, index) => {
                        return(
                            <CSSTransition
                                in={this.state.show}
                                timeout={1000}
                                classNames = 'fade'
                                unmountOnExit
                                onEntered={(el) => {el.style.color = 'blue'}}
                                appear={true}
                                key = {index}
                            >                            
                                <div>{item}</div>
                            </CSSTransition>

                        )
                    })
                }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>toggle</button>
            </Fragment>
        )
    }

    handleAddItem(){
        this.setState((prevState) =>{
            return{
                list: [...prevState.list, 'item']
            }
        })
    }
}

export default App;