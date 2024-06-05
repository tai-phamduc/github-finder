import React from 'react'
import { CiLink } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
import { PiGitForkBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const RepoItem = ({repo}) => {
  return (
    <div className="card p-4 border-0 bg-light">
      <a href={repo.html_url} className='d-flex align-items-center gap-2 fs-4 text-decoration-none text-black fw-bold mb-3'>
        <CiLink className='fs-1 fw-bold'/>
        {repo.name}
      </a>
      <div className="d-flex gap-3">
        <div className="d-flex align-items-center gap-2 badge text-bg-info fs-6 text-white px-3"> <FaEye /> {repo.watchers_count}</div>
        <div className="d-flex align-items-center gap-2 badge text-bg-success fs-6 text-white px-3"> <FaStar /> {repo.stargazers_count}</div>
        <div className="d-flex align-items-center gap-2 badge text-bg-danger fs-6 text-white px-3"> <FaInfoCircle /> {repo.open_issues_count}</div>
        <div className="d-flex align-items-center gap-2 badge text-bg-warning fs-6 text-white px-3"> <PiGitForkBold /> {repo.forks_count}</div>
      </div>
    </div>
  )
}

export default RepoItem