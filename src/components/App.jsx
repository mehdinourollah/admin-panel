import React, { useState, useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login'


import { store } from '../context';






export default function App() {
  const { myToken, setToken } = useToken()

  const { state, dispatch } = useContext(store);

  function useToken() {
    const getToken = () => {
      const tokenString = sessionStorage.getItem('token');
      return tokenString;

    };

    const [myToken, setToken] = useState(getToken());


    const saveToken = userToken => {
      if (userToken) {
        sessionStorage.setItem('token', userToken);
        setToken(userToken);



      }
    };
    return {
      setToken: saveToken,
      myToken
    }
  }

  useEffect(() => {
    dispatch({ type: 'login', token: myToken })


  }, [myToken])

  useEffect(() => {
    setInterval(() => {

      console.log({ state })
    }, 2000);
  })

  if (!myToken) {
    return (<Login setToken={setToken} />)
  }

  return (


    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>

          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
