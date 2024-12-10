import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import AddManager from "./pages/AddManager";
import Profile from "./pages/Profile";
import RegisterUsers from "./pages/RegisterUsers";
import Error404 from "./pages/Error404";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/registration" element={<Registration />} />
                <Route path="/admin/registration" element={<Registration />} />
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/login" element={<Login />} />
                <Route path="/users/registration" element={<RegisterUsers />} />

                {/* Protected Routes */}
                <Route path="/home/:username" element={<Dashboard />} />
                <Route path="/home/:username/chat" element={<Chat />} />
                <Route path="/home/:username/add-manager" element={<AddManager />} />
                <Route path="/home/:username/profile" element={<Profile />} />

                {/* Catch-All Route */}
                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;