import React, {Component} from 'react'
import '../Styles/ImageLoader.css'
import DefaultImage from '../Images/sample.jpg'

class ImageLoader extends Component {
    
    state = {
        path: DefaultImage
    }

    handleFileSelect = (event) => {
        let files = event.target.files;

        if (files && files[0]) {
            var reader = new FileReader();
    
            reader.onload = (readerEvent) => {
                const { onSuccess } = this.props;
                onSuccess(readerEvent);

                let img = readerEvent.target.result;
                this.setState({
                    path: img
                });
               
            };
    
            reader.readAsDataURL(files[0]);
        }
    }

    render = () => {
        const { handleFileSelect, state } = this;
        const { path } = state;

        return (
            <div className="upload-file-container">
                <img 
                    src={ path }
                    alt=""
                /> 					
                <div className="upload-file-inner-container">
                    <span> 
                        Maybe it's time to choose an image? 
                    </span>
                    <input 
                        type='file' 
                        onChange={ handleFileSelect }
                        accept="image/*"
                    /> 
                </div>
            </div>				 
        )
    }
}

export default ImageLoader;