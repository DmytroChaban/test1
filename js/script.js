" use strict";

let personalMovieDB ={
     count:0,
     movies:{},
     actors:{},
     genres:[],
     privat:false,
     start: function () {
               personalMovieDB.count = +prompt('How many films have you ever seen?',' ');
               while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
                    personalMovieDB.count = +prompt('How many films have you ever seen?',' ');

          }
     },
     detectYourpersonallevel: function (){
          if (personalMovieDB.count<= 10) {
                    alert('вы новичок');
               } else if (personalMovieDB.count<30) {
                    alert('вы любитель');
               } else if (personalMovieDB.count>=30) {
                   alert('вы киноман');
               }else {
                    alert('произошла ошибка');
               }
     },
     films: function (){
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
     },
     showMyDB: function (hidden) {
          if (!hidden){
               console.log(personalMovieDB);
          }
     },
     writeYourGenres: function () {
          for(let i = 1; i < 4; i++) {
              
               let question = prompt(`Ваш любимый жанр фильма под номером ${i}`, "");
               if (question == "" || question == null  ) {
                     i--;continue;
               }
               personalMovieDB.genres.push(question);
          };
          personalMovieDB.genres.forEach(function(item, i, arr) {
               i++;
               console.log(`Любимый жанр ${i} - это ${item}`);
          });
     },
     toggleVisibleMyDB: function () {
          personalMovieDB.privat = !personalMovieDB.privat;
     }
}; 
personalMovieDB.start();

personalMovieDB.detectYourpersonallevel();

personalMovieDB.films();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

// function start(){
//      NumberOfFilms = +prompt('How many films have you ever seen?',' ');
//      while (NumberOfFilms == "" || NumberOfFilms == null || isNaN(NumberOfFilms)){
//           NumberOfFilms = +prompt('How many films have you ever seen?',' ');
//      }
// }

// function detectyourpersonallevel() {
//      if (personalMovieDB.count< 10) {
//           alert('вы новичок');
//      } else if (personalMovieDB.count<30) {
//           alert('вы любитель');
//      } else if (personalMovieDB.count>30) {
//           alert('вы киноман');
//      }else {
//           alert('произошла ошибка');
//      }
// }

// function films() {
//      for(let i = 1;i<3;i++) {
//           let lastFilm = prompt('один из последних','');  
    
//          while(true) { 
//               if (lastFilm == '' || lastFilm == null || lastFilm.length>50) {
//                    lastFilm = prompt('Название фильма должно состоять хотя-бы из 1 символа и не больше 50','');              
//               } else {break;}
//          };
    
//          let rating = prompt('рейтинг','');
         
//          while(true) { 
//                if (rating == '' || rating>10 || rating<1) {
//                        rating = +prompt('рейтинг должен быть от 1 до 10','');              
//               } else {break;}
//          };
//          personalMovieDB.movies[lastFilm] = rating;
//     };
// }

// function showMyDB(hidden) {
//      if (!hidden){
//           console.log(personalMovieDB);
//      }
// }


// function writeYourGenres() {

//      for(let i = 1; i < 4; i++) {
//           let question = prompt(`Ваш любимый жанр фильма под номером ${i}`, "");
//           personalMovieDB.genres.push(question);
//      }
// }
console.log(personalMovieDB);