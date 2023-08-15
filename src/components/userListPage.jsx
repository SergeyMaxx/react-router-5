import React from 'react'
import {Link} from 'react-router-dom'

const UserListPage = () => {
  const users = [
    {id: 1, name: 'User 1'},
    {id: 2, name: 'User 2'},
    {id: 3, name: 'User 3'}
  ]

  return (
    <div>
      <h1>User list page</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <Link to={`users/${u.id}/profile`}>
              {u.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserListPage