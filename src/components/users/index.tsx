import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState<string[]>([])
  const [errors, setErrors] = useState<string | null>(null)

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => setErrors('Error fetching users'))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {errors && <p>{errors}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
