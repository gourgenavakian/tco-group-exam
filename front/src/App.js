import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import AddManager from "./pages/AddManager";
import Profile from "./pages/Profile";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/registration" element={<Registration />} />
                <Route path="/admin/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/login" element={<Login />} />

                {/* Protected Routes */}
                <Route path="/home/:username" element={<Dashboard />} />
                <Route path="/home/:username/chat" element={<Chat />} />
                <Route path="/home/:username/add-manager" element={<AddManager />} />
                <Route path="/home/:username/profile" element={<Profile />} />

                {/* Catch-All Route */}
                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;