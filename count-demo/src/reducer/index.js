/**
*@desc 纯函数，接收两个参数
*@paream state
*@paream action
*/
const initialState = {
    count: 0
}


export const reducer = (state = initialState, action)=> {
    switch(action.type){
        case 'ADD_NUM':
            return{
                ...state,
                count: state.count + action.payload.num
            }
        case 'REDUCE_NUM':
            return{
                ...state,
                count: state.count - action.payload.num
            }
        default:
            return state
    }
}

export default reducer;