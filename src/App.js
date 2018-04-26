import React, { Component } from 'react';
import ArcherCard from './components/ArcherCard'
import Wrapper from './components/Wrapper'
import archerChars from './archerChars.json'

class App extends Component {
  state = {
    archerChars,
    score: 0,
    highScore: 0
  }

  addScore = () => {
    const archerChars = this.state.archerChars.filter(archerChar => archerChar.selected > 0)
    this.setState ({ score: this.state.score + 1})
    if (this.state.score > this.state.highScore){
      this.setState ({highScore: this.state.score})
    }
    const shouldReset = this.state.archerChars.filter(archerChar => archerChar.selected > 0)
    if (shouldReset){
      //resetGame() 
    }
  }

  render() {
    return (
      <Wrapper>
        {this.state.archerChars.map(archerChar => (
          <ArcherCard
            id={archerChar.id} 
            selected={archerChar.selected} 
            name={archerChar.name} 
            image={archerChar.imageSource}
            key={archerChar.key}
          />
        ))}
      </Wrapper>
    )
  }}
  
  export default App;
