
var burger = require('/daBurger/daBurger/models/burgers');

module.exports = function(app) {
  app.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var handlebarsObject = {
      burgers: data
    };
    res.render('index', handlebarsObject);
    console.log("YOURE IN get FUNCTIOn &&&&&&&")
    console.log(handlebarsObject)
  });
});

app.post('/api/burger', function(req, res) {
  console.log(req.bod)
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

app.put('/api/:id', function(req, res) {
  console.log("YOURE IN TEH PUT FUNCTION FOR UPDATING -------")
  console.log(req.body.burger_name)
  console.log(req.params.id);
  console.log(req.body.devoured)
  burger.updateOne(req.body.burger_name, req.params.id, req.body.devoured, function() {
    res.status(200).end()
  })
});
}


