var voyageModel = require('../models/model.js')

module.exports = function(app){
    app.get('/destination', function(req, res){
        res.json(voyageModel.seville);
    })
    app.get('/destination/canaryislands', function(req, res){
        res.json(voyageModel.canaryIslands);
    })
    app.get('/destination/capeVerde', function(req, res){
        res.json(voyageModel.capeVerde);
    })
    app.get('/destination/straitOfMagellan', function(req, res){
        res.json(voyageModel.straitOfMagellan);
    })
    app.get('/destination/guam', function(req, res){
        res.json(voyageModel.guam);
    })
    app.get('/destination/phillipines', function(req, res){
        res.json(voyageModel.phillipines);
    })
}
