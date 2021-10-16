import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'

import Login from './Login'

const loginRoot = document.createElement('div')
loginRoot.setAttribute('id', 'login-root')
document.body.appendChild(loginRoot)


test('login with a test user and password', () => {
    // Arrange
    // const handleClose = jest.fn()
    const setToken=()=>{}
    // Act
    const { getByText } = render(
        <Login setToken={setToken}/>

    ,
    )
    // Assert
    // expect(getByText('email')).toBeTruthy()

    // Act
    fireEvent.click(getByText(/Continue With Email/i))

    // Assert
    expect(setToken).toHaveBeenCalledTimes(1)
})