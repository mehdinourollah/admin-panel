import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login'
import { store } from '../context';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined, DashboardOutlined } from '@ant-design/icons';

const Breadcrumbs = () => {

  return (
    <Breadcrumb >
      <Breadcrumb.Item ><a href="/">
        <HomeOutlined />
        Home</a></Breadcrumb.Item>
      {location.pathname.includes('dashboard') && < Breadcrumb.Item >
        <a href="/dashboard">
          <DashboardOutlined />Dashboard</a>
      </Breadcrumb.Item>
      }
    </Breadcrumb >)
}


export default function App() {
  const { state, dispatch } = useContext(store);

  const getToken = () => {
    dispatch({ type: 'getToken' })
  };

  useEffect(() => {
    getToken()
  }, [])


  if (!state.token) {
    return (<Login />)
  }
  return (
    <div className="wrapper">
      <Breadcrumbs />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
