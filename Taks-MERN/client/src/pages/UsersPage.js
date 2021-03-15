import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import {BiUser} from 'react-icons/bi'
import SearchApp from '../components/SearchApp'

export const UsersPage = () => {
    const [users, setUsers] = useState([])
    const [term, setTerm] = useState("")
    const {request} = useHttp()
    const {token, userId} = useContext(AuthContext)

    const onChangeSearch = (term) => setTerm(term)

    const search = (items, term) => {
        if (term.length === 0) {
          return items;
        }
        return items.filter((item) => {
            return item.name.toUpperCase().indexOf(term.toUpperCase()) > -1
        })
    }

    const getUsers = useCallback(async () => {
        try {
            const data = await request('/api/auth/users', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsers(data)
        } catch (e) {
            
        }
    },[token, request])
    useEffect(() => {
        getUsers()
    },[getUsers])

    const ChangeFilter = (newarr) => {
        // setLoading(true)
        setUsers(newarr)
        // setLoading(false)
    }

    const visibleItem = search(users, term)
    return (
        <div className="container">
            <div className="row">
                <SearchApp ChangeSearch={onChangeSearch} users={users} Filter={ChangeFilter}/>
            </div>
            <div className="row">
                <ul>
                    {visibleItem.map(item => (
                        item._id == userId ? null : 
                        <li key={item._id} className="user-info">
                            <span><BiUser /> {item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}