const initialState={
    search:'stocks',
}
let reducer=(state=initialState, action)=>{
    switch(action.type){
        case 'SEARCH':
            return{
                ...state,
                search: action.payload.search
            }
        default:
            return state
    }
}
export default reducer;