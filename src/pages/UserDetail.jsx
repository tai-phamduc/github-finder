import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react'
import UserListContext from '../context/UserListContext'
import Loading from '../component/Loading'
import { IoArrowBack } from "react-icons/io5"
import { FaUsers } from "react-icons/fa"
import { FaUserGroup } from "react-icons/fa6"
import { MdStorage } from "react-icons/md"
import { FaStore } from "react-icons/fa"
import RepoItem from '../component/RepoItem'

const UserDetail = () => {
  const params = useParams()
  const { user, repos, searchUserDetail, loading, searchUserRepos } = useContext(UserListContext)
  
  useEffect(() => {
    searchUserDetail(params.login)
    searchUserRepos(params.login)
  }, [])

  if (loading) {
    return <Loading></Loading>
  } else if (user) {
    return (
      <>
        <section className='general-info py-3'>
          <div className='container'>
            <div className='mb-4'>
              <Link to="/" className='text-uppercase text-black text-decoration-none fw-semibold d-flex align-items-center gap-2'>
                <IoArrowBack />
                Back to search
              </Link>
            </div>
            <div className="row py-2">
              <div className="col-md-3">
                <img src={user.avatar_url} className='img-fluid rounded-4' alt="" />
              </div>
              <div className="col-md-9">
                <div className="d-flex gap-3 align-items-end mb-3">
                  <h2 className="fw-bold mb-0">{user.name}</h2>
                  <div className="badge text-bg-success mb-1">{user.type}</div>
                  <div className="badge text-bg-info mb-1">{user.hireable ? "Hireable" : "Not hireable"}</div>
                </div>
                <div className='mb-3'>
                  <p className="mb-0">{user.bio}</p>
                </div>
                <div className='mb-3'>
                  <a href={user.html_url} className="btn btn-primary">Visit github profile</a>
                </div>
                <div className="row">
                  <div className="col-md-3 p-0">
                    <div className="d-flex flex-column px-3 py-2 border border-light-subtle">
                      <p className="mb-0 fs-6 text-muted">Location</p>
                      <p className="mb-0 fs-4 fw-bold">{user.location? user.location : "N/A"}</p>
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="d-flex flex-column px-3 py-2 border border-light-subtle">
                      <p className="mb-0 fs-6 text-muted">Website</p>
                      <p className="mb-0 fs-4 fw-bold">{user.blog? user.blog : "N/A"}</p>
                    </div>
                  </div>
                  <div className="col-md-3 p-0">
                    <div className="d-flex flex-column px-3 py-2 border border-light-subtle">
                      <p className="mb-0 fs-6 text-muted">Twitter</p>
                      <p className="mb-0 fs-4 fw-bold">{user.twitter_username? user.twitter_username : "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-md-3 p-0">
                <div className="d-flex justify-content-between px-5 py-3 border-end border-light-subtle">
                  <div className="d-flex flex-column">
                    <p className="mb-0 fs-6 text-muted">Followers</p>
                    <p className="mb-0 display-4 fw-bold">{user.followers}</p>
                  </div>
                  <div className='d-flex align-items-center'>
                    <FaUsers className='text-secondary display-1'/>
                  </div>
                </div>
              </div>
              <div className="col-md-3 p-0">
                <div className="d-flex justify-content-between px-5 py-3 border-end border-light-subtle">
                  <div className="d-flex flex-column">
                    <p className="mb-0 fs-6 text-muted">Following</p>
                    <p className="mb-0 display-4 fw-bold">{user.following}</p>
                  </div>
                  <div className='d-flex align-items-center'>
                    <FaUserGroup className='text-secondary display-1'/>
                  </div>
                </div>
              </div>
              <div className="col-md-3 p-0">
                <div className="d-flex justify-content-between px-5 py-3 border-end border-light-subtle">
                  <div className="d-flex flex-column">
                    <p className="mb-0 fs-6 text-muted">Public Repos</p>
                    <p className="mb-0 display-4 fw-bold">{user.public_repos}</p>
                  </div>
                  <div className='d-flex align-items-center'>
                    <MdStorage className='text-secondary display-1'/>
                  </div>
                </div>
              </div>
              <div className="col-md-3 p-0">
                <div className="d-flex justify-content-between px-5 py-3">
                  <div className="d-flex flex-column">
                    <p className="mb-0 fs-6 text-muted">Public Gists</p>
                    <p className="mb-0 display-4 fw-bold">{user.public_gists}</p>
                  </div>
                  <div className='d-flex align-items-center'>
                    <FaStore className='text-secondary display-1'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='repos py-3'>
          <div className="container">
            <h2 className="title">Lastest Repositories</h2>
            <div className="vstack gap-3">
              {repos.map(repo => <RepoItem key={repo.id} repo={repo}/>)}
            </div>
          </div>
        </section>
      </>
    )
  } else {
    // Handle case when user is null
    return <div>User not found</div>
  }
}

export default UserDetail
