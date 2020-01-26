import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    //lets the user go to the next page
    continue = e =>{
        e.preventDefault();
        // Process Form //
        this.props.nextStep();
    };
    // lets the user go the previous page
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        // use values as a variable
        const {values, handleChange}=this.props;
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Enter Personal Details" />
                   <TextField
                        hintText = "Enter Your Occupation"
                        floatingLabelText = "Occupation"
                        onChange = {
                            // call in the handleChange method from UserForm and we pass in
                            handleChange('occupation')
                        }
                        defaultValue = {values.occupation}
                   />
                   <br/>
                   <TextField
                        hintText = "Enter Your City"
                        floatingLabelText = "City Name"
                        onChange = {
                            // call in the handleChange method from UserForm and we pass in
                            handleChange('city')
                        }
                        defaultValue = {values.city}
                   />
                   <br/>
                   <TextField
                        hintText = "Enter Your Bio"
                        floatingLabelText = "Bio"
                        onChange = {
                            // call in the handleChange method from UserForm and we pass in
                            handleChange('bio')
                        }
                        defaultValue = {values.bio}
                   />
                   <br/>
                   <RaisedButton
                        label = "Back"
                        primary = {false} //sets the color to white
                        // calls the style method below
                        style = {styles.button}
                        onClick = {this.back}
                   />
                   <RaisedButton
                        label = "Continue"
                        primary = {true} //sets the color to blue
                        // calls the style method below
                        style = {styles.button}
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

export default FormPersonalDetails
