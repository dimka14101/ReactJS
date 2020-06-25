import React, {Component} from 'react';
import Image from './Components/Image'
import Table from './Components/Table/Table'
import './App.css'
import users from './users.json'

class App extends Component {

  imageURL="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cartoons-PNG/Extra_Large_Transparent_Minion_PNG_Image.png?m=1507172104";
  //imageURL="uncomment me to test 404";

  render(){

    return (
      <div className="App-Position">
        <Image 
          src={ this.imageURL }
        />
        <p className='table-title'><b> Banana analytics </b></p>
        <Table 
          data={ users }
        />
      </div>
    )
  }
}

export default App;
