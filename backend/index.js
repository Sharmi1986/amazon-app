const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');



const app = express();
app.use(express.json());
app.use(cors());

const dbURL = 'mongodb://127.0.0.1:27017/AmazonSignIn';

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


const UsersSchema = new mongoose.Schema({
   
    email: String,
    password: String
})

const usersModel = mongoose.model('users', UsersSchema);

app.post('/register', (req, res)=>{
    // To post / insert data into database

    const {email, password} = req.body;
    usersModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            usersModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    usersModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

app.listen(5000, () => {
    console.log("Server listining on 5000");

});