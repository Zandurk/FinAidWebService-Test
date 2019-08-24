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

router.get('/all', function (req, res, next) {
    let utArr = [];
    for (let i = 0; i < 25; i++) {
        let ut = new UserTransaction("WB TRANS", Math.floor(Math.random() * 25) - 5  , new Date(), 'Online Services', "Main Account", "N3DA_NDKK", "Nordea");
        utArr.push(ut);
    }
   res.send(utArr);
});

module.exports = router;
