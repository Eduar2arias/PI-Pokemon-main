const { Router } = require("express");
const { Type } = require("../db");
const axios = require("axios");
const {getType} = require('../controllers/type.controlls');
const getTypeHandler = require("../handlers/type.handler");



const typeRoute = Router();

typeRoute
.get("/",getTypeHandler)

// .get("/", (req, res) => {
//  const result = getType( Type) 
//  result
//  .then( data => fnResolve(res,200 ,data ))
//  .catch(err => fnReject(res , 404 , err) )
// });

module.exports = typeRoute;
