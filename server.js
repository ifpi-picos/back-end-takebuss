// server.js
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportSetup = require('./passport-setup'); // Import passport setup

const app = express();

app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Route to start Google authentication
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Route to handle Google callback
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  // Successful authentication
  res.redirect('/profile');
});

// Route to log out
app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Protected route
app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send('Unauthorized');
  }
  res.json(req.user);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
