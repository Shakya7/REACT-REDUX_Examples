const initialState={
  value:0,
  message: "This is the initial state"
}

const reducer=(state=initialState, action)=>{
  switch(action.type){
    case "INCREASE1":
      return({...state,value:state.value+1})
    case "DECREMENT1":
      return({...state,value:state.value-1})  
    case "CHANGE_TEXT":
      return({...state,message:"text is changed"})  
    case "RESET":
      return({...state,message:initialState.message})  
    default:
      return state; 
  }
}
export default reducer;
