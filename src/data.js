let users = [
    {
      id:1,
      fullname: 'John Doe',
      email: 'johndoe@mail.com',
      favMovies: [{
        title: 'Inception',
        director: 'Christopher Nolan',
        genre: 'Sci-Fi'
      }]
    },
    {
      id:2,
      fullname: 'Jane Doe',
      email: 'janedoe@mail.com',
      favMovies: [{
        title: 'Inception',
        director: 'Christopher Nolan',
        genre: 'Sci-Fi'
      }]
    }
  
  ];
  let movies = [
      {
        title: 'Inception',
        director: 'Christopher Nolan',
        genre: 'Sci-Fi'
      },
      {
        title: 'Lord of the Rings',
        director: 'Peter Jackson',
        genre: 'Super-Heroes'
      },
      {
        title: 'The Matrix',
        director: 'Lana Wachowski',
        genre: 'Sci-fi'
      },
      {
          title: 'The Avengers',
          director: 'Anthony Russo',
          genre: 'Super-Heroes'
        },
        {
          title: 'The Silence Of The Lambs',
          director: 'Jonathan Demme',
          genre: 'Suspense-Thriller'
        },
        {
          title: 'Terminator',
          director: 'James Cameron',
          genre: 'Action'
        },
        {
          title: 'The Prestige',
          director: 'Christopher Nolan',
          genre: 'Suspense-Thriller'
        },
        {
          title: 'Shutter Island',
          director: 'Martin Scorsese',
          genre:'Suspense-Thriller'
        },
        {
          title: 'The Fugitive',
          director: 'Andrew Davis',
          genre: 'Suspense-Thriller'
        },
        {
          title: 'The Shack',
          director: 'Stuart Hazeldine',
          genre: 'Feel-Good'
        }
    ];

    module.exports = {
        users,
        movies
    }