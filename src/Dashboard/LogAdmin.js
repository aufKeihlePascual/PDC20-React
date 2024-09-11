import React from "react";
import { useState } from 'react';
import AdminPanel from "./AdminPanel";

import {useNavigate} from 'react-router-dom';

function LogAdmin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');
    const [user, setUser] = useState(null);

    const [loginAttempts, setloginAttempts] = useState(0); //# of login attempts
    const [errorMessage, setErrorMessage] = useState(''); //String for error message
    
    const navigate = useNavigate(); //hook to navigate between pages

    //to specify username and password
    const validAdminCredentials = {
        username: 'user123',
        password: 'pass123'
    };

    const handleLogin = () => {
        const isAdmin = accountType === 'admin';
        setUser({name: username, isAdmin});
    }
    return (
        <div>
            {user?(
                <AdminPanel user={user}/>
            ):(<div>
                <h1>Login</h1>
                <div>
                    <label>Username:</label>
                    <input
                    text="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                    text="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label>Account Type:</label>
                    <select
                    text="text"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button onClick={handleLogin}>Login</button>

                </div>)}
        </div>
    );
}

export default LogAdmin;