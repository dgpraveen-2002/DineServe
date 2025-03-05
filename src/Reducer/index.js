import { combineReducers } from "redux";
import tablereducer from "./tablereducer";
import filterreducer from './filterreducer';

const reducer = combineReducers({
    tablereducer : tablereducer,
    filterreducer : filterreducer
})

export default reducer;