require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const e = require('express');
const encrypt = require('mongoose-encryption')


const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/userDB', { useUnifiedTopology: true })

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})
/* its a more advanced way of creating schema. we use the mongoose schema class
 */

const secret = process.env.SECRET;
/* you can console log to check if its working or not */
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] })
/* we add a plugin to encrypt. notice the array where we can add the email and so on
whatever we want to encrypt. */
const User = new mongoose.model('User', userSchema)




app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})
app.post('/register', (req, res) => {

    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    })
    newUser.save((err) => {
        if (!err) {
            res.render('secrets')
        } else {
            console.log(err)
        }
    })
})

app.post("/login", function(req, res){

    const user = new User({
      username: req.body.username,
      password: req.body.password
    });
  
    req.login(user, function(err){
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, function(){
          res.redirect("/secrets");
        });
      }
    });
  
  });

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000')
});