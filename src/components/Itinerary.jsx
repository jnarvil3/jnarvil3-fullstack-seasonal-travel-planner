import React, { Component } from 'react';
import { render } from 'react-dom';

class Itinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return (
        <div className="itineraryContainer">
            <span> Travel to 
            {' ' + this.props.itineraries.location}
            </span>
            <span> to
            {' ' + this.props.itineraries.activity[0].toLowerCase() + this.props.itineraries.activity.slice(1)}
            </span>
        </div>            
    )
    }
}


export default Itinerary;