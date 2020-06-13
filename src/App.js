import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  Countdown  from './components/Countdown/Countdown.js';
import  ModalOpen  from './components/ModalOpen/ModalOpen.js';
import M from 'materialize-css'
import dates from './dates.json'


try{
  var datesLocal = JSON.parse(window.localStorage.getItem('dates'))
}
catch(err){
  window.localStorage.setItem('dates', JSON.stringify(dates))
  var datesLocal = JSON.parse(window.localStorage.getItem('dates'))
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems);
});


function App() {
  var countdowns = []
  datesLocal['dates'].forEach(addCountdown);
  function addCountdown(item){
    countdowns.push(<Countdown date={item} />);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <ModalOpen Dates={Dates} />
        <Countdown date='1608155640000' />*/}
        <ModalOpen />
        {countdowns}
      </header>
    </div>
  );
}

export default App;
