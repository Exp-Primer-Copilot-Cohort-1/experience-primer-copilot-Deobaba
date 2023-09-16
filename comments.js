// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static('public'));

// Create comments array
const comments = [
  {
    name: 'John',
    comment: 'This is a comment'
  },
  {
    name: 'Mary',
    comment: 'This is another comment'
  }
];

// GET request for index page
app.get('/', (req, res) => {
  res.render('index', { comments: comments });
});

// POST request for index page
app.post('/', (req, res) => {
  const newComment = {
    name: req.body.name,
    comment: req.body.comment
  };

  comments.push(newComment);

  res.redirect('/');
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});