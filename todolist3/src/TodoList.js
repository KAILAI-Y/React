import React, {Component} from "react";
import store from './store/index.js';
import { getAddItemAction, getDeleteItemAction, getInputChangeAction, getInitList} from './store/actionCreators';
import TodoListUI from "./TodoListUI.js";

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return (
            <TodoListUI 
              inputValue={this.state.inputValue}
              list={this.state.list}
              handleInputChange={this.handleInputChange}
              handleBtnClick={this.handleBtnClick}
              handleItemDelete={this.handleItemDelete}
            />
            
        )
    }

    componentDidMount(){
        const action = getInitList();
        // console.log(action);
        store.dispatch(action);
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);

    }
}

export default TodoList;