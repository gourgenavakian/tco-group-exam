import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import AddUser from "./pages/AddUser";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/login' element={<Login />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/adduser' element={<AddUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;