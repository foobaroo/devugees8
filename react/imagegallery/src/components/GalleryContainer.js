import React, { Component } from 'react'
import Gallery from './Gallery';
import Thumbnails from './Thumbnails';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class GalleryContainer extends Component {
  
    state = {
        items: null   
    }
  
    componentDidMount = async() => {
        const id = this.props.match.params.id;
        const result = await axios.get('http://localhost:8000/images');
        
        let items = result.data;
        items.forEach(element => {
            element.src = '../images/' + element.url
        });

        this.setState({
            items: items
        });
    }  

    render() {
        return (
            <div>
                <Thumbnails />
                <div className="gallerybox">
                    { this.state.items && 
                    <div className="gallery">
                        <div className="closebtn"><Link to="/"><img src="../icons/close.png" /></Link></div>
                        <Gallery activeIndex={this.props.match.params.id} items={this.state.items} /> 
                    </div>
                    }
                </div>
            </div>
        )
  }
}
