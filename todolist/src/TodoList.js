import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  //初始化
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      // Restore input to empty
      inputValue: ''
    })
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete(index){
    //copy list
    const list = [...this.state.list];
    //delete
    list.splice(index, 1);
    //alter to new list
    this.setState({list})
  }

  getTodoItems(){
    return(
        //map() - loop over the elements in an array
        //Loop through the data inside the list, returning <li> for each data
        this.state.list.map((item, index) => {
          return(
            <TodoItem 
              delete = {this.handleDelete} 
              key = {index} 
              content = {item} 
              index={index}/>
          )
        })
    )
  }

  render(){
    return (
      <div className="TodoList">
        <div>
          <input value = {this.state.inputValue} onChange = {this.handleInputChange}/>
          <button onClick = {this.handleBtnClick}>Add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </div>
    );
  }
}

export default TodoList;
