" use strict";
let NumberOfFilms = +prompt('How many films have you ever seen?',' ');
let personalMovieDB ={
     count:NumberOfFilms,
     movies:{},
     actors:{},
     genres:[],
     privat:false
}; 
// let lastFilm_1 = prompt('один из последних','');
// let rating_1 = prompt('рейтинг','');
// let lastFilm_2 = prompt('один из последних','');
// let rating_2 = prompt('рейтинг','');
// personalMovieDB.movies[lastFilm_1]= rating_1;
// personalMovieDB.movies[lastFilm_2]= rating_2;     

for (let i=1; i<3; i++) {
     let lastFilm = prompt('Один из последних','');     
     let rating = prompt('рейтинг','');
     if (lastFilm == '' || lastFilm.length>50 || lastFilm==null || rating==null || rating == '' || rating.length>50) {
          i--; continue;
     };
     personalMovieDB.movies[lastFilm]= rating;
}

console.log(personalMovieDB);