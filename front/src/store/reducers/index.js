import { combineReducers } from "redux";
import dataReducer from "./profileDataReducers";
import registerUsersReducer from "./registerUsersReducer";
import allDataReducer from "./allUsersDataReducers";
import productsDataReducer from "./productsDataRedusers";

const rootReducer = combineReducers({
    data: dataReducer,
    registerUsers: registerUsersReducer,
    allData: allDataReducer,
    productsData: productsDataReducer,
});

export default rootReducer;
