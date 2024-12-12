import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import AddUser from "./pages/AddUser";
import Profile from "./pages/Profile";
import RegisterUsers from "./pages/RegisterUsers";
import Error404 from "./pages/Error404";
import AllUsersList from "./pages/AllUsersList";
import ContactDirectory from "./pages/ContactDirectory";
import PriceList from "./pages/PriceList";
import ProductCreateForm from "./pages/ProductCreateForm";

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
                <Route path="/users/get-product" element={<PriceList />} />

                {/* Protected Routes */}
                <Route path="/home/:username" element={<Dashboard />} />
                <Route path="/home/:username/chat" element={<Chat />} />
                <Route path="/home/:username/add-user" element={<AddUser />} />
                <Route path="/home/:username/profile" element={<Profile />} />
                <Route path="/home/:username/users" element={<AllUsersList />} />
                <Route path="/home/:username/contact-directory" element={<ContactDirectory />} />
                <Route path="/home/:username/add-internet-package" element={<ProductCreateForm />} />

                {/* Catch-All Route */}
                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;