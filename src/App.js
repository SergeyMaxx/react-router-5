import React from 'react'
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom'
import Layout from './components/layout'

const MainPage = () => <h1>Main Page</h1>

function App() {
  return (
    <BrowserRouter>
      <h1>React Router 5</h1>
      <Switch>
        <Route path="/users" component={Layout}/>
        <Route path="/" exact component={MainPage}/>
        <Redirect to="/"/>
      </Switch>
      <Link to="/users">Users list Page</Link>
    </BrowserRouter>
  )
}

export default App