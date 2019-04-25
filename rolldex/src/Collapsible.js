import React, { Component } from 'react'


export default class Collapsible extends Component {

  constructor(props){
    super(props)
    this.state = {
      expanded: false,
      apiItem: [],
      isLoaded: false,

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
  handleClick = (e) => {
    console.log(e.target.className)
    let eyeD = e.target.className
    // document.getElementById(e.target.className).style.visibility = "hidden";
  }
  render() {
    console.log(this.state.apiItem.name)
    return (
     <div>
       <ul>
        { this.state.apiItem.map((results, i)=> {
          return <li key={i}>
            {results.name.first}
            <br/>
            <img src={results.picture.medium}></img>
            <button onClick={this.handleClick} className={i}>Contact Info</button>
          </li>
         })}
       </ul>
     </div>
    )
  }
}


