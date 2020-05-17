  import React, {ReactNode, SyntheticEvent} from 'react';
  import ApiCalendar from 'react-google-calendar-api';
  
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

    render(): ReactNode {
        return (
		<div>
            <button onClick={(e) => this.handleItemClick(e, 'sign-in')}>
                sign-in</button>
            <button onClick={(e) => this.handleItemClick(e, 'sign-out')}>
            	sign-out</button>
		</div>
        );
    }
}

{/*
import React from "react";
import { Heading, Box, Paragraph} from "grommet";

class RemindForm extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		day: '',
		frequency: ''
	};

	change = e => {
		this.setState({
		[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.setState({
			firstName: '',
			lastName: '',
			day: '',
			frequency: ''
		})
	}


	render() {
		return (
		<form>
		<input 
		 name="firstName"
		 placeholder="First Name"
		 value={this.state.firstName}
		 onChange={e => this.change(e)} 
		/>
		<br />
		<input 
		 name="lastName"
		 placeholder='Last Name' 
		 value={this.state.lastName}
		 onChange={e => this.change(e)} 
		/>	
		<br />
		<input 
		 name="day"
		 placeholder='Day' 
		 value={this.state.day}
		 onChange={e => this.change(e)} 
		/>
		<br />
		<input 
		 name="frequency"
		 placeholder='Frequency' 
		 value={this.state.frequency}
		 onChange={e => this.change(e)}
		/>
		<br />
		<button onClick={e => this.onSubmit(e)}>Submit</button>


		</form>  
		);
	}
}

export default RemindForm;
*/}
