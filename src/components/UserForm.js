import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';

export class UserForm extends Component {

//When the user types anything in on the UI
//that string of info will be added o the following state below:
//check the dev tool under 'Components'
state = {
    step : 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
}

//Proceed to next step
nextStep = () =>{
    //destructuring
    //grabs step from the state component
    const{step} = this.state;
    this.setState({
        step: step+1
    });
}

// Go back to previous step
prevStep = () =>{
    //destructuring
    const{step} = this.state;
    this.setState({
        step: step - 1
    });
}

// Handle fields change
handleChange = input => e => {
    this.setState({[input]: e.target.value});
}


    render() {
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio};
        switch(step){
            case 1: 
                return(
                <FormUserDetails
                    //calls nextstep and increases the step by 1
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
                )
            case 2:
                return(
                    <FormPersonalDetails
                        //calls nextstep and increases the step by 1
                        nextStep = {this.nextStep}
                        prevStep = {this.prev}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                    )
            case 3:
                return <h1>Confirm</h1>;
            case 4:
                return <h1>Success</h1>;
        }
    }
}

export default UserForm
