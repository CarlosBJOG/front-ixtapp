const express = require("express");
const session = require("express-session");
const crearVariableSesion = ( req, res = response, next ) => {

    next();
}


module.exports = {
    crearVariableSesion,
 
}

