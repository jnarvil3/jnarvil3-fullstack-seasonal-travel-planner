import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import SeeActivitiesContainer from './SeeActivitiesContainer.jsx'
import AddActivitiesContainer from './AddActivitiesContainer.jsx'
import ".././main.scss";


const App = props => {
    return(
        <div>
            <div class='welcomeBackContainer'>
                <h1>
                    Welcome back to your favorite travel planner. 
                </h1>
            </div>
            <div>
                <SeeActivitiesContainer />
            </div>
            <div>
                <AddActivitiesContainer />
            </div>
        </div>

//          <div>
//          {/* Update Record Section */}
//      </div>
//       <div>
//       {/* Delete Record Section */}
//   </div>
 )
    
};


export default App;
