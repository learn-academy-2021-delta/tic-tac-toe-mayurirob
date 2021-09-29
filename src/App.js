import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }
handleGameplay = (index) => {
  alert(index)
}
  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
         <div className="gameboard">

         
        {this.state.squares.map((value, index) =>{ 
          return <Square value={value}
          index = {index}
           />
          })}
        </div>
      </>
    )
  }
}
export default App
//