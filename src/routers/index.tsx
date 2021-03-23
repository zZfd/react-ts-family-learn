/*
 * @Author: your name
 * @Date: 2021-03-16 13:30:38
 * @LastEditTime: 2021-03-16 13:38:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-ts-family-learn\src\routers\index.tsx
 */
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import App from '@/view/App/App'
import Lodash from '@/view/Lodash/Lodash'
import LayoutContainer from '@/layout/index'
export default function RouterContainer ():JSX.Element {
  return (
        <Router>
            <Switch>
                <Route path='/welcome' component={App} />
                <Route path='/lodash' component={Lodash} />
                <Route path='/layout' component={LayoutContainer} />
                <Redirect to='/welcome'/>
            </Switch>
        </Router>
  )
}
