// routes
const https = require('https');
// const url = require('../../config/google-maps').url;

module.exports = function(app, db) {
    // app.get('/restaurant', (req, res) => {
    //     db.collection('restaurants').find({}).toArray((err, collection) => {
    //         if (err) res.send(err);
    //         else {
    //             const randomNum = Math.floor(Math.random() * Math.floor(collection.length));
    //             res.json(collection[randomNum]);
    //         }
    //     });
    // });

    app.post('/google-restaurant', (req, res) => {
        console.log('Hello?');
        // https.get(url, function(response) {
        //     let body = '';
        //     response.on('data', function(chunk) {
        //         body += chunk;
        //     });

        //     response.on('end', function() {
        //         let places = JSON.parse(body);
        //         let locations = places.results;
        //         let randLoc = locations[Math.floor(Math.random() * locations.length)];
        //         res.header("Access-Control-Allow-Origin", "*");
        //         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        //         const randomRestaurant = {
        //             name: randLoc.name,
        //             address: randLoc.formatted_address,
        //             price: randLoc.price_level
        //         };

        //         res.json(randomRestaurant);
        //     });
        // }).on('error', function(e) {
        //     console.log("Got error: " + e.message);
        // });
    });
};