import React, { Component } from 'react'


export default class Collapsible extends Component {

  constructor(props){
    super(props)
    this.state = {
      expanded: false,
    }
  }
  handleClick = (e) => {
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render() {
    console.log(this.state.expanded)
    const styleButton = {
      display: 'inline-block'
    }
    return (
      <div>
        <div>
             <h4 style={styleButton}>Contact Info</h4>   
             <button className={`panel ${this.state.expanded ? 'is-expanded' : ''} `}   onClick={this.handleClick}>X</button>
        </div>

        <div className="panel-collapse" >
        <div className="panel-body" ref="inner">
        {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
