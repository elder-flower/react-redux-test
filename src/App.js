import React, { Component } from 'react';
import InitializeFromStateForm from './InitializeFromStateForm';
import './index.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.showResults = this.showResults.bind(this);
    }
    async showResults(values){
        return new Promise(resolve => {
            
            setTimeout(() => {

            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
            resolve();

            console.log( values );
            }, 500);
        });
    }
    render() {
        return (
            <>
                <h2>Form</h2>
                <InitializeFromStateForm onSubmit={this.showResults} />
            </>
        );
    }
}

export default App;