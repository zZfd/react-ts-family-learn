/*
 * @Author: your name
 * @Date: 2021-03-16 09:49:01
 * @LastEditTime: 2021-03-16 13:59:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-ts-family-learn\src\index.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import '@/styles/index.css'
import RouterContainer from '@/routers'
import reportWebVitals from './reportWebVitals'
import '@/icons/index.ts'
ReactDOM.render(
  <React.StrictMode>
    <RouterContainer />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
