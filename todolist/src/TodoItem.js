import React from "react";

class TodoItem extends React.Component{
    //子组件如果想和父组件通信，子组件要吊用父组件传递过来的方法
    handleDelete(){
        this.props.delete(this.props.index);

    }

    render(){
        return(
            //父组件通过属性的形式向子组件传递参数
            //子组件通过props接受父组件传递过来的参数
            <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
        )
    }
}

export default TodoItem;