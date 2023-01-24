const { Router } = require("express");
const { Type } = require("../db");
const axios = require("axios");
const {getType} = require('../controllers/type.controlls')


function fnResolve(res, codigo, data) {
  res.status(codigo).json(data);
}
function fnReject(res, codigo, data) {
  res.status(codigo).json(data.message);
}

const typeRoute = Router();

typeRoute.get("/", (req, res) => {
 const result = getType( Type) 
 result
 .then( data => fnResolve(res,200 ,data ))
 .catch(err => fnReject(res , 404 , err) )
});

module.exports = typeRoute;
