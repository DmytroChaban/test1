" use strict";
let NumberOfFilms = +prompt('How many films have you ever seen?',' ');

let personalMovieDB ={
     count:NumberOfFilms,
     movies:{},
     actors:{},
     genres:[],
     privat:false
}; 

if (personalMovieDB.count< 10){
     alert('вы новичок');
} else if (personalMovieDB.count<30){
     alert('вы любитель');
} else if (personalMovieDB.count>30) {
     alert('вы киноман');
}else {
     alert('произошла ошибка');
}

for(let i = 1;i<3;i++) {
      let lastFilm = prompt('один из последних','');  

     while(true) { 
          if (lastFilm == '' || lastFilm == null || lastFilm.length>50) {
               lastFilm = prompt('Название фильма должно состоять хотя-бы из 1 символа и не больше 50','');              
          } else {break;}
     };

     let rating = prompt('рейтинг','');
     
     while(true){ 
           if (rating == '' || rating>10 || rating<1) {
                   rating = +prompt('рейтинг должен быть от 1 до 10','');              
          } else {break;}
     };
     personalMovieDB.movies[lastFilm] = rating;
};

    
   

console.log(personalMovieDB);