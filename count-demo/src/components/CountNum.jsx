import React from "react";
import { connect, Connect } from "react-redux";

function CountNum(props){
    return(
        <div>{props.count}</div>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(CountNum)