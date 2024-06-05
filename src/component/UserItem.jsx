import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({user}) => {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3'>
      <div className="border p-3">
      <div className="d-flex gap-3">
        <img src={user.avatar_url} alt="avatar" className='avatar'/>
        <div className='d-flex flex-column gap-2'>
          <div className="fw-bold text-primary fs-3">{user.login}</div>
          <Link to={`/user/${user.login}`} className='text-decoration-none'>View more details</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default UserItem