import React, { Component } from 'react'
import Collapsible from '../src/Collapsible'
import css from '../src'
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
  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results)
      this.setState({
        apiItem: data.results,
        isLoaded: true
      })
    })
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
        <body>
          <ul>
            {this.state.apiItem.map((results, i) => {
              return <li className="panel-main">
                <p style={style1}>
                {results.name.first}
                </p>
                <img src={results.picture.medium}></img>
                <div className="panel-group">
                <Collapsible title='contactInfo'>
                <p>
                  "Collapsable Content"
                </p>
                </Collapsible>
                </div>
              </li>
            })}
          </ul>

        </body>
   
      </div>
      
    )
        }
}

