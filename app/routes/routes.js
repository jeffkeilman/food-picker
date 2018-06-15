// routes
const https = require('https');
const url = process.env.URL;

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
        console.log(url);
        https.get(url, function(response) {
            let body = '';
            response.on('data', function(chunk) {
                body += chunk;
            });

            response.on('end', function() {
                let places = JSON.parse(body);
                let locations = places.results;
                let randLoc = locations[Math.floor(Math.random() * locations.length)];
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

                let price = '';
                for (let x = 0; x < randLoc.price_level; x++) {
                    price += '$';
                }

                const randomRestaurant = randLoc.name + '\n' + randLoc.formatted_address + ': ' + '\nPrice: ' + price;

                res.send(
                    {
                        "text": randomRestaurant
                    }
                );
            });
        }).on('error', function(e) {
            console.log("Got error: " + e.message);
        });
    });
};