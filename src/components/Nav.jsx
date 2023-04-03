import React from 'react'
import logomark from "../assets/logomark.svg"
import { NavLink , Form } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/24/solid'
 
const Nav = ({ userName } ) => {
  return (
    <nav>
        <NavLink
        to="/" aria-label="Go to Home"
        >
        <img src={logomark} alt="" height={30} />
        <span>HomeBudget</span>
        </NavLink>
        {
            userName && (
                <Form
                method="post"
                action="/logout"
                onSubmit={(event)=>{
                    if (!confirm('Delete user and all data?')){
                        event.preventDefault();
                    }
                }}
                >
                <button type='submit' className='btn btn--warning'>    
                    <span>Delete User</span>
                    <TrashIcon width={30} />
                </button>
                </Form>
            )
        }
    </nav>
  )
}

export default Nav