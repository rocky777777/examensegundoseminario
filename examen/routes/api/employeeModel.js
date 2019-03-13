var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('emps');

  lib.getEmployees = (handler)=>{
      obt.find({}).toArray(
        (err , docs) => {
          if(err){
            handler(err, null);
          }else{
            handler(null, docs);
          }
        }
       ); 
  } 

    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesById = (id, handler) => {
    obt.findOne({ "_id": new ObjectId(thingId)}, (err, doc)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, doc);
      }
    }); // 
} // 

    return handler(new Error("No Implementado"), null);
  

  lib.getEmployeesByCompany = (company, handler) => {
    obt.insertOne(company, (err, r)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, r.result);
      }
    }); //insert One
  }// addNewThing

    return handler(new Error("No Implementado"), null);
  

  lib.getEmployeesByAgeRange = (ageLowLimit, ageHighLimit, handler) => {
    //implementar
    // Mostrar todos los documento incluyendo los extremos
    // que esten entre las edades indicadas por los parametros
    // ageLowLimit y ageHighLimit
    // solo mostrar name, age, email
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
    obt.findOne({ "_id": new ObjectId(companyID)}, (err, doc)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, doc);
      }
    }); // findOne
} // getThingById
    return handler(new Error("No Implementado"), null);
  

  lib.addEmployeeATag = ( tag, id, handler) => {
    var curatedTags = Array.isArray(tags)? tags: [tags];
    var updateObject = { "$set": { "tags": curatedTags}};
    obt.updateOne({"_id": ObjectId(id)}, updateObject, (err, rsult)=>{
        if(err){
          handler(err, null);
        }else{
          handler(null, rsult.result);
        }
    } ); // updateOne
  } // addTagsToThing
    return handler(new Error("No Implementado"), null);
  

  lib.removeEmployee = (id, handler) => {
    obt.deleteOne({"_id": companyId(Id)}, (err, rslt)=>{
      if(err){
        console.log(err);
        handler(err, null);
      } else {
        handler(null, rslt.result);
      }
    }); // deleteOne
  } // deleteById

    return handler(new Error("No Implementado"), null);
  

  lib.increaseAgeToAll = (ageDelta, handler) => {
    var filter = {"_id": ObjectId(id)};
    // get filered document
    obt.findOne(filter, (err, doc) => {
      if(err) {
        handler(err, null);
      } else {
          if(doc){
              //doc.done = !doc.done;
              //doc.fcDone = new Date();
              var updateExpression = {};
              if(doc.done){
                  updateExpression = {"$set": {done : false, fcDone:null} };
              }else{
                  updateExpression = { "$set": { done: true, fcDone:new Date() } };
              }
              obt.updateOne(filter, updateExpression, (err, rslt)=> {
                  if(err) {
                    handler(err, null);
                  }else{
                    handler(null, rslt.result);
                  }
              }); // updateOne
          }else{
            handler(new Error("El documento no Existe"), null)
          }
      }
    } );//findOne
  }

    return handler(new Error("No Implementado"), null);
  
  return lib;


module.exports = employeeModel;
