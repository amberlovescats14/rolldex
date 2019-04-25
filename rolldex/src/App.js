import React, { Component } from 'react'
import Collapsible from '../src/Collapsible'
// import CSCC from '..'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiItem: [],
      isLoaded: false,
      buttonText: 'Show Details'

    }
  }


  render() {
    const style1 = {
      textTransform: 'uppercase',
      textDecoration: 'underline',
      fontWeight: '800',

    };
   
    
    return (
      <div>
        <header className="welcome">
          <h1>Incase We Loose Out iPHONE! </h1>
           <h4>Rolldex</h4>
        </header>
        <Collapsible></Collapsible>
   
      </div>
      
    )
        }
}


// "loaders": [
//   {
//     "test": "/\.scss$/",
//     "include": "paths.appSrc",
//     "loaders": ["style", "css", "sass"]
//   }]

