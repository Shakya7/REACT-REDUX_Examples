const state1={
  value: 10,
  //message: "Left "+state1.value,
  object: "Cakes"
}

const reducer1=(state=state1, action)=>{
  switch(action.type){
    case "INCR1":
      return({...state,value:state.value+1});
    case "DECR1":
      return({...state,value:state.value-1});
    default:
      return state;   
  }
}
export default reducer1;
