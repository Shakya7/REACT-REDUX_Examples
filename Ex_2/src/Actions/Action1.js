const INCR1="INCR1"

function action1(){
  return({
    type: INCR1
  })
}
export function action1D(){
  return({
    type: "DECR1"
  })
}
export default action1;
