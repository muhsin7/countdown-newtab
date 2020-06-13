import React from 'react';
import './Countdown.css'


// export default function Countdown(props) {
class Countdown extends React.Component {
    constructor(props){
      super(props);
      const endtime = new Date(parseInt(props.date));
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      this.state = {
        total: total,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days
      }
      console.log({total, seconds, minutes, hours, minutes})
      this.updateClock = this.updateClock.bind(this);
    }

    updateClock(){
      const endtime = new Date(parseInt(this.props.date));
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));


      this.setState({
        total: total,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days
      });
    }


    componentDidMount() {

        const timeinterval = setInterval(this.updateClock, 1000);
        if (this.state.total <= 0) {
           clearInterval(this.timeinterval);
         }
        console.log(this.state)
      }
    // const t = updateClock();
    // console.log(t)
    // const deadline = new Date(props.date);

  render() {
    return(
    <React.Fragment>
    <br />
      <div id="clockdiv">
        <div>
          <span class="days">{this.state.days}</span>
          <div class="smalltext">Days</div>
        </div>
        <div>
          <span class="hours">{this.state.hours}</span>
          <div class="smalltext">Hours</div>
        </div>
        <div>
          <span class="minutes">{this.state.minutes}</span>
          <div class="smalltext">Minutes</div>
        </div>
        <div>
          <span class="seconds">{this.state.seconds}</span>
          <div class="smalltext">Seconds</div>
        </div>
      </div>
      <br />

    </React.Fragment>
  );
  }
}

export default Countdown;
