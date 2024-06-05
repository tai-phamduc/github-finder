import React from 'react'
import winterLoading from './assets/winter-loading.gif'

const Loading = () => {
  return (
    <div className='py-10 d-flex justify-content-center align-items-center'>
      <img src={winterLoading} alt="winter-loading" />
    </div>
  )
}

export default Loading