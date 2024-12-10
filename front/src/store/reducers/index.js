import { combineReducers } from "redux";
import dataReducer from "./profileDataReducers";
import registerUsersReducer from "./registerUsersReducer";

const rootReducer = combineReducers({
    data: dataReducer,
    registerUsers: registerUsersReducer
});

export default rootReducer;
