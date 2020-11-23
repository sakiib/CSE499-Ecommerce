import React, { useState, Fragment } from 'react';
import Layout from '../core/Layout';
import { Link } from 'react-router-dom';
import { signup } from '../auth';

const Signup = () =>  {
    const [values, setValues] = useState({
        name: '', email: '', password: '', error: '', success: false, loading: false
    });

    const { name, email, password, success, error, loading } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading: true});
        signup({ name, email, password }).then(data => {
            // console.log({data});
            if (data.error) {
                // console.log('in error');
                setValues({ ...values, error: data.error, success: false, loading: false });
            } else {
                // console.log('in success');
                setValues({
                    ...values, name: '', email: '', password: '', error: '', success: true, loading: false
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
                <input name='name' onChange={handleChange('name')} className='form-control' placeholder='Username' type='text' value={name} />
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
            
            <div className='form-group'>
                <button onClick={clickSubmit} className="btn btn-primary btn-block">
                    Submit
                </button>
            </div>
            {/* Already have an account? */}
            <p className='text-center text-dark'>
                Have an account?
                <Link to='/signin'> Sign In </Link>
            </p>
        </form>
    );
    
    const showLoading = () => (
        <Fragment>
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </Fragment>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            New account is created! Please <Link to="/signin"> Sign In </Link>
        </div>
    );
    
    return (
        <Layout title="Signup Page" description="Signup to MERN E-Commerce App">
            <div className='signup-container'>
                <div className='row px-3 vh-100'>
                    <div className='col-md-5 mx-auto align-self-center'> 
                        { success && showSuccess() }
                        { error && showError() }
                        <div className='text-center pb-4'> { loading && showLoading() } </div>
                        { signUpForm() }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;