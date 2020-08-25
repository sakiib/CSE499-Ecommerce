import React, { useState } from 'react';
import Layout from '../core/Layout';
import { Link } from 'react-router-dom';
import { signup } from '../auth';

const Signup = () =>  {
    const [values, setValues] = useState({
        name: '', email: '', password: '', error: '', success: false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false});
        signup({ name, email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values, name: '', email: '', password: '', error: '', success: true
                });
            }
        });
    };

    const signUpForm = () => (
        <form className='signup-form' noValidate>
            {/* username field */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <input name='username' onChange={handleChange('name')} className='form-control' placeholder='Username' type='text' value={name} />
            </div>
            {/* email field */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>
                    </span>
                </div>
                <input name='email' onChange={handleChange('email')} className='form-control' placeholder='Email address' type='email' value={email} />
            </div>
            {/* password field */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input name='password' onChange={handleChange('password')} className='form-control' placeholder='Create password' type='password' value={password} />
            </div>
            
            <button onClick={clickSubmit} className="btn btn-primary btn-block">
                Submit
            </button>
            {/* Already have an account? */}
            <p className='text-center text-dark'>
                Have an account?
                <Link to='/signin'> Sign In </Link>
            </p>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );
    
    return (
        <Layout title="Signup Page" description="Signup to MERN E-Commerce App">
            <div className='signup-container'>
                <div className='row px-3 vh-100'>
                    <div className='col-md-5 mx-auto align-self-center'> 
                        { showSuccess() }
                        { showError() }
                        { signUpForm() }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;