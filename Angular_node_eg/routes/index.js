var express = require('express');
var router = express.Router();
var path = require('path');
var isArray = require('isarray');
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/vlcc', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'VLCC.html'));
});


//router.get('/data', function(req,res){
//	res.json([{"id": 1, "name": "Mymm", "city": "Pantano do Sul"},
//        {"id": 2, "name": "Skyble", "city": "Guilmaro"},
//        {"id": 3, "name": "Tagfeed", "city": "Gnosjö"},
//        {"id": 4, "name": "Realcube", "city": "Jrashen"},
//        {"id": 5, "name": "Bluejam", "city": "Zhangjiawo"},
//        {"id": 6, "name": "Jayo", "city": "Obonoma"},
//        {"id": 7, "name": "Cogidoo", "city": "Sungsang"},
//        {"id": 8, "name": "Avavee", "city": "Diawara"},
//        {"id": 9, "name": "Tagtune", "city": "Monywa"},
//        {"id": 10, "name": "Centimia", "city": "Retkovci"}]);
//});

router.get('/wareHouses', function(req, res) {
    var db = req.db;
    var collection = db.get('wareHouses');

    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.get('/filter', function(req, res) {
    var db = req.db;
    var filter = req.filter;
    var collection = db.get(req.query['dbToSearchFor']);
    delete req.query['dbToSearchFor'];
    console.log(req.query);

    collection.find(req.query,{},function(e,docs){
//        console.log(docs, e);
        res.json(docs);
    });
});

router.get('/getData', function(req, res) {
    var db = req.db;
//    var dbName = req.query.dbName;
    var collection = db.get('metadata');

    collection.find(req.query,{},function(e,docs){
        res.json(docs);
    });
});

router.get('/getNearestData', function(req, res) {
    var db = req.db;
//    var dbName = req.query.dbName;
    var collection = db.get('metadata');
    var query = {};
    if (req.query['docType']) {
        query = {
            'docType': {$in : ["wareHouses","Plants","WareHouses"]},
            '$and': [
                {'Latitude': {"$gte": +req.query['Latitude'].toString()  }},
                {'Latitude': {"$lte": +req.query['Latitude1'].toString()  }},
                {'Longitude': {"$gte": +req.query['Longitude'].toString()  }},
                {'Longitude': {"$lte": +req.query['Longitude1'].toString()  }}
            ]
        };
    }
    else
    {
        query = {
            '$and': [
                {'Latitude': {"$gte": +req.query['Latitude'].toString()  }},
                {'Latitude': {"$lte": +req.query['Latitude1'].toString()  }},
                {'Longitude': {"$gte": +req.query['Longitude'].toString()  }},
                {'Longitude': {"$lte": +req.query['Longitude1'].toString()  }}
            ]
        };
    }
//    console.log(query);
    collection.find(query,{},function(e,docs){
//        console.log(docs);
        res.json(docs);
    });
});

router.get('/templates', function(req, res) {
    var db = req.db;
    var collection = db.get('templates');

    collection.distinct('docType',{"showInFilter" : true},function(err, items) {
        res.json(items);
    });
});

/*
 * GET wareHouseslist.
 */
router.get('/templatesFields', function(req, res) {
//    console.log('here');
    var db = req.db;
    var collection = db.get('templates');
    console.log(req.query);

    collection.find(req.query,{},function(err, items) {
        console.log('here');
        console.log(err);
        console.log(items);
        res.json(items);
    });
});
module.exports = router;