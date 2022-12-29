"use strict";

var numberOfFilms = +prompt("Скільки фільмів Ви вже подивились?", "");
var personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
console.log(personalMovieDB);
var lastWatchedMovie = prompt("Один з останніх переглянутих фільмів", "");
var estimateMovie = prompt("На скільки оціните його", "");
personalMovieDB.movies[lastWatchedMovie] = estimateMovie;