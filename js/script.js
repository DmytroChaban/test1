" use strict";
let NumberOfFilms;
start();
let personalMovieDB ={
     count:NumberOfFilms,
     movies:{},
     actors:{},
     genres:[],
     privat:false
}; 

detectyourpersonallevel();

films();

showMyDB();

writeYourGenres();

function start(){
     NumberOfFilms = +prompt('How many films have you ever seen?',' ');
     while (NumberOfFilms == "" || NumberOfFilms == null || isNaN(NumberOfFilms)){
          NumberOfFilms = +prompt('How many films have you ever seen?',' ');
     }
}

function detectyourpersonallevel() {
     if (personalMovieDB.count< 10) {
          alert('вы новичок');
     } else if (personalMovieDB.count<30) {
          alert('вы любитель');
     } else if (personalMovieDB.count>30) {
          alert('вы киноман');
     }else {
          alert('произошла ошибка');
     }
}

function films() {
     for(let i = 1;i<3;i++) {
          let lastFilm = prompt('один из последних','');  
    
         while(true) { 
              if (lastFilm == '' || lastFilm == null || lastFilm.length>50) {
                   lastFilm = prompt('Название фильма должно состоять хотя-бы из 1 символа и не больше 50','');              
              } else {break;}
         };
    
         let rating = prompt('рейтинг','');
         
         while(true) { 
               if (rating == '' || rating>10 || rating<1) {
                       rating = +prompt('рейтинг должен быть от 1 до 10','');              
              } else {break;}
         };
         personalMovieDB.movies[lastFilm] = rating;
    };
}

function showMyDB(hidden) {
     if (!hidden){
          console.log(personalMovieDB);
     }
}


function writeYourGenres() {

     for(let i = 1; i < 4; i++) {
          let question = prompt(`Ваш любимый жанр фильма под номером ${i}`, "");
          personalMovieDB.genres.push(question);
     }
}
console.log(personalMovieDB);