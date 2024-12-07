import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import AddManager from "./pages/AddManager";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home/:username/:id' element={<Dashboard />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Login />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/add-manager' element={<AddManager />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;