import React from 'react'

export const Home = () => {
    return(
        <h1> Home Page </h1>
    );
}

export const Contacts = () => {
    return(
        <h1> Contacts </h1>
    );
}

export const About = () => {
    return(
        <h1> About </h1>
    );
}

export const List = ( { match } ) => {
    return(
        <h1> List { match.params.id} </h1>
    );
}

export const NotFound = () => {
    return(
        <h1> 404 Page not found </h1>
    );
}

