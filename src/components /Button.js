import React from 'react';
import { connect } from 'react-redux';

class Button extends React.Component{
        componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
      }

      handleKeyPress = (e) => {
          if(this.props.letters.indexOf(e.key.toUpperCase())!== -1){
            const key = e.key.toUpperCase();
      
            var result = this.props.sounds.filter(obj => {
                return obj["keyTrigger"] === key
              })
              const link = result[0].url;
            const audio = new Audio(link);
            const title = result[0].id;
            audio.volume = this.props.volume / 100 ;
            audio.play(); 
            this.props.UpdateNowPlaying(title);   
     
          }
      }
    render(){
        return(
            <div>
                <p style={{textAlign: "center"}}>Tap the keys on your keyboard to give it a spin</p>
                <div className="buttonContainer">
           
            {this.props.letters.map((item,index) => {
                return(
                    <button key={index} className='drumbutton' onClick ={this.onClick}>{item}</button>
                )
            })}   
            </div>
            </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return{
        letters: state.letters,
        sounds: state.sounds,
        volume: state.volume
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        UpdateNowPlaying: (title) => dispatch({ type: 'UpdateNowPlaying',payload: title}) 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Button);