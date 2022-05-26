import React, { Component } from 'react';

class AddActivitiesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div class='addActivitiesContainer'>
                <br></br>
                <br></br>
                <h2>
                <em>Have you had an amazing travel experience?</em>
                </h2>
                <h3>
                <em>Why don't you inspire others?</em>
                </h3>
                <div className='addActivityInputs'>
                <input placeholder='Where was it?'></input>
                <input placeholder='Which season was it?'></input>
                <input placeholder='What did you do?'></input>
                <button id='addActivityButton'>Add your experience to our database!</button>
                </div>
            </div>        
        )
    }
}

export default AddActivitiesContainer;