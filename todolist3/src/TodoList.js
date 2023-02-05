import React, { Component } from "react";
import { connect} from "react-redux";

class TodoList extends Component{

  render(){
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button>ADD</button>
        </div>
        <ul>
          <li>english</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    inputValue: state.inputValue
  }
}


//store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return{
    changeInputValue(e){
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    }


  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);