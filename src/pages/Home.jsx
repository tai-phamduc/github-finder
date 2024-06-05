import React from 'react'
import UserList from '../component/UserList'
import SearchBar from '../component/SearchBar'
import Message from '../component/Message'

const Home = () => {
  return (
    <main className='py-3'>
      <div className="container">
        <Message/>
        <SearchBar/>
        <UserList/>
      </div>
    </main>
  )
}

export default Home