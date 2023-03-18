import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App';
// import AppEventProps from './AppEventProps'
import { AppHooks } from './AppHooks'
// import { AppContext } from './AppContext'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppEventProps /> */}
    <AppHooks />
    {/* <AppContext /> */}
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
