import { combineReducers } from "redux";
import requestReducer from "./request.reducer";

const rootReducer = combineReducers({
    request: requestReducer
})

export default rootReducer