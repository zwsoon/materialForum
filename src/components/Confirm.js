import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    //lets the user go to the next page
    continue = e =>{
        e.preventDefault();
        // Process Form //
        this.props.nextStep();
    }
    // lets the user go the previous page
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        // use values as a variable
        const {values: {firstName, lastName, email, occupation, city, bio }} = this.props;
        return (
            <MuiThemeProvider>
                {/*React.Fragment acts like a fake DOM*/}
               <React.Fragment>  
                   <AppBar title="Confirm User Data" />
                   <List>
                       <ListItem
                         primaryText="First Name"
                         secondaryText={firstName}
                       />
                       <ListItem
                         primaryText="Last Name"
                         secondaryText={lastName}
                       />
                       <ListItem
                         primaryText="Email"
                         secondaryText={email}
                       />
                       <ListItem
                         primaryText="Occupation"
                         secondaryText={occupation}
                       />
                       <ListItem
                         primaryText="City"
                         secondaryText={city}
                       />
                       <ListItem
                         primaryText="Bio"
                         secondaryText={bio}
                       />
                   </List>
                   <br/>
                   <RaisedButton
                        label = "Back"
                        primary = {false} //sets the color to white
                        // calls the style method below
                        style = {styles.button}
                        onClick = {this.back}
                   />
                   <RaisedButton
                        label = "Confirm & Continue"
                        primary = {true} //sets the color to Blue - false: white
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

export default Confirm;
