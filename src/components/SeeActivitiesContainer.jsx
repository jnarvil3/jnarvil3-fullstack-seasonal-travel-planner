import React, { Component } from 'react';
import Activities from "./Activities.jsx";

class SeeActivitiesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [
            {location: 'Covington', season: 'summer', activities: 'Take a ghost tour'},
            {location: 'Augusta', season: 'Spring', activities: 'See the Masters Tournament'},
            {location: 'Savannah', season: 'summer', activities: 'Visit Tybee Island'}
        ]
        };
        this.getSeasonItineraries = this.getSeasonItineraries.bind(this);
    }

    getSeasonItineraries(season){
        console.log(`https:localhost:3000/itinerary/${season}`)
        //Console log test on line 18 implies is invoking and the URL inside the fetch request is correct
        //Issue now is a CORS header thing (check console log in the browser to see what is wrong)
        fetch(`http://localhost:3000/itinerary/${season}`,{
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
            mode: 'cors'
        })
        .then(res => {
            return res.json()
        })
        .then(itinerariesJSArray => {
            //Why does set state not cause an automatic re-render here?
            this.setState({
                itineraries: itinerariesJSArray
            });
            console.log('state itineraries: ', this.state.itineraries)
            return this.render();
        })
        .catch(err => console.log('SeeActivitiesContainer.getSeasonItineraries: ERROR: ', err))
    }

    render(){
        let randomIndex = (Math.floor(Math.random()*this.state.itineraries.length*10))%this.state.itineraries.length;
        let displayedItinerary = this.state.itineraries[randomIndex];
        console.log('displayedItinerary.activities: ', displayedItinerary.activities)
        let firstLetter = displayedItinerary.activities[0].toLowerCase();
        let reformattedPhrase = firstLetter+displayedItinerary.activities.slice(1);
        console.log('reformattedPhrase: ', reformattedPhrase)
    
        return(
            <div class='SeeActivitiesContainer'>
                <h2>
                <em>Ready to be inspired?</em>
                </h2>
                <h3>
                <em>When are you traveling?</em>
                </h3>
                <div className="buttonContainer">
                    <button id='springButton' onClick={() => this.getSeasonItineraries('spring')}>Spring 🌱</button>
                    <button id='summerButton' onClick={() => this.getSeasonItineraries('summer')}>Summer ☀️</button>
                    <button id='fallButton' onClick={() => this.getSeasonItineraries('fall')}>Fall 🍂</button>
                    <button id='winterButton' onClick={() => this.getSeasonItineraries('winter')}>Winter ❄️</button>
                </div>
                <div className="itineraryContainer">
                    <h4>
                        Here's an idea, why don't you..
                        <span> travel to 
                    {' ' + displayedItinerary.location + ' and go ' + reformattedPhrase + '?'}
                    </span>
                    </h4>
                </div>                 
            </div>        
        )
    }
}



export default SeeActivitiesContainer;