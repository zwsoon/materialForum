import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {

    //When the user types anything in on the UI
    //that string of info will be added to the following state below:
    //check the dev tool under 'Components' in Chrome
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
            step: step + 1
        });
    };

    // Go back to previous step
    prevStep = () =>{
        //destructuring
        const{step} = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    // renders the information to the UI
    render() {
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio};

        //allows the pages
        switch(step){
            case 1: 
                return(
                <FormUserDetails //calls the FormUserDetailsClass
                    //these are the "properties" called in the FormUserDetails class
                    nextStep = {this.nextStep}  //allows the user to go forward        
                    handleChange = {this.handleChange}
                    values = {values}//values in render()
                />
                )
            case 2:
                return(
                    <FormPersonalDetails //calls the FormPersonalDetailsClass
                        //these are the "properties" called in the FormPersonalDetails class
                        nextStep = {this.nextStep} //allows the user to go forward 
                        prevStep = {this.prevStep} //allows the user to go backwards
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                    )
            case 3:
                return(
                    <Confirm //calls the FormPersonalDetailsClass
                        //these are the "properties" called in the FormPersonalDetails class
                        nextStep = {this.nextStep} //allows the user to go forward 
                        prevStep = {this.prevStep} //allows the user to go backwards
                        values = {values}
                    />
                    )
            case 4:
                return(
                    <Success
                        values = {values}
                    />
                )
        };
    }
}

export default UserForm
