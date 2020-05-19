import React, {ReactNode, SyntheticEvent} from 'react';
import ApiCalendar from 'react-google-calendar-api';
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
 
  export default class DoubleButton extends React.Component {
    constructor(props) {
    	super(props);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.state = {isLoggedIn: false};
    };
	
	state = {
		startDate: new Date(),
		start: new Date(),
		end: new Date(),
		description: '',
		startTime: new Date(),
		endTime: new Date()
	};
	
    handleItemClick(event: SyntheticEvent<any>, name: string): void {
        if (name === 'sign-in') {
			ApiCalendar.handleAuthClick();
			if(ApiCalendar.sign){
				this.setState({isLoggedIn: true});
			}
        } else if (name === 'sign-out') {
			  ApiCalendar.handleSignoutClick();
			  this.setState({isLoggedIn: false});
        }
      }
	

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
			description: '',
			startTime: '',
			endTime: ''
		})

		this.state.startTime = new Date(this.state.startDate.getFullYear(),
				  this.state.startDate.getMonth(),
				  this.state.startDate.getDate(),
				  this.state.start.getHours(),
				  this.state.start.getMinutes(),
				  this.state.start.getSeconds());


		this.state.endTime = new Date(this.state.startDate.getFullYear(),
				this.state.startDate.getMonth(),
				this.state.startDate.getDate(),
				this.state.end.getHours(),
			    this.state.end.getMinutes(),
				this.state.end.getSeconds());

		console.log(this.state);

		const event: object = {
			'summary': this.state.description,
			'start': {
				'dateTime': this.state.startTime
			},
			'end': {
				'dateTime': this.state.endTime
			}
		};

		ApiCalendar.createEvent(event, this.calendar)
			.then((result:object) => {
				console.log(result);
			})
			.catch((error: any) => {
				console.log(error);
			});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let submitButton, loginButton;
		if(!isLoggedIn){
			submitButton = <button disabled="true" onClick={e => this.onSubmit(e)}>Submit</button>;
			loginButton = <button onClick={(e) => this.handleItemClick(e, 'sign-in')}>sign-in</button>
		}
		else{
			submitButton = <button onClick={e => this.onSubmit(e)}>Submit</button>;
			loginButton = <button onClick={(e) => this.handleItemClick(e, 'sign-out')}>sign-out</button>
		}
		return (
			
		<div>
        {loginButton}
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
		<form>
		<input 
		 name="description"
		 placeholder='Description: Who do you want to keep in contact with?' 
		 value={this.state.description}
		 onChange={e => this.change(e)}
		/>
		<br />
		{submitButton}
		</form>  
		</div>
	);
	}
}
      

