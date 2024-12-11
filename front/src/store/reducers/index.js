import { combineReducers } from "redux";
import dataReducer from "./profileDataReducers";
import registerUsersReducer from "./registerUsersReducer";
import allDataReducer from "./allUsersDataReducers";

const rootReducer = combineReducers({
    data: dataReducer,
    registerUsers: registerUsersReducer,
    allData: allDataReducer
});

export default rootReducer;
