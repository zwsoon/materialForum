import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    //lets the user go to the next page
    continue = e => {
        e.preventDefault();
        // Process Form //
        this.props.nextStep();
    }
    // lets the user go the previous page
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        // use values as a variable
        const { values: { firstName, lastName, email } } = this.props;
        return (
            <MuiThemeProvider>
                {/*React.Fragment acts like a fake DOM*/}
                <React.Fragment>
                    {/*Create text of success at the top*/}
                    <AppBar title="Success!" />
                    {/*Bold text*/}
                    <h1>Thank you for your submission, {firstName} {lastName}!</h1>
                    {/*Message of the page*/}
                    <p>An email will be sent to {email}</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Success;
