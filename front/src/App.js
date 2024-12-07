import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import AddUser from "./pages/AddUser";
import Profile from "./pages/Profile";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/registration' element={<Registration />} />
                <Route path='/admin/:registration' element={<Registration />} />
                <Route path='/login' element={<Login />} />
                <Route path='admin/:login' element={<Login />} />
                <Route path='/' element={<Login />} />
                <Route path='/home/:username' element={<Dashboard />} />
                <Route path='/home/:username/:chat' element={<Chat />} />
                <Route path='/home/:username/:add-user' element={<AddUser />} />
                <Route path='/home/:username/:profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;