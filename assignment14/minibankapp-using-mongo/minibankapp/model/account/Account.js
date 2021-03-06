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
    setAccountNo(accountNo){
        this.#accountNo = accountNo;
    }
    setCustomerName(customerName){
        this.#customerName = customerName;
    }
    setAccountType(accountType){
        this.#accountType = accountType;
    }
}

module.exports = Account;