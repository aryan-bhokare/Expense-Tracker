import React from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom'
import { ArrowUturnLeftIcon, HomeIcon } from '@heroicons/react/24/solid'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();


  return (
    <div className='error'>
      <h1>Uh oh! We've got a problem.</h1>
      <p>{ error.message || error.statusText }</p>
      <div className="flex-md">
        <button className='btn btn--dark' onClick={ ()=> navigate(-1) }>
          <span>Go Back</span>
          <ArrowUturnLeftIcon width={20} />
        </button>
        <Link to='/'>
        <button className='btn btn--dark'>
          <span>Go Home</span>
          <HomeIcon width={20}/>
        </button>
        </Link>
      </div>

    </div>
  )
}

export default Error