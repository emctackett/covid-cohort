import React, { ReactNode, SyntheticEvent } from "react";
import ApiCalendar from "react-google-calendar-api";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { Button, Paragraph } from "grommet";
import "react-datepicker/dist/react-datepicker.css";

/*TO DO: Fix submit button and sign-in button change.
TO DO: Implement recurrences, recurrence variables added still need form
TO DO: Attendees
TO DO: Implement google hangouts  */

export default class DoubleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = { isLoggedIn: false };
    this.state = { frequency: "DAILY" };
    this.state = { count: 1 };
    this.state = { interval: 1 };
    this.state = { timeZone: "America/Los_Angeles" };
  }

  state = {
    startDate: new Date(),
    start: new Date(),
    end: new Date(),
    description: "",
    startTime: new Date(),
    endTime: new Date(),
    frequency: "",
    count: "",
    interval: "",
    timeZone: ""
  };

  handleItemClick(event: SyntheticEvent<any>, name: string): void {
    if (name === "sign-in") {
      ApiCalendar.handleAuthClick();
      this.setState({ isLoggedIn: true });
    } else if (name === "sign-out") {
      ApiCalendar.handleSignoutClick();
      this.setState({ isLoggedIn: false });
    }
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleChange1 = (st) => {
    this.setState({
      start: st,
    });
  };

  handleChange2 = (en) => {
    this.setState({
      end: en,
    });
  };

  handleInputChange = (inp) => {
    this.setState({[inp.target.name]: inp.target.value})
  };
  
  
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      startDate: "",
      start: "",
      end: "",
      description: "",
      startTime: "",
      endTime: "",
      frequency: "",
      interval: "",
      timeZone: "",
      count: ""
    });

    this.state.startTime = new Date(
      this.state.startDate.getFullYear(),
      this.state.startDate.getMonth(),
      this.state.startDate.getDate(),
      this.state.start.getHours(),
      this.state.start.getMinutes(),
      this.state.start.getSeconds()
    );

    this.state.endTime = new Date(
      this.state.startDate.getFullYear(),
      this.state.startDate.getMonth(),
      this.state.startDate.getDate(),
      this.state.end.getHours(),
      this.state.end.getMinutes(),
      this.state.end.getSeconds()
    );


    const event: object = {
      summary: "Catch up with friends and family",
      description: "Ask your friends and family how they are doing or tell them how you are doing. Call or text " + this.state.description,
      start: {
        dateTime: this.state.startTime,
        timeZone: this.state.timeZone
      },
      end: {
        dateTime: this.state.endTime,
        timeZone: this.state.timeZone
      },
      recurrence: [
          "RRULE:FREQ=" + this.state.frequency +
          ";INTERVAL=" + this.state.interval +
          ";COUNT=" + this.state.count ],
    };
    
    ApiCalendar.createEvent(event, this.calendar)
      .then((result: object) => {
        console.log(result);
      })
      .catch((error: any) => {
        console.log(error);
      });
    
    console.log(event);
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let submitButton, loginButton;
    if (!isLoggedIn) {
      submitButton = (
        <Button
          disabled
          primary
          color="#8F1701"
          margin="small"
          label="Submit"
          onClick={(e) => this.onSubmit(e)}
        />
      );
      loginButton = (
        <Button
          primary
          margin="small"
          color="#8F1701"
          label="Sign In"
          onClick={(e) => this.handleItemClick(e, "sign-in")}
        />
      );
    } else {
      submitButton = (
        <Button
          margin="small"
          label="Submit"
          primary
          color="#8F1701"
          onClick={(e) => this.onSubmit(e)}
        />
      );
      loginButton = (
        <Button
          margin="small"
          primary
          color="#8F1701"
          label="Sign Out"
          onClick={(e) => this.handleItemClick(e, "sign-out")}
        />
      );
    }
    return (
      <div align="center">
        {loginButton}
        <br />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          placeholderText="Date"
        />
        <br />
        <div display="flex" flex-direction="row">
          <DatePicker
            selected={this.state.start}
            onChange={this.handleChange1}
            showTimeSelect
            showTimeSelectOnly
            timeInterval={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            placeholderText="Click to select start time"
          />
          <br />
          <DatePicker
            selected={this.state.end}
            onChange={this.handleChange2}
            showTimeSelect
            showTimeSelectOnly
            timeInterval={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            placeholderText="Click to select end time"
          />
        </div>
        <form>
        <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
           size="medium"
           textAlign="center"
          >
            Time Zone:{" "}
          <select name="timeZone" value={this.state.timeZone} onChange={this.handleInputChange}>
            <option value="America/Anchorage">Alaska</option>
            <option selected value="America/Los_Angeles">Pacific</option>
            <option value="America/Chicago">Central</option>
            <option value="America/Denver">Mountain</option>
            <option value="America/New_York">Eastern</option>
            <option value="Pacific/Honolulu">Hawaii</option>
          </select>
        </Paragraph>
          <input
            name="description"
            placeholder="Who do you want to keep in contact with?"
            value={this.state.description}
            onChange={(e) => this.change(e)}
            style={{ width: "600px", height: "40px" }}
          />
          <br />
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
           size="medium"
           textAlign="center"
          >
            Repeat every{" "}
            <input required type="number" name="interval" min="1" max="100" placeholder="number" value={this.state.interval} onChange={this.handleInputChange}/>
            <select required name="frequency" value={this.state.frequency} onChange={this.handleInputChange}>
              <option value="" disabled selected>Select</option>
              <option value="DAILY">Days</option>
              <option value="WEEKLY">Weeks</option>
            </select>
            {" "} and end after {" "}
            <input required type="number" name="count" min="1" max="100" placeholder="number" value={this.state.count} onChange={this.handleInputChange}/>
            {" "}occurrences
            </Paragraph>
            
            
          {submitButton}
        </form>
      </div>
    );
  }
}
