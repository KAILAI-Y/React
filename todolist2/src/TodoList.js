import React, { Component, Fragment} from "react";
import './style.css';
import TodoItem from "./TodoItem";
import axios from 'axios';
// import Test from "./Test";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render(){
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">Input: </label>
                    <input 
                        id = "insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>Add</button>
                </div>
                <ul ref={(ul) => (this.ul = ul)}>
                    {this.getTodoItem()}
                </ul>
                {/* <Test content= {this.state.inputValue}/> */}
            </Fragment>
            
        )
    }    

    componentDidMount(){
        axios.get('/api/todolist2')
        .then((res) => {console.log(res.data);
            this.setState(() => ({
                list: [...res.data]
            }));
        })
        .catch(() =>{alert('error')})
    }

    getTodoItem(){
      return this.state.list.map((item, index) => {
        return(
            <div key={index}>
                <TodoItem 
                  content={item} 
                  index={index} 
                  deleteItem={this.handleItemDelete}/>
                  {/*<li 
                      key={index}    
                      onClick={this.handleItemDelete.bind(this)}
                      dangerouslySetInnerHTML={{__html: item}}
                  ></li>*/}
            </div>
        )
      })

    }

    handleInputChange(e){
      const value = e.target.value;
      this.setState(() => ({
          inputValue: value
      }));
    }

    handleButtonClick(){
        this.setState((prevState) => ({
          list: [...prevState.list, prevState.inputValue],
            inputValue: ''      
        }));
    }

    handleItemDelete(index){
        this.setState((prevState) => {
          const list = [...prevState.list];
          list.splice(index, 1);
          return {list}
        });
    }

}

export default TodoList;