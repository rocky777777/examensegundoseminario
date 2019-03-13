
var uuidv4 = require('uuid/v4');
var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);
  var data = null;
  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /byagerange/:min/:max
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */
  var data = null; // temporary store

var company = {
  '_id':'',
  'desc':'',
  'fcIng':null,
  'author':'',
  'due':null,
  'done':false,
  'type': 'small' // 
};

  router.get('/all', (req, res, next) => {
    router.get('/', function( req, res, next) {
      if(!data){
        fileModel.read(function(err, filedata){
          if(err){
            console.log(err);
            data = [];
            return res.status(500).json({'error':'Error al Obtener Data'});
          }
          data = JSON.parse(filedata);
          return res.status(200).json(data);
        });
      } else {
        return res.status(200).json(data);
      }
    });// get /
    router.post('/new', function(req, res, next){
      var _companyData = Object.assign({} , company, req.body);
      var dateT = new Date();
      var dateD = new Date();
      dateD.setDate(dateT.getDate()+ 3);
      _companyData.fcIng = dateT;
      _companyData.due = dateD;
      _companyData._id = uuidv4();
      if(!data){
        data = [];
      }
      data.push(_thingsData);
      fileModel.write(data, function(err){
        if(err){
          console.log(err);
          return res.status(500).json({ 'error': 'Error al Obtener Data' });
        }
        return res.status(200).json(_thingsData);
      });
    });//
        
  });

  router.put('/done/:thingId', function(req, res, next){
    var _companyId = req.params.thingId;
    var _companyds = req.body;
    var _companyUpdated = null;
    var newData = data.map(
      function(doc, i){
        if (doc._id == _companyId){
          _companyUpdated = Object.assign(
            {},
            doc,
            {"done":true},
            _companyUpds
            );
          return _companyUpdated;
        }
        return doc;
      }
    );// end map
    data = newData;
    fileModel.write(data, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json({ 'error': 'Error al Guardar Data' });
      }
      return res.status(200).json(_thingUpdated);
    });
  });// Set A Thing as Done
  
  
  router.delete('/delete/:thingId', function(req, res, next){
    var _companyId = req.params.thingId;
    var newData = data.filter(
      function (doc, i) {
        if (doc._id == _thingId) {
          return false;
        }
        return true;
      }
    );// end map
    data = newData;
    fileModel.write(data, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json({ 'error': 'Error al Guardar Data' });
      }
      return res.status(200).json({"delete": _thingId});
    });
  }); // end delete
  
  fileModel.read(function(err , filedata){
    if(err){
      console.log(err);
    } else{
      data = JSON.parse(filedata);
    }
  });
  
    
  return lib;
}
  module.exports = router;
  