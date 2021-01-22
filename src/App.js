import React, { Component } from 'react';
import SimpleForm from './SimpleForm';
import './index.css';

class App extends Component{
    constructor(props) {
        super(props)
        this.showResults = this.showResults.bind(this)
    }
    async showResults(values){
        return new Promise(resolve => {
            setTimeout(() => {
              // simulate server latency
              window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
              resolve()
            }, 500);
        });
    }


    render() {
        return (
            <>
                <h2>Form</h2>
                <SimpleForm onSubmit={this.showResults} />
            </>
        );
    }
}

export default App;