import React, { useContext } from 'react'
import {NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = ev => {
        ev.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Task for Job</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/friends">Friends</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Log Out</a></li>
                </ul>
            </div>
        </nav>
    )
}