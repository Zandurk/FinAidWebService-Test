var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


class UserTransaction {
    constructor(name, amount, date, category, account, bank_statement, bank) {
        this._name = name;
        this._amount = amount;
        this._date = date;
        this._category = category;
        this._account = account;
        this._bank_statement = bank_statement;
        this._bank = bank;
    }

}

class Account {

    constructor(_id, account_name, account_numbers, account_type, available_balance, bank, booked_balance, country, credit_limit, currency, latest_transaction_booking_date, product, status, value_dated_balance) {
        this.id = _id;
        this._account_name = account_name;
        this._account_numbers = account_numbers;
        this._account_type = account_type;
        this._available_balance = available_balance;
        this._bank = bank;
        this._booked_balance = booked_balance;
        this._country = country;
        this._credit_limit = credit_limit;
        this._currency = currency;
        this._latest_transaction_booking_date = latest_transaction_booking_date;
        this._product = product;
        this._status = status;
        this._value_dated_balance = value_dated_balance;
    }

}

router.get('/all', function (req, res, next) {
    let utArr = [];
    for (let i = 0; i < 25; i++) {
        if(i < 10) {
            let ut = new UserTransaction("WB TRANS", Math.floor(Math.random() * 25) - 5, new Date(), 'Online Services', "Main Account", "N3DA_NDKK", "Nordea");
            utArr.push(ut);
        } else if (i > 10 && i < 20) {
            let ut = new UserTransaction("WB TRANS", Math.floor(Math.random() * 25) - 5, new Date(), 'Mad', "Main Account", "N3DA_NDKK", "Nordea");
            utArr.push(ut);
        } else {
            let ut = new UserTransaction("WB TRANS", Math.floor(Math.random() * 25) - 5, new Date(), 'Fun', "Main Account", "N3DA_NDKK", "Nordea");
            utArr.push(ut);
        }

    }
   res.send(utArr);
});

router.get('/account', (req, res, next) => {
   let acc = new Account(1, 'Test Account', {_type : 'IBAN', value : '123456789'}, 'Current', 2000, {'bic': 'NDEADKKK', 'country': 'DK', 'name': 'Nordea'}, 500, 'DK', 0, 'DKK', new Date(), 'Test', 'Open', 1500);
   res.send(acc);
});

module.exports = router;
