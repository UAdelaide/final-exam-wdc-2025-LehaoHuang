const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

// Export the app instead of listening here
module.exports = app;

// log out and clean the cookie
app.get('/logout', (req, res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.error('Logout error:',err);
        }
        res.redirect('/login.html');
    })
});