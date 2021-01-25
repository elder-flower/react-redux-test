import React, { Component } from 'react';
import SyncValidationForm from './SyncValidationForm';
import './index.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.showResults = this.showResults.bind(this);
    }
    async showResults(values){
        return new Promise(resolve => {
            
            setTimeout(() => {

              window.alert(`You submitted:\n\n${JSON.stringify(values, null, 5)}`)
              resolve();

            console.log( values );
            }, 500);
        });
    }


    render() {
        return (
            <>
                <h2>Form</h2>
                <SyncValidationForm onSubmit={this.showResults} />
            </>
        );
    }
}

export default App;