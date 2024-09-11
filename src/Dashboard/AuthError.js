import React from 'react';

function AuthError() {
    return (
        <div>
            <h1>Authentication Error</h1>
            <p>You have exceeded the maximum number of login attempts.</p>
        </div>
    );
}

export default AuthError;