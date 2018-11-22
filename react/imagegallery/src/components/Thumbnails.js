import React, { Component } from 'react'
import axios from 'axios'
import Thumbnail from './Thumbnail';

export default class Thumbnails extends Component {
  
  state = {
      images: null
  }

  componentDidMount = async() => {
       const result = await axios.get('http://localhost:8000/images');
       this.setState({
           images: result.data
       });
  }
  
  render() {
    return (
      <div className="thumbnails">
        { this.state.images && 
           this.state.images.map((img) => (
                <Thumbnail id={img.id} url={'../images/' + img.url} />
           ))
        }
      </div>
    )
  }
}
