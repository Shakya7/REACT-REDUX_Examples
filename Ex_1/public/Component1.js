import {connect} from "react-redux";
import actionFunc1 from "./Actions/Action1";
import actionFunc2 from "./Actions/Action2";
import actionFunc3 from "./Actions/Action3";
import {actionFunc3Reset}from "./Actions/Action3"

function Component1(props){
  return(
    <div>
      {`Count value: ${props.value}`}
      {`String message: ${props.message}`}
      <button onClick={props.funct1}>Increment 1</button>
      <button onClick={props.funct2}>Decrement 1</button>
      <button onClick={props.funct3}>Change text</button>
      <button onClick={props.funct3R}>Reset text</button>
      
    </div>  
  )
}
const mapStateToProps=(state)=>{
  return{
    value:state.value,
    message:state.message
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    funct1:()=>{dispatch(actionFunc1())},
    funct2:()=>{dispatch(actionFunc2())},
    funct3:()=>{dispatch(actionFunc3())},
    funct3R:()=>{dispatch(actionFunc3Reset())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Component1);
