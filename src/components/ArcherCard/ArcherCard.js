import React from 'react'

const ArcherCard = props => {
  console.log(props)
  return (
    <div className = 'card'>      
      <span onClick={() => props.addScore()}>
        <div className = 'img-container'>
          <img alt={props.name} src={props.image}/>
        </div>
      </span>
    </div>
)}

export default ArcherCard