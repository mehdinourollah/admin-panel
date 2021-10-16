import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css';
import App from './components/App'
import { StateProvider } from './context'
console.log('123')
fetch('https://api.laroza.dev/', { headers: { 'Access-Control-Allow-Origin': '*','mode':'no-cors' } }).then(res => res.text()).then(d => console.log(d))
console.log('456')
ReactDOM.render(
    <React.StrictMode>
        <StateProvider>
            <App />
        </StateProvider>
    </React.StrictMode>, document.getElementById('root'))
