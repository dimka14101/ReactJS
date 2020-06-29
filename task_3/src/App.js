import React, {Component} from 'react';
import ImageLoader from './Components/ImageLoader'
import './App.css';

class App extends Component {

  onLoadSuccess = (path)  => {
    let imgSize = path.total/1024;

    //image source for validation and post to server
    //let img = path.target.result;

    console.log('[ImageLoader] -> Action finished. Image size: ', imgSize, 'kb' );
  }

  render = () => {
    const { onLoadSuccess } = this;

    return (
      <div className="App">
        <ImageLoader 
          onSuccess={ onLoadSuccess }
        />
      </div>
    );
  }

}

export default App;
