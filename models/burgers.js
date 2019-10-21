var orm = require('../config/orm.js');

var burger = {
    
    selectAll: function(cb) {
    orm.selectAll('ig5f30phsi1rdef5.burgers', function(res) {
    cb(res);
      });
    },
    
    insertOne: function(cols, vals, cb) {
    orm.insertOne('ig5f30phsi1rdef5.burgers', cols, vals, function(res) {
    cb(res);
      });
    },
  
    updateOne: function(buns, driverslicense, chomp, noitcnuf) {
    orm.updateOne('ig5f30phsi1rdef5.burgers', driverslicense, chomp, noitcnuf);
    }
  };

module.exports = burger;