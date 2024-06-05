import { createContext, useReducer } from 'react'
import { Octokit } from 'octokit'

const UserListContext = createContext()

const UserListContextProvider = ({children}) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_USERS":
        return {
          ...state,
          userList: action.payload,
          loading: false
        }
      case "SET_LOADING":
        return {
          ...state,
          loading: true
        }
      case "CLEAR_USER_LIST":
        return {
          ...state,
          userList: []
        }
      case "GET_USER_DETAIL":
        return {
          ...state,
          user: action.payload,
          loading: false
        }
      case "GET_USER_REPOS":
        return {
          ...state,
          repos: action.payload,
          loading: false
        }
      default:
        return state
    }
  }
  const initialState = { 
    userList: [], 
    loading: false,
    user: null,
    repos: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const octokit = new Octokit({auth: import.meta.env.VITE_GITHUB_TOKEN})
  // just for testing purposes
  const searchUser = async (text) => {
    dispatch({type: "SET_LOADING"})
    const params = new URLSearchParams({q: text})
    const response = await octokit.request(`GET /search/users?${params}`)
    dispatch({type: "GET_USERS", payload: response.data.items})
  }
  const searchUserDetail = async (login) => {
    dispatch({type: "SET_LOADING"})
    const response = await octokit.request(`GET /users/${login}`)
    dispatch({type: "GET_USER_DETAIL", payload: response.data})
  }
  const searchUserRepos = async (login) => {
    dispatch({type: "SET_LOADING"})
    const response = await octokit.request(`GET /users/${login}/repos`)
    dispatch({type: "GET_USER_REPOS", payload: response.data})
  }
  const clearUserList = () => {
    dispatch({type: "CLEAR_USER_LIST"})
  }
  return (
    <UserListContext.Provider value={{userList: state.userList, loading: state.loading, user:state.user, repos: state.repos, searchUser, clearUserList, searchUserDetail, searchUserRepos}}>
      {children}
    </UserListContext.Provider>
  )
}

export { UserListContextProvider }

export default UserListContext