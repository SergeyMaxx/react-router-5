import React from 'react'
import {Link, useParams} from 'react-router-dom'

const EditUserPage = () => {
  let {userId} = useParams()

  return (
    <div>
      <h1>Edit user page</h1>
      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>
            user profile page
          </Link>
        </li>
        <li>
          <Link to={`/users/${++userId}/profile`}>
            next user
          </Link>
        </li>
        <li>
          <Link to={'/users'}>
            users list page
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default EditUserPage