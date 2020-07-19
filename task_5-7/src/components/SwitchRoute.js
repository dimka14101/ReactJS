import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Home, List, About, Contacts, NotFound } from './pages'

const LinkRoute = () => {

    return (
        <BrowserRouter>
            <nav>
                <Link to="/"> Home Page </Link>
                <Link to="/list"> List </Link>
                <Link to="/about"> About </Link>
                <Link to="/contacts"> Contacts </Link>
            </nav>
            <Switch>
                <Route exact path="/" component={ Home }/> 
                <Route exact path="/list" component={ List }/>
                <Route path="/list/:id" component={ List }/> 
                <Route path="/about" component={ About }/> 
                <Route path="/contacts" component={ Contacts }/> 
                <Route component={ NotFound }/> 
            </Switch>
        </BrowserRouter>
    );
}

export default LinkRoute;