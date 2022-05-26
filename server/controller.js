const path = require('path');
const db = require(path.join(__dirname,'./models/travelModel.js'));

const travelController = {};

travelController.getActivities = (req, res, next) => {

    // const { season } = req.body;
    // console.log('req.query: ', req.query)
    // const season  = req.query.season;
    // console.log(req.params.id)
    const {season} = req.params;
    const values = [season]
    const mySQLGetQuery = `SELECT TI.location, TI.activities FROM travelItineraries TI WHERE TI.season = $1;`

    db.query(mySQLGetQuery, values)
        .then(data => {
            res.locals.matchingItineraries = data.rows;
            return next();
        })
        .catch(err => {
            return next({
                log: 'An error occured in the getActivities middleware'
            })
        })
};

travelController.addActivities = (req, res, next) => {

    const location = 'Bolivia';
    const season = 'spring';
    const activities = 'See the biggest mirror in the world at the salt falts';
    const values = [location, season, activities];
    const mySQLPostQuery = `INSERT INTO travelItineraries (location, season, activities) VALUES($1, $2, $3) RETURNING *;`

    db.query(mySQLPostQuery, values)
        .then(data => {
            console.log('hey')

            console.log('data: ', data)
            res.locals.matchingItineraries = "Database entry successfully added!";
            return next();
        })
        .catch(err => {
            return next({
                log: 'An error occured in the addActivities middleware'
            })
        })
};

travelController.updateLocation = (req, res, next) => {

    const oldText = 'Atlanta';
    const newText = 'Atlanta, GA';
    const values = [oldText, newText];

    const mySQLPutQuery = 'UPDATE travelItineraries SET location = $2 WHERE location = $1;'    

    db.query(mySQLPutQuery,values)
        .then(data => {
            console.log('data: ', data)
            res.locals.matchingItineraries = "Database entry the successfully updated!";
            return next();
        })
        .catch(err => {
            return next({
                log: 'An error occured in the updateLocation middleware'
            })
        })
};

travelController.deleteLocation = (req, res, next) => {

    const {location} = req.params;

        const values = [location];

        const mySQLPostQuery = 'DELETE FROM travelItineraries WHERE location = $1;'
    
        db.query(mySQLPostQuery,values)
            .then(data => {
                res.locals.matchingItineraries = `Database entry with the location ${location} successfully deleted!`;
                return next();
            })
            .catch(err => {
                return next({
                    log: 'An error occured in the deleteActivities middleware'
                })
            })
    };

//Export the controller
module.exports = travelController;