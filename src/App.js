import React from 'react';
import './App.css';
import NowPlaying from './components /NowPlaying';
import Button from './components /Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas,faPlay,faPowerOff,faCoffee,faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(fas,faPlay,faPowerOff,faCoffee,faVolumeUp)



class App extends React.Component{
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress = (e) => {
    const letter = e.key.toUpperCase();
    const array = this.props.letters;
    console.log(array.findIndex('W'));
    // console.log(index)

  }

  render(){
  return (
    <div className="App">
    {this.props.power ? (
      <div className="deviceBody">
      <NowPlaying />
      <Button></Button>
      <input type="range" value={this.props.volume} onChange={this.props.onChange} min="0" max="100"/>
      </div>
     
    ) : (<p className="offmessage" style={{textAlign: "center"}}>Power device on to start! </p>)}
      

      <hr />
      <button style={{backgroundColor: "inherit", border: "none"}} onClick={this.props.handlePower}>
      {this.props.power ? (
        <FontAwesomeIcon icon="power-off" size="4x" color="green"/>
        ) : (<FontAwesomeIcon icon="power-off" size="4x" color="red"/>)}
      
      </button>
     <p style = {{textAlign: "center"}}>Power: {this.props.power? 'ON' : 'OFF'}</p>
      
   
    </div>
  );
}  
}

const mapStateToProps = (state) => {
  return({
    volume: state.volume,
    power: state.power,
    sounds: state.sound,
    letters: state.letters
    })
}

const mapDispatchToProps = (dispatch) => {
  return{
    onChange: (event) => dispatch({type: 'onChange',payload: event.target.value}),
    handlePower: () => dispatch({type: 'handlePower'})
  } 
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

