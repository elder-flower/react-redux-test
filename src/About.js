import React from 'react'

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
      const props = this.props;
      console.log( 'About props' );
      console.log( props );
    return(
      <div>
        <h1>About</h1>
        <h2>I am {this.props.name}</h2>
      </div>
    )
  }
}


export default About;