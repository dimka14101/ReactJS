import React, { Component } from 'react'
import '../Styles/Image.css'
import PreLoaderImg from '../Images/inProgress.gif'
import ErrorImg from '../Images/404.JPG'

class Image extends Component {

    constructor (props) {
        super(props);
        this.state= {
            src: PreLoaderImg,
            origin: props.src,
        }
    }

    componentDidMount = () => {
        const img = document.createElement('img');
        
        img.onload = () => {
            console.log('[Image loader]-> Loaded');
            this.setState({
                src: this.state.origin 
            });
        }

        img.onerror = () => {
            console.log('[Image loader]-> Error');
            this.setState({
                src: ErrorImg 
            });
        }
        img.src = this.state.origin;
      }
    
    render = () => {
        const { src } = this.state;

        return(         
            <img 
                src={ src }
                alt=""
                className={ "image" }
            />  
        )
    }
}

export default Image;