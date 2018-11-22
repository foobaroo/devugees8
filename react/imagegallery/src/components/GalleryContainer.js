import React, { Component } from 'react'
import Gallery from './Gallery';

export default class GalleryContainer extends Component {
  
  state = {
    items: [
        {
          src: 'images/sharks-1.jpg'
        },
        {
          src: 'images/maxresdefault.jpg'
        },
        {
          src: 'images/dolphin-stock-gty-jef-180827_hpMain_16x9_1600.jpg'
        }
      ]      
  }
  
    render() {
    return (
      <div>
        <Gallery items={this.state.items} />
      </div>
    )
  }
}
