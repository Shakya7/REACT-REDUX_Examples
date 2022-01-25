import {combineReducers} from "redux";
import reducer1 from "./reducer1";
import reducer2 from "./reducer2";

const rootReducer=combineReducers(
  {
    obj1:reducer1,
    obj2:reducer2
  }
)
export default rootReducer;
