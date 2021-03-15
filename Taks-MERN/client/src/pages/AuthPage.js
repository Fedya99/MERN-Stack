import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    },[error, message, clearError])

    const changeHandler = (ev) => {
        setForm({...form, [ev.target.name]: ev.target.value})
    }

    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        }catch (e){}
    }

    const loginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {email: form.email, password: form.password})
            auth.login(data.token, data.userId)
        }catch (e){}
    }
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Task for Job</h1>
                <div className="card blue-grey darken-5">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>

                        <div className="input-field">
                            <input 
                                placeholder="Enter your name" 
                                id="name" 
                                type="text"
                                name="name"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-field">
                            <input 
                                placeholder="Enter your email" 
                                id="email" 
                                type="text"
                                name="email"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input 
                                placeholder="Enter your password" 
                                id="password" 
                                type="password"
                                name="password"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                            <label htmlFor="password">Password</label>
                        </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button 
                            className="btn yellow darken-4" 
                            style={{marginRight: 10}}
                            disabled={loading}
                            onClick={loginHandler}
                        >
                            Sign In
                        </button>
                        <button 
                            className="btn grey lighten-1 black-text" 
                            onClick={registerHandler} 
                            disabled={loading}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}