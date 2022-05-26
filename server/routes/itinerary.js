const express = require('express');

const travelController = require('../controller.js');

const router = express.Router();

//Get request for certain records
router.get('/:season',travelController.getActivities,
    (req, res) => {
        //For allowing CORS (otherwise the fetch request gets some cross-origin security error)
        res.set('Access-Control-Allow-Origin', '*');
        //Confirmed that res.locals.matchingItineraries is sending
        return res.status(200).send(res.locals.matchingItineraries);
    }
);

//Post request to add an entry
// router.post('/:location/:season/:activities',travelController.addActivities,
//     (req, res) => {
//         return res.status(200).send('Got a post req');
//     }
// );

// //Update request to change an entry
// router.put('/:oldLocation/:newLocation',travelController.updateLocation,
//     (req, res) => {
//         return res.status(200).send('Got a put req');
//     }
// );

//Delete an entry
router.delete('/:location',travelController.deleteLocation,
    (req, res) => {
        return res.status(200).send('Deleted activities in ', res.locals.matchingItineraries,' from the database');
    }
);

//Export the router
module.exports = router;
