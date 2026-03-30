import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData);

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());
    }
    return (
        <div className="card bg-base-100 mx-auto my-10 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className='label'>Name</label>
                    <input className='input' type="text" name="name" placeholder='User Name' />
                    <label className='label'>Photo URL</label>
                    <input className='input' type="text" name="photo" placeholder='Photo URL' />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already have an account ?Please <Link to='/login' className='text-blue-500 font-bold'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;