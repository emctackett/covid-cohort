import React, { ReactNode, SyntheticEvent } from "react";
import ApiCalendar from "./GoogleCalendar.js";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { Button, Paragraph } from "grommet";
import "react-datepicker/dist/react-datepicker.css";

/*TO DO: Fix user input verification
TO DO: Attendees  */


export default class DoubleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = { 
      isLoggedIn: false,
      frequency: "DAILY",
      count: 1,
      interval: 1,
      timeZone: "America/Los_Angeles",
      meeting: 0
    };
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
    timeZone: "",
    meetId: "",
    meeting: "",
    attendeeList: [],
    sign: false
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

  googleForm = () => {
      return (
        <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          placeholderText="Date"
          className="remind-date-picker"
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
            className="remind-date-picker"
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
            className="remind-date-picker"
          />
          <br />
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
            name="attendeeList"
            placeholder="Invite guest by entering their emails here. Seperate emails w/ spaces."
            value={this.state.attendeeList}
            onChange={this.handleInputChange}
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
            <br />
            <input name="meeting" type="checkbox" value="1" onChange={this.handleInputChange}/>
            {" "}Add Google Meets video conferencing
            </Paragraph>
            <Button
          margin="small"
          label="Submit"
          primary
          color="#8F1701"
          onClick={(e) => this.onSubmit(e)}
        />
        </form>
        </div>
      );
  }
  

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
      count: "",
      meetId: "",
      meeting: "",
      attendeeList: []
    });
    if(this.state.attendeeList !== undefined && this.state.attendeeList.length > 0){
      console.log(this.state.attendeeList);
      let aList = this.state.attendeeList;
      aList = aList.split(" ");
      var list = [];
      for(var i=0; i < aList.length; i++){
        var attend = {email: aList[i],
                      optional: true};
        list.push(attend);
      }
      this.state.attendeeList = list;
    }
    if(this.state.meeting == 1){
      this.state.meetId = Math.random().toString(36).slice(2);
      ApiCalendar.changeConference(this.state.meeting);
    }
    if(this.state.startDate !== undefined && Object.prototype.toString.call(this.state.startDate) === "[object Date]"){
      if(this.state.start !== undefined && Object.prototype.toString.call(this.state.start) === "[object Date]"){
        this.state.startTime = new Date(
        this.state.startDate.getFullYear(),
        this.state.startDate.getMonth(),
        this.state.startDate.getDate(),
        this.state.start.getHours(),
        this.state.start.getMinutes(),
        this.state.start.getSeconds()
        );
      };
      if(this.state.end !== undefined && Object.prototype.toString.call(this.state.end) === "[object Date]"){
        this.state.endTime = new Date(
        this.state.startDate.getFullYear(),
        this.state.startDate.getMonth(),
        this.state.startDate.getDate(),
        this.state.end.getHours(),
        this.state.end.getMinutes(),
        this.state.end.getSeconds()
        );
      };
    };
    if(this.state.timeZone === undefined || Array.isArray(this.state.timeZone) || this.state.timeZone.length > 0){
      this.setState({timeZone:"America/Anchorage"});
    }
    if(this.state.frequency < 1){
      this.setState({frequency: 1});
    }
    if(this.state.count < 1){
      this.setState({count: 1});
    }
    if(this.state.interval === undefined || this.state.interval.length > 0){
      this.setState({interval: "DAILY"});
    }
    const event: object = {
      summary: "Catch up w/ friends and family",
      description: "During these socially distant times, it is very important to stay connected with friends and family. Call, text, or use Google Hangouts to stay in touch.",
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
      conferenceData: {
        createRequest: {
          requestId: this.state.meetId
        }
      },
      attendees: this.state.attendeeList,
      visibility: "public",
      guestsCanModify: true
    };
    
    ApiCalendar.createEvent(event, this.calendar)
      .then((result: object) => {
        console.log(result);
      })
      .catch((error: any) => {
        console.log(error);
        alert(error.result.error.message);
      });
    
    
    console.log(event);
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let loginButton, googleForm;
    if (!isLoggedIn) {
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
      loginButton = (
        <Button
          margin="small"
          primary
          color="#8F1701"
          label="Sign Out"
          onClick={(e) => this.handleItemClick(e, "sign-out")}
        />
      );
      googleForm = this.googleForm();
    }
    return (
      <div align="center">
        {loginButton}
        <br />
        {googleForm}
      </div>
    );
  }
}
