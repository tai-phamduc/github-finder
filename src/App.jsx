import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import UserDetail from './pages/UserDetail'
import { UserListContextProvider } from './context/UserListContext'
import { MessageContextProvider } from './context/MessageContext'

const App = () => {
  return (
    <UserListContextProvider>
      <MessageContextProvider>
        <Router>
          <div className='d-flex flex-column min-vh-100'>
            <Navbar/>
            <Routes>
              <Route path= "/" element = {<Home/>}></Route>
              <Route path = "/about" element = {<About/>}></Route>
              <Route path = "/user/:login" element = {<UserDetail/>}/>
              <Route path="/notfound" element = {<NotFound/>}></Route>
              <Route path="/*" element = {<NotFound/>}></Route>
            </Routes>
            <Footer/>
          </div>
        </Router>
      </MessageContextProvider>
    </UserListContextProvider>
  )
}

export default App