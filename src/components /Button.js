import React from 'react';
import { connect } from 'react-redux';


class Button extends React.Component{
    // const letters = ;

    render(){
        return(
            <div className="buttonContainer">
            {this.props.letters.map((item,index) => {
                return(
                    <button key={index} className='drumbutton'>{item}</button>
                )
            })}
               
            </div>
            
        )
    }
}


const mapStateToProps = (state) => {
    return{
        letters: state.letters
    }
}



export default connect(mapStateToProps,null)(Button);