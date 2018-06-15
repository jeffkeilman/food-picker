// routes

module.exports = function(app, db) {
    app.get('/restaurant', (req, res) => {
        db.collection('restaurants').find({}).toArray((err, collection) => {
            if (err) res.send(err);
            else {
                const randomNum = Math.floor(Math.random() * Math.floor(collection.length));
                res.json(collection[randomNum]);
            }
        });
    });
};