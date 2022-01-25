import {connect, useSelector} from "react-redux";
import action1 from "./Actions/action1";
import {action1D} from "./Actions/action1";
import action2 from "./Actions/action2";
import {action2D} from "./Actions/action2";
import React from "react";


function Component1(props){

  const state1=useSelector((state)=>{return state.obj1.object});


  return(
    <React.Fragment>
      <div>
        {`Count of ${state1}: ${props.value}`}
      </div>  
      <div>
        <button onClick={()=>props.funcInc1()}>Increase by 1</button>
        <button onClick={()=>props.funcDec1()}>Decrease by 1</button>
      </div>
      <br/>
      <br/>
      <div>
        {`Count of ${props.secondObject}: ${props.secondVal}`}
      </div>  
      <div>
        <button onClick={()=>props.funcInc2()}>Increase by 1</button>
        <button onClick={()=>props.funcDec2()}>Decrease by 1</button>
      </div>

    </React.Fragment>
  );
}

const mapStateToProps=(state)=>{
  return{
    value:state.obj1.value,
    object:state.obj1.object,
    secondVal:state.obj2.value,
    secondObject: state.obj2.object
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    funcInc1: ()=>{dispatch(action1())},
    funcDec1: ()=>{dispatch(action1D())},
    funcInc2: ()=>{dispatch(action2())},
    funcDec2: ()=>{dispatch(action2D())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Component1)
