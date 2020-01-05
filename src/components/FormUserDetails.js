import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        // use values as a variable
        const {values, handleChange}=this.props;
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Enter User Details" />
                   <TextField
                        hintText = "Enter Your First Name"
                        floatingLabelText = "First Name"
                        onChange = {
                            // call in the handleChange method from UserForm and we pass in firstName
                            handleChange('firstName')
                        }
                        defaultValue = {values.firstName}
                   />
                   <br/>
                   <TextField
                        hintText = "Enter Your Last Name"
                        floatingLabelText = "Last Name"
                        onChange = {
                            // call in the handleChange method from UserForm and we pass in firstName
                            handleChange('lastName')
                        }
                        defaultValue = {values.lastName}
                   />
                   <br/>
                   <TextField
                        hintText = "Enter Your Email"
                        floatingLabelText = "Email"
                        onChange = {
                            // call in the handleChange method from UserForm and we pass in firstName
                            handleChange('email')
                        }
                        defaultValue = {values.email}
                   />
                   <br/>
                   <RaisedButton
                        label = "Continue"
                        primary = {true}
                        // calls the style method below
                        style = {styles.button}
                        // calls the continue method above which will call the nextStep method from UserForm and increase the state +1 
                        // initial click will return 2 which will trigger case 2 to take the user to the 'FormPersonalDetails' page
                        onClick = {this.continue}
                   />
               </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin:15
    }
}

export default FormUserDetails
