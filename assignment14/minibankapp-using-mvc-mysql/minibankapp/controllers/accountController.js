/**
 * accountController.js
 * @author Aregawi T. Arefe
 * @since 03-15-2022
 */

"use strict";

const accountDAO = require("../db/dao/accountDAO");
const Account = require("../models/Account");

const accountController = (function(){
    const getAccounts = async function(req, res){
        try {
            const accounts = await accountDAO.getAccounts();
            console.log(accounts);
            return accounts;
        } catch (error) {
            res.status(500).render("50x",{error:error});
        }
    };

    const createNewAccount = async function(req, res){
        const accountNo = req.body.txtAccountNo;
        const customerName = req.body.txtCustomerName;
        const accountType = req.body.ddlAccountType;
        const account = new Account(accountNo,customerName,accountType);
        try {
            const opRes = await accountDAO.saveAccount(account);
            console.log(`Save Product in Controller: ${opRes}`);
            return opRes;
        } catch (error) {
            res.status(500).render("50x",{error:error});
        }
    };

    return{
        getAccounts:getAccounts,
        createNewAccount:createNewAccount
    }
})();

module.exports = accountController;