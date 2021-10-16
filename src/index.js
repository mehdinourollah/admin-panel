import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css';
import App from './components/App'
import { StateProvider } from './context'

fetch('https://api.laroza.dev/').then(res => res.text()).then(d => console.log(d))

ReactDOM.render(
    <React.StrictMode>
        <StateProvider>
            <App />
        </StateProvider>
    </React.StrictMode>, document.getElementById('root'))
