const state2={
  value: 20,
  //message: "Left "+this.value,
  object: "Momos"
}

const reducer2=(state=state2, action)=>{
  switch(action.type){
    case "INCR2":
      return({...state,value:state.value+1});
    case "DECR2":
      return({...state,value:state.value-1});
    default:
      return state;   
  }
}
export default reducer2;
