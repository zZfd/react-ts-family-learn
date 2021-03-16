/*
 * @Author: your name
 * @Date: 2021-03-16 09:49:01
 * @LastEditTime: 2021-03-16 13:43:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-ts-family-learn\src\App.tsx
 */
import React from 'react'
import logo from '@/assets/logo.svg'
import './style/App.css'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="/lodash"
          rel="noopener noreferrer"
        >
          Learn Lodash
        </a>
      </header>
    </div>
  )
}

export default App
