const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const mongoose = require("mongoose");
const app = express();
// app is used when we want to use express code!!
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
// this is to get local files included when accessing the route file in get method
// in html we only have to add the path after the static folder.

mongoose.connect("mongodb://localhost:27017/bookingsDB", {useNewUrlParser: true});


const bookingsSchema = {
  fullName: String,
  email: String,
  tableNumber: Number,
  date: String,
  message: String
};

const Booking = mongoose.model("Booking", bookingsSchema);

/* const booking1 = new Booking({
  fullName: 'Miss Veronika Vanyo Ildiko',
  email: 'v.verona@gmail.com',
  tableNumber: 2,
  date: '1975',
  message: 'best table please!'
})
 */
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
  // sending the HTML as response to a request to the route '/'.
});

app.post('/', (req,res)=>{

const title =  req.body.title;
const firstN = req.body.firstN;
const lastN  = req.body.lastN;
const email = req.body.email;
const numberOfPeople = req.body.numberOfPeople;
const date = req.body.date;
const message = req.body.message;

const booking = new Booking({
  fullName: title+' '+firstN+' '+lastN,
  email: email,
  tableNumber: numberOfPeople,
  date: date,
  message: message
})


booking.save()

res.redirect('/')


})








app.listen(process.env.PORT || 3000, ()=>{
  // This for heroku to dinamically get chosen by them what port they will have our app listen to.
  // with the || we make it possible to run it locally.
  console.log("Server is running on port 3000");
});