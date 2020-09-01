const numberOfFilms = +prompt("How many films have You watched so far?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What is one of the last films You've seen?", ""),
      b = prompt("How whould You score it (from 1 to 10)?", ""),
      c = prompt("What is one of the last films You've seen?", ""),
      d = prompt("How whould You score it (from 1 to 10)?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);