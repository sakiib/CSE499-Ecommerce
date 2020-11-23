import React, { useState, Fragment } from 'react';
import Layout from '../core/Layout';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from '../auth';

const Signin = () =>  {
    const [values, setValues] = useState({
        email: '', password: '', error: '', loading: false, redirectToReferrer: false
    });

    const { email, password, error, loading, redirectToReferrer } = values;
    const {user} = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading: true});
        signin({ email, password }).then(data => {
            // console.log({data});
            if (data.error) {
                // console.log('in error');
                setValues({ ...values, error: data.error, success: false, loading: false });
            } else {
                // console.log('in success');
                authenticate(data, () => {
                    setValues({
                        ...values, redirectToReferrer: true
                    });
                });
            }
        });
    };

    const signInForm = () => (
        <form className='signup-form' noValidate>
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
            {/* Need an account? */}
            <p className='text-center text-dark'>
                Need an account?
                <Link to='/signup'> Sign Up </Link>
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

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to='/admin/dashboard' />
            } else {
                return <Redirect to='/user/dashboard' />
            }
        }
        if (isAuthenticated()) {
            return <Redirect to='/' />
        }
    };
    
    return (
        <Layout title="Signin Page" description="Signin to MERN E-Commerce App">
            <div className='signin-container'>
                <div className='row px-3 vh-100'>
                    <div className='col-md-5 mx-auto align-self-center'> 
                        { error && showError() }
                        <div className='text-center pb-4'> { loading && showLoading() } </div>
                        { signInForm() }
                        { redirectUser() }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signin;