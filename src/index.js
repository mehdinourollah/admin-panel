import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import mitt from 'mitt'
import fetchWrapper from './util/fetchWrapper'

/**
 * global declarations
 */
window.emitter = mitt()
window.showDialog = (message) => {
    emitter.emit('show', message)
}
Object.assign(window, { ...fetchWrapper })

console.log({ base_url: process.env.base_url, NODE_ENV: process.env.NODE_ENV })

ReactDOM.render(<App />, document.getElementById('root'))
