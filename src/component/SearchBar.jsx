  import React from 'react'
  import { useState, useContext, useRef } from 'react'
  import UserListContext from '../context/UserListContext'
  import MessageContext from '../context/MessageContext'

  const SearchBar = () => {
    const [text, setText] = useState("")
    const { userList, searchUser, clearUserList } = useContext(UserListContext)
    const { showMessage } = useContext(MessageContext)
    const inputRef = useRef(null)
    const handleSubmit = e => {
      e.preventDefault()
      if (text == "") {
        showMessage("error", "Please enter something")
        inputRef.current.focus()
      } else {
        searchUser(text)
      }
      setText("")
    }
    const handleClear = () => {
      clearUserList()
    }
    return (
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={handleSubmit} id='search-form' className='d-flex'>
            <input type="text" value={text} onChange={e=>{setText(e.target.value)}} className='form-control rounded-0 py-2 px-3' placeholder='Search' ref={inputRef}/>
            <button type="submit" className='btn btn-primary rounded-0'>GO</button>
          </form>
        </div>
        { userList.length > 0 ? (
          <div className="col-md-4">
            <button type='button' onClick={handleClear} className="btn btn-danger py-2">CLEAR</button>
          </div>
        ): ""}
      </div>
    )
  }

  export default SearchBar