import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

function Registration(props) {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        surname: '',
        age: '',
        email: '',
        password: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try{
            const req = await axios.post(`${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_PORT}/users/register`, {...user});

            console.log('request', req);

            if (req.status === 200) {

                setUser({
                    name: '',
                    surname: '',
                    age: '',
                    email: '',
                    password: ''
                });
                navigate('/login', {state: {data: req.data, status: req.status}});
            }

        }catch(err){
            console.log(err);
        }

    };

    return (
        <div>
            <h1>
                Registering new User
            </h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label><br/>
                <input type="text"
                       id="name"
                       name="name"
                       value={user.name}
                       onChange={handleChange}
                       required/><br/><br/>

                <label htmlFor="surname">Surname</label><br/>
                <input type="text"
                       id="surname"
                       name="surname"
                       value={user.surname}
                       onChange={handleChange}
                       required/><br/><br/>

                <label htmlFor="age">Age</label><br/>
                <input type="number"
                       id="age"
                       name="age"
                       min="0"
                       value={user.age}
                       onChange={handleChange}
                       required/><br/><br/>

                <label htmlFor="email">Email</label><br/>
                <input type="email"
                       id="email"
                       name="email"
                       value={user.email}
                       onChange={handleChange}
                       required/><br/><br/>

                <label htmlFor="password">Password</label><br/>
                <input type="password"
                       id="password"
                       name="password"
                       minLength="6"
                       value={user.password}
                       onChange={handleChange}
                       required/><br/><br/>

                <input type="submit" value="Submit"/>
            </form>

            <p>Already have an account? <Link to="/login">Login here</Link>.</p>
        </div>
    );
}

export default Registration;