import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {UsersPage} from './pages/UsersPage'
import {FriendsPage} from './pages/FriendsPage'
import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return (
            <Switch>
                <Route path="/users" exact>
                    <UsersPage />
                </Route>
                <Route path="/friends" exact>
                    <FriendsPage />
                </Route>
                <Redirect to="/users" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}