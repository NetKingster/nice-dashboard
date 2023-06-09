require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
// const routes = require('./routes/routes');
const app = express();
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(__dirname + '/public'));

app.use(express.json());

const HomeRoutes = require('./routes/routes')
app.use(HomeRoutes);


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
