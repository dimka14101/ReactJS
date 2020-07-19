import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Home, List, About, Contacts } from './pages'

const LinkRoute = () => {

    return (
        <BrowserRouter>
            <nav>
                <Link to="/"> Home Page </Link>
                <Link to="/list"> List </Link>
                <Link to="/about"> About </Link>
                <Link to="/contacts"> Contacts </Link>
            </nav>
            <Route exact path="/" component={ Home }/> 
            <Route exact path="/list" component={ List }/>
            <Route path="/list/:id" component={ List }/> 
            <Route path="/about" component={ About }/> 
            <Route path="/contacts" component={ Contacts }/> 
        </BrowserRouter>
    );
}

export default LinkRoute;