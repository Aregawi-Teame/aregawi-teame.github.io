/**
 * accountDAO.js
 * @author Aregawi T. Arefe
 * @since 03-15-2022
 */
"use strict";

const dbConnectionMgr = require("../connectionManager");

const accountDAO = (function(){
    const getAccounts = async function(){
        const qryStrAccounts = "select * from `bank`.`accounts`";
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const [accounts] = await dbConnection.promise().query(qryStrAccounts);
            return accounts;
        } catch (error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    };

    const saveAccount = async function(acc){
        const insQryStr = `insert into accounts (accountNo, customerName, accountType) values ('${acc.getAccountNo()}','${acc.getCustomerName()}','${acc.getAccountType()}')`;
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const saveOpResult = await dbConnection.promise().query(insQryStr);
            console.log(saveOpResult);
            return saveOpResult;
        } catch (error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    };

    return{
        getAccounts:getAccounts,
        saveAccount:saveAccount
    }
})();

module.exports = accountDAO;