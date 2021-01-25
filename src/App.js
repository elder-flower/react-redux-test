import React, { Component } from 'react';
import SubmitValidationForm from './SubmitValidationForm';
import './index.css';

class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2>Form</h2>
                <SubmitValidationForm />
            </>
        );
    }
}

export default App;