import React, { Fragment } from "react";
import { connect, Connect } from "react-redux";
import { addAction, reduceAction } from "../actions";

function CountButton(props){
    const addTen = () => {
        props.sendAdd(10)
    }

    const reduceTwo = () => {
        props.sendReduce(2)
    }

    return(
        <Fragment>
            <button onClick={addTen}> +10 </button>
            <button onClick={reduceTwo}> -2 </button>
        </Fragment>

    )
}

const mapDispatchToProps = dispatch => {
    return{
        sendAdd: (num) => {
            dispatch(addAction(num))
        },
        sendReduce: (num) => {
            dispatch(reduceAction(num))
        }
    }
}

export default connect(null, mapDispatchToProps)(CountButton);