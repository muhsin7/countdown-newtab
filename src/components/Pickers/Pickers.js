import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { Container } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// import dates from '../../dates.json'
// var datesJson = require('../')
// console.log(json)

// dates['dates'].pop()
// console.log(dates)

export default function Pickers() {
  // const json = JSON.parse('../dates.json')

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // console.log(selectedDate);
    // console.log(new Date(selectedDate));
    // Dates.NewField = new Date(selectedDate);
    // console.log(props.Dates)
  };

  function handleSubmit(){
    var dates = JSON.parse(window.localStorage.getItem('dates'))
    dates['dates'].push(new Date(selectedDate).getTime());
    window.localStorage.setItem('dates', JSON.stringify(dates))
    console.log(dates)
  }

  return (
    <form onSubmit={handleSubmit}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} className="pickers">
        <Grid container justify="space-around">

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <br />
          <KeyboardTimePicker
            margin="normal"
            variant="inline"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <input type="submit" className="btn" />

    </form>
  );
}
