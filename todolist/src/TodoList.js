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

  }

  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      // Restore input to empty
      inputValue: ''
    })
    // //Add content to the list with each click of the button
    // this.state.list.push('hello world');
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  // handleItemClick(index){
  //   //copy list
  //   const list = [...this.state.list];
  //   //delete
  //   list.splice(index, 1);
  //   //alter to new list
  //   this.setState({list})
  // }

  handleDelete(index){
    //copy list
    const list = [...this.state.list];
    //delete
    list.splice(index, 1);
    //alter to new list
    this.setState({list})
  }

  render(){
    return (
      <div className="TodoList">
        <div>
          <input value = {this.state.inputValue} onChange = {this.handleInputChange.bind(this)}/>
          <button onClick = {this.handleBtnClick.bind(this)}>Add</button>
        </div>
        <ul>
          {
            //map() - loop over the elements in an array
            //Loop through the data inside the list, returning <li> for each data
            this.state.list.map((item, index) => {
              return <TodoItem delete = {this.handleDelete.bind(this)} key = {index} content = {item} index={index}/>
              // return <li key={index} onClick = {this.handleItemClick.bind(this)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
