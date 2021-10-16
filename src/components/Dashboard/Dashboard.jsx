import React, { useContext } from 'react'
import { store } from '../../context';
import { Breadcrumb } from 'antd';

import { Recipes } from './Recipes';
import { PrimaryButton, DangerButton } from '../global/Button';

const Logout = () => {
    const { dispatch } = useContext(store);
    const logout = () => {
        dispatch({ type: 'logout' });
    }
    return (<DangerButton onClick={()=>logout()} className="border" text="logout"></DangerButton>)
}


export default function Dashboard() {
    return (
        <>
            <Recipes />
            <div style={{ position: 'absolute', top: 0, right: 0, padding: 10 }}>

                <Logout />
            </div>
        </>
    )
}

