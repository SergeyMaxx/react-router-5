import React from 'react'
import {Link, useParams} from 'react-router-dom'

const UserProfilePage = () => {
  const {userId} = useParams()

  return (
    <div>
      <h1>User page</h1>
      <div>User {userId}</div>
      <ul>
        <li>
          <Link to="/users">users list page</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/edit`}>
            edit user
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default UserProfilePage