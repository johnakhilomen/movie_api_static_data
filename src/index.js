const {users, movies} = require("./data");
const express = require('express');
      morgan = require('morgan');

const app = express();
const PORT = 3030;
//Using the Morgan middleware library to log all requests
app.use(morgan('common'));
app.use(express.json()); 

//GET request for returning the JSON movie data
  app.get('/movies', (req, res) => {
    res.json(movies);
  });

//GET request for returning the personal message
  app.get('/', (req, res) => {
    res.send('Welcome to the Top 10 Movies List!');
  });

//Using express.static to serve the documentation.html file
app.use(express.static('public'));

//Creating an error-handling middleware function that will log all application-level errors to the terminal
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oops!Something Went Wrong!');
  });

//For returning data about a single movie
  app.get('/movies/title/:title', (req, res) => {
    const movie = movies.find((m)=> m.title == req.params.title);
    res.send(movie);
  });

//For returning data about a genre
app.get('/movies/genre/:genre', (req, res) => {
  const movies_ = movies.filter((m)=> m.genre == req.params.genre);
  res.send(movies_);
});

//For returning data about a director by name
app.get('/movies/director/:director', (req, res) => {
  const director = movies.filter((m)=> m.director == req.params.director);
  res.send(director);
});

//For allowing new users to register
app.post('/users/register', (req, res) => {
  users.push(req.body);
  res.send('Registeration Successful!');
});
app.get('/users', (req, res) => {
  res.send(users);
});

//For allowing users to update their user info
app.put('/users/update/:id', (req, res) => {
  let userId =  users.findIndex((u)=>u.id==req.params.id);
  res.send(users.slice(userId,1, {...req.body}));
});

//For allowing users to add a movie to their list of favorite movies
app.post('/favourite/add/:id', (req, res) => {
  const user = users.find((u) => u.id ==req.params.id);
  user.favMovies.push(req.body);
  res.send(user);
});

//For allowing users to remove a movie from their list of favorites movies-text
app.delete('/favourite/delete/:id/:title', (req, res) => {
  const user = users.find((u) => u.id ==req.params.id);
  const favs = user.favMovies.filter((m)=>m.title != req.params.title)
  user.favMovies = [...favs];
  res.send(user);
});

//For allowing existing users to deregister-text
app.delete('/users/deregister/:id', (req, res) => {
  res.send(users.filter((m) => m.id !=req.params.id))
});

//Listening requests
app.listen(PORT, () =>{
    console.log(`Your SERVER is listening on port ${PORT}.`);
  });
