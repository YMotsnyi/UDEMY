"use strict";

const numberOfFilms = +prompt("Скільки фільмів Ви вже подивились?", "");


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

console.log(personalMovieDB);

const lastWatchedMovie = prompt("Один з останніх переглянутих фільмів", "");
const estimateMovie = prompt("На скільки оціните його", "");


personalMovieDB.movies[lastWatchedMovie] = estimateMovie; 