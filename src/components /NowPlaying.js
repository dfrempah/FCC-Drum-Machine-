import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';



class Nowplaying extends React.Component{
    render(){
        return(
            <div className="nowPlaying">
                <p style={{textAlign: "left"}}>Now playing...</p>
                <div className="icons">
                <FontAwesomeIcon icon="play" style={{float: "left"}}/>
                <div className="">
                <FontAwesomeIcon icon="volume-up" style={{marginRight: '10%'}}/>
                <p style={{display:"inline"}}>{this.props.volume}%</p>
                </div>
                
    
                </div>
             
                </div>
               
        )
    }
}

const mapStateToProps = (state) => {
    return{
        volume: state.volume
    }
}

export default connect(mapStateToProps)(Nowplaying);