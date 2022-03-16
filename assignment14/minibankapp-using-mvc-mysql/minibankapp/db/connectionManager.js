/**
 * connectionManager.js
 * @author Aregawi T. Arefe
 * @since 03-15-2022
 */
"use strict";

const mysql = require("mysql2");
const connectionString = require("./config/connection-string");

const dbConnectionMgr = (function(connectionStr){
    /**
     * Makes and returns a Database connection pool using the given configuration
     */
    const getConnection = function(){
        return mysql.createPool(connectionStr);
    }
    return{
        getConnection:getConnection
    }
})(connectionString);

module.exports = dbConnectionMgr;
