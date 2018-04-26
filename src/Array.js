import React, { Component } from 'react';
import Archer0 from './images/archer9.jpg';
import Archer1 from './images/archer1.jpg';
import Archer2 from './images/archer2.jpg';
import Archer3 from './images/archer3.jpg';
import Archer4 from './images/archer4.jpg';
import Archer5 from './images/archer5.jpg';
import Archer6 from './images/archer6.jpg';
import Archer7 from './images/archer7.jpg';
import Archer8 from './images/archer8.jpg';


let shuffledArray = [];
for (i = 9; i > 0; i--){
    const randomPick = Math.floor(Math.random()*i)
    shuffledArray.push(randomPick)
}

const Array = shuffledArray;

export default Array