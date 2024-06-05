import React from 'react'
import { useState , createContext } from 'react'

const MessageContext = createContext()

const MessageContextProvider = ({children}) => {
  const [message, setMessage] = useState("")
  const [type, setType] = useState("")
  const showMessage = (type, message) => {
    setType(type)
    setMessage(message)
    setTimeout(() => {
      setType("")
      setMessage("")
    }, 3000);
  }
  return (
    <MessageContext.Provider value={{message, type, showMessage}}>
      {children}
    </MessageContext.Provider>
  )
}

export {MessageContextProvider}

export default MessageContext