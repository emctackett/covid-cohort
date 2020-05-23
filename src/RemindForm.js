import React, { ReactNode, SyntheticEvent } from "react";
import ApiCalendar from "react-google-calendar-api";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { Button } from "grommet";
import "react-datepicker/dist/react-datepicker.css";

/*TO DO: Fix submit button and sign-in button change.
TO DO: Implement recurrences, recurrence variables added still need form
TO DO: Implement google hangouts  */

export default class DoubleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = { isLoggedIn: false };
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
      count: "",
      interval: "",
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

    console.log(this.state);

    const event: object = {
      summary: "Call or text " + this.state.description,
      description:
        "Ask your friends and family how they are doing or tell them how you are doing. Call or text" +
        this.state.description,
      start: {
        dateTime: this.state.startTime,
      },
      end: {
        dateTime: this.state.endTime,
      },
      recurrence:
        "RRULE:FREQ=" +
        this.state.frequency +
        "INTERVAL=" +
        this.state.interval +
        "COUNT=" +
        this.state.count,
    };

    ApiCalendar.createEvent(event, this.calendar)
      .then((result: object) => {
        console.log(result);
      })
      .catch((error: any) => {
        console.log(error);
      });
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
          <input
            name="description"
            placeholder="Who do you want to keep in contact with?"
            value={this.state.description}
            onChange={(e) => this.change(e)}
            style={{ width: "600px", height: "40px" }}
          />
          <br />
          {submitButton}
        </form>
      </div>
    );
  }
}
