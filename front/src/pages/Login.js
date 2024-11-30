import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";

function Login(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState(location.state || null);
    console.log(message);


    const onChange = e => {

        const { name, value } = e.target;
        setLogin((prevLogin) => ({
            ...prevLogin,
            [name]: value
        }));

    };

    const onSubmit = async e => {
        e.preventDefault();

        try {

            const response = await axios.post(`${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_PORT}/users/login`, { ...login });
            console.log('response', response);
            const token = response.data.token;
            const user = response.data.user;


            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            setMessage(response.data);


            console.log('Token:', token);
            console.log('User:', user);

            navigate(`/profile/${user.name}/${user._id}`);

        } catch (err) {
            console.error('Sign in error:', err);
            setMessage(err.response);
        }
    };

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    },[message])

    return (
        <div>
            <h1>
                Login
            </h1>
            <form onSubmit={onSubmit}>

                <label> Email
                    <input type="email" name="email" onChange={onChange} value={login.email} required />
                </label>
                <label>Password
                    <input type="password" name="password" onChange={onChange} value={login.password} required />
                </label>
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
                {message && (
                    message.status ? <p style={ message.status === 400 ? {color: 'red'} : {color: 'green'}}>{message.data.message}</p> : null
                )}
            </form>
        </div>
    );
}

export default Login;