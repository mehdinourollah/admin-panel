import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";

import { store } from '../../context';

const Logout = () => {
    const {globalState,dispatch} = useContext(store);
    const navigate = useNavigate();
    const logout = () => {
        dispatch({type: 'logout'});
        // sessionStorage.removeItem('token');
        // navigate('/login');
        
    }
    return (<button onClick={logout} className="border">logout</button>)


}

export default function Dashboard() {
    return (
        <>
            <div>Dashboard Page</div>
            <Logout />
        </>
    )
}

