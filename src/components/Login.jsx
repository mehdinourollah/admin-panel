import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from '../components/FormElements/Button';
import Input from '../components/FormElements/Input';
import { loginUser } from '../services'

const Login = ({ setToken }) => {
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        try {
            let res = await loginUser({ email, password });
            setToken(res.access_token);
        }
        catch (e) {
            showDialog(e);
        }
    };

    const classes = {
        pageBody: 'h-screen flex bg-gray-bg1',
        formContainer: 'w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16',
        formHeading: 'text-2xl font-medium text-primary mt-4 mb-12 text-center',
        btnContainer: 'flex justify-center items-center mt-6',
    };

    return (
        <div className={classes.pageBody}>
            <div className={classes.formContainer}>
                <h1 className={classes.formHeading}>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <Input
                        id='email'
                        label='Email:'
                        type='email'
                        placeholder='Your email'
                    />
                    <Input
                        id='password'
                        label='Password:'
                        type='password'
                        placeholder='Your Password'
                    />

                    <div className={classes.btnContainer}>
                        <PrimaryButton type='submit' text='Continue with Email' />
                    </div>
                </form>
            </div>
        </div>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;

