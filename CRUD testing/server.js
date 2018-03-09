const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://frosta:abc123@ds261078.mlab.com:61078/login';

var db;

MongoClient.connect(url, (err, client) => {
  if (err) return console.log(err);
  db = client.db('login'); // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  });
});

app.set('view engine', 'ejs')
app.use(express.static('public'));
