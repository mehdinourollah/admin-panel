import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from './global/Button';
import Input from './global/Input';
import { loginUser } from '../services'

const Login = ({ setToken }) => {
    const [error, setError] = useState({})

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await loginUser({ email, password });
            setToken(res.access_token);
        }
        catch (e) {

            setError({ message: e })


        }
    };

    useEffect(() => {
        if (error.message) {
            setTimeout(() => {
                setError({})
            }, 1000);
        }
        // return () => {

        // }
    }, [error])


    // useEffect(() => {
    //     console.log({ email, password })
    // }, [email, password])

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
                        value={email}
                        onChange={(email) => setEmail(email)}
                        id='email'
                        label='Email:'
                        type='email'
                        placeholder='Your email'
                    />
                    <Input
                        value={password}
                        onChange={(password) => setPassword(password)}
                        id='password'
                        label='Password:'
                        type='password'
                        placeholder='Your Password'
                    />

                    <div className={classes.btnContainer}>
                        <PrimaryButton type='submit' text='Continue with Email' />
                    </div>

                    {error && <p className="text-red">{error.message}</p>}

                </form>
            </div>
        </div>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;

