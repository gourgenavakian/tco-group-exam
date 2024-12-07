import { combineReducers } from "redux";
import dataReducer from "./profileDataReducers";

const rootReducer = combineReducers({
    data: dataReducer,
});

export default rootReducer;
