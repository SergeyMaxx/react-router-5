import React from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import UserProfilePage from './userProfilePage'
import UserListPage from './userListPage'
import EditUserPage from './editUserPage'

const Layout = () => {
  return (
    <div>
      <h1>Users layout</h1>
      <Link to="/">Main page</Link>
      <Switch>
        <Route path="/users" exact component={UserListPage}/>
        <Route path="/users/:userId/profile" component={UserProfilePage}/>
        <Route path="/users/:userId/edit" component={EditUserPage}/>
        <Redirect from="/users/:userId" to="users/:userId/profile"/>
      </Switch>
    </div>
  )
}

export default Layout