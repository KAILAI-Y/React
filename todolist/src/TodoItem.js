import React, {Component} from "react";

class TodoItem extends Component{
    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    //子组件如果想和父组件通信，子组件要吊用父组件传递过来的方法
    handleDelete(){
        this.props.delete(this.props.index);
    }

    render(){
        const {content} = this.props;
        return(
            //父组件通过属性的形式向子组件传递参数
            //子组件通过props接受父组件传递过来的参数
            <div onClick={this.handleDelete}>{content}</div>
        )
    }
}

export default TodoItem;