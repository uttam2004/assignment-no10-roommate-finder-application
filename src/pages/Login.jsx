import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email, password);
    }
    return (
        <div className="card bg-base-100 mx-auto my-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-bold">Login now!</h1>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Don't have an account ?Please <Link to='/register' className='text-blue-500 font-bold'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;