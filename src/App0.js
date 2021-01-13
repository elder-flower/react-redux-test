import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
              <div>
                <Navbar /><hr/>
                <Route exact path='/' render={ () => <Home name={'Korg Opsix'}/> }/>
                <Route path='/About' render={ () => <About name={'Korg Wavestate'}/> }/>
              </div>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;