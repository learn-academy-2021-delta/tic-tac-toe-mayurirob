import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      crossLocation: null,
      zeroLocation: null

    }
  }
  componentDidMount(){
    let cross = Math.floor(Math.random() * this.state.squares.length)
    this.setState({crossLocation: cross})
    
  }

handleGameplay = (index) => {

  const {squares} = this.state
  
    squares[index]= "❌"
    this.setState({squares: squares})
  
}
  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
         <div className="gameboard">

         
        {this.state.squares.map((value, index) =>{ 
          return (<Square value={value}
          index = {index}
          key = {index}
          handleGameplay={this.handleGameplay}

           />
          )
          })}
        </div>
      </>
    )
  }
}
export default App
