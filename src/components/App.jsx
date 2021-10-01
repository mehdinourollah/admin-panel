import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login'
import Modal from './Modal/Modal'

function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    return tokenString;

  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    if (userToken) {
      sessionStorage.setItem('token', userToken);
      setToken(userToken);
    }
  };
  return {
    setToken: saveToken,
    token
  }
}


export default function App() {
  const { token, setToken } = useToken()

  const [isShow, setIsShow] = useState(false);

  const [error, setError] = useState({})
  emitter.on('show', (e) => { setIsShow(true), setError({ message: e }) });

  if (!token) {
    return (
      <>
        <Login setToken={setToken} />
        {isShow && <Modal show={isShow} handleClose={() => setIsShow(false)}>
          <p>{error.message}</p>
        </Modal>}
      </>
    )
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard >
              {isShow && <Modal show={isShow} handleClose={() => setIsShow(false)}>
                <p>{error.message}</p>
              </Modal>}
            </Dashboard>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
