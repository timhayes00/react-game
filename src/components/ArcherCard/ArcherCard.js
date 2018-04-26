import React from 'react'

const ArcherCard = props => (
    <div className = 'card'>      
      <span onClick={() => props.addScore()}>
        <div className = 'img-container'>
          <img src={props.imageSource} alt={props.name}/>
        </div>
      </span>
    </div>
)

export default ArcherCard