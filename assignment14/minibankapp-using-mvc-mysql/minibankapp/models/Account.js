/**
 * Account.js
 * @author Aregawi T. Arefe
 * @since 03-15-2022
 */
"use strict";
class Account{
    #accountNo = null;
    #customerName = null;
    #accountType = null;
    constructor(accountNo, customerName, accountType){
        this.#accountNo = accountNo;
        this.#customerName = customerName;
        this.#accountType = accountType;
    }
    getAccountNo(){
        return this.#accountNo;
    }
    getCustomerName(){
        return this.#customerName;
    }
    getAccountType(){
        return this.#accountType;
    }
}

module.exports = Account;