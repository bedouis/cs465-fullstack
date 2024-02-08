const fs = require('fs');

// app_server/controllers/travel.js
const trips = require('mongoose').model('trips');



/* GET travel view */
const travel = (req, res) => {
    console.log('Rendering travel view with trips:', trips);
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
    travel
};

