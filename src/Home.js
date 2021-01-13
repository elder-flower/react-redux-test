import React from 'react'

class Home extends React.Component {
  render(){
      const props = this.props;
      console.log( 'Home props' );
      console.log( props );
    return(
      <div>
        <h1>Home</h1>
        <h2>I am {this.props.name}</h2>
      </div>
    )
  }
}


export default Home;