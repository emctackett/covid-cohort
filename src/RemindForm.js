import React, {ReactNode, SyntheticEvent} from 'react';
import ApiCalendar from 'react-google-calendar-api';
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
 
  export default class DoubleButton extends React.Component {
    constructor(props) {
    	super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    };
      
    handleItemClick(event: SyntheticEvent<any>, name: string): void {
        if (name === 'sign-in') {
        	ApiCalendar.handleAuthClick();
        } else if (name === 'sign-out') {
          	ApiCalendar.handleSignoutClick();
        }
      }
	state = {
		startDate: new Date(),
		start: '',
		end: '',
		description: ''
	};

	change = e => {
		this.setState({
		[e.target.name]: e.target.value
		});
	};
	handleChange = (date) => {
		this.setState({
			startDate: date
	});
	};
	handleChange1 = (st) => {
		this.setState({
			start: st
	});
	};

	handleChange2 = (en) => {
		this.setState({
			end: en
	});
	};	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.setState({
			startDate: '',
			start: '',
			end: '',
			description: ''
		})
	}


	render() {
		return (
		<div>
              <button
                  onClick={(e) => this.handleItemClick(e, 'sign-in')}
              >
                sign-in
              </button>
              <button
                  onClick={(e) => this.handleItemClick(e, 'sign-out')}
              >
                sign-out
              </button>
		<br />	
		<DatePicker
			selected={this.state.startDate}
			onChange={this.handleChange}
		/>
		<br />
		<DatePicker
			selected={this.state.start}
			onChange={this.handleChange1}
			showTimeSelect
			showTimeSelectOnly
			timeInterval={15}
			timeCaption="Time"
			dateFormat="h:mm aa"
			placeholderText="Start Time"
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
			placeholderText="End Time"
		/>
		<form>
		<input 
		 name="description"
		 placeholder='Description: Who do you want to keep in contact with?' 
		 value={this.state.description}
		 onChange={e => this.change(e)}
		/>
		<br />
		<button onClick={e => this.onSubmit(e)}>Submit</button>


		</form>  
		</div>
	);
	}
}
      

