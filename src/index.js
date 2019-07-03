import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component 
{
  constructor(props) {
    super(props);

    this.state = { 
      lat: null,
      date: new Date(),
      errorMessage: ''
    };

    console.log('construct');
  }

  componentDidMount() {
    console.log('mount');

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude});
        console.log('state');
      },
      (err) => {
        this.setState({errorMessage: err.message});
        console.log('error');
      }
    )
  }

  componentDidUpdate() {
    console.log('update');
  }

  conditionalRender() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
          <p>Error: { this.state.errorMessage }</p>
      );  
    } else if (this.state.lat && !this.state.errorMessage) {
      return (
        <SeasonDisplay lat={this.state.lat} date={this.state.date}/>  
      );
    } else {
      return (
        <Spinner message="Awaiting location..." />
      );
    }
  }

  render() {
    console.log('render');
    const bgc = {backgroundColor: '#EEEEEE'};
    return (
      <div style={bgc}>
        {this.conditionalRender()}
      </div>
    )
    
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);