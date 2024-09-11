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

    const handleLogin = () => {
        const validAdminCredentials = {
            username: 'user123',
            password: 'pass123'
        };

        const isAdmin = accountType ==='admin';

        if (isAdmin && (username === validAdminCredentials.username && password === validAdminCredentials.password)) {
            setUser({name: username, isAdmin});
        } else if (!isAdmin && (username === validAdminCredentials.username && password === validAdminCredentials.password)) {
            setUser({name: username, isAdmin:false});
        } else {
            setloginAttempts(prevAttempts => prevAttempts + 1);
            setErrorMessage('Invalid Credentials');

            //only up to 3 attempts
            if (loginAttempts + 1 >= 3) {
                navigate('/auth-error');
            }
        }

        
    };

    return (
        <div className="continer mt-5">
            {user?(
                <AdminPanel user={user}/>
            ):(
            <div className="card shadow-sm p-4">
                <h1 className="h4 mb-4 text-center">Login</h1>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Username:</label>
                        <input
                        text="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input
                        text="text"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Account Type:</label>
                        <select
                        text="text"
                        className="form-select"
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div className="d-grid">
                        <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
                        {errorMessage && <p style={{color:'red'}}> {errorMessage}</p>}
                        {loginAttempts > 0 && (
                            <p style={{color: 'red'}}>Login Attempts: {loginAttempts}/3</p>
                        )}
                    </div>
                </form>
            </div>
            )}
        </div>
    );
}

export default LogAdmin;