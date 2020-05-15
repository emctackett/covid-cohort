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
