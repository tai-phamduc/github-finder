import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="py-5">
      <div className="container h-100 w-100 d-flex justify-content-center align-items-center">
        <div className='d-flex flex-column align-items-center gap-3'>
          <h2 className="display-2 fw-bold">Oops!</h2>
          <h3 className="display-5">404 - Page not found!</h3>
          <Link to="/" className="btn btn-primary mt-2">Back to home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound