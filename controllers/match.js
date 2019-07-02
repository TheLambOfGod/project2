const express = require('express');
const db = require('../models');
const passport = require('../config/passportConfig');
const router = express.Router();

 router.put('/', function(req, res) {
    db.profile.update({
        bio: req.body.bio,
        radius: req.body.radius,
        lat: req.body.lat,
        long: req.body.long
     }, {
         where: {id: parseInt(req.params.id)}
     }).then(function() {
         res.redirect("/match/");
    })

})

module.exports = router;