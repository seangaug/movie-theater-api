const express = require('express');
const sequelize = require('sequelize');
const app = express();
const {Show, User} = require('./models/index')
const {db} = require('./db')

const port = 3000;

//Get all users:
app.get('/users', async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers);
});

app.listen(port, () => {
    db.sync();
    console.log(`Server is running on port ${port}`); 
});