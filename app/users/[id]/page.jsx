async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
  
}

async function UsersPage({params}) {
  const user = await getUser(params.id)
  return (
    <div>
      <h1>User detail</h1>
      <div>
        <img src={user.avatar} />
        <div>
          <h3>{user.id} {user.fist_name} {user.last_name}</h3>
          <p>{ user.email }</p>
        </div>
      </div>
    </div>
  )
}

export default UsersPage