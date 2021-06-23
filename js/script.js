" use strict";
let NumberOfFilms = +prompt('How many films have you ever seen?',' ');
let personalMovieDB ={
     count:NumberOfFilms,
     movies:{},
     actors:{},
     genres:[],
     privat:false
}; 
let lastFilm_1 = prompt('ожин из последних','');
let rating_1 = prompt('рейтинг','');
let lastFilm_2 = prompt('ожин из последних','');
let rating_2 = prompt('рейтинг','');
personalMovieDB.movies[lastFilm_1]= rating_1;
personalMovieDB.movies[lastFilm_2]= rating_2;     
   

console.log(personalMovieDB);