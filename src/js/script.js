"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have You watched so far?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have You watched so far?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("What is one of the last films You've seen?", ""),
              b = prompt("How whould You score it (from 1 to 10)?", "");
    
        if ((a != null) && (b != null) && (a != '') && (b != '') && (a.length < 50)) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("You've watched not so many movies :(");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classic movie viewer");
    } else if (personalMovieDB.count > 30) {
        console.log("You are a movie lover!");
    } else {
        console.log("Error");
    }
}
// detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite genre number ${i}`);
    }
}
writeYourGenres();