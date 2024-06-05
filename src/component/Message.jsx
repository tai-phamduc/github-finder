import React, { useContext } from 'react'
import { BiError } from "react-icons/bi";
import MessageContext from '../context/MessageContext'
import { FaCheckCircle } from "react-icons/fa";

const Message = () => {
  const { message, type } = useContext(MessageContext)
  if (type == "success") {
    return (
      <div>
        <div className='d-flex gap-2 pb-3 align-items-center'>
        <FaCheckCircle size={24} color='green' />
          <div className='text-success fw-bold fst-italic'>{message}</div>
        </div>
      </div>
    )
  } else if (type == "error") {
    return (
      <div>
        <div className='d-flex gap-2 pb-3 align-items-center'>
          <BiError size={24} color='red' />
          <div className='text-danger fw-bold fst-italic'>{message}</div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default Message