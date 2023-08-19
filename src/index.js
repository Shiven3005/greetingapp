import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name= 'Sir';

let greeting='';
let originalHours = new Date();
originalHours=originalHours.getHours();

if(originalHours>=1 && originalHours<12){
  greeting='Good Morning'
}else if(originalHours>=12 && originalHours<18){
  greeting='Good Afternoon'
}else if(originalHours>=18 && originalHours<20){
  greeting='Good Evening'
}
else{
  greeting='Good Night'
}


let currDate = new Date().toLocaleDateString();
let currTime = new Date().toLocaleTimeString();


ReactDOM.render(
  <>
    <div className="container">
      <div className='greeting_text'>{greeting} {name}</div>
      <div className='wrapper'>
      <div className='time_text'>{currTime}</div>
      <div className='date_text'>{currDate}</div>
    </div>
    </div>
  </>,
  document.getElementById("root")
);
