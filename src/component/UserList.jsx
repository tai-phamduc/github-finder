import React from 'react'
import { useContext } from 'react'
import UserItem from './UserItem'
import Loading from './Loading'
import UserListContext from '../context/UserListContext'
const UserList = () => {
  const {userList, loading} = useContext(UserListContext)
  if (loading === true) {
    return <Loading/>
  }
  return (
    <div className='row g-4 mt-2'>
      {userList.map(user => <UserItem key={user.login} user={user}/>)}
    </div>
  )
}

export default UserList