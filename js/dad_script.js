/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

" use strict";

let NumberOfFilms=0;

let personalMovieDB ={
     count:NumberOfFilms,
     movies:{},
     actors:{},
     genres:[],
     privat:false,

     start: function() {
        NumberOfFilms = +prompt('How many films have you ever seen?',' ');
        while (NumberOfFilms == "" || NumberOfFilms == null || isNaN(NumberOfFilms)){
               NumberOfFilms = +prompt('How many films have you ever seen?',' ');
        }
        this.count = NumberOfFilms;
   },
   
   detectYourPersonalLevel: function () {
        if (this.count< 10) {
             alert('вы новичок');
        } else if (this.count<30) {
             alert('вы любитель');
        } else if (this.count>=30) {
             alert('вы киноман');
        }else {
             alert('произошла ошибка');
        }
   },
   
   films: function () {
        for (let i = 1; i<3; i++) {
             let lastFilm = prompt('один из последних','');  
       
            while(true) { 
                 if (lastFilm == '' || lastFilm == null || lastFilm.length>50) {
                      lastFilm = prompt('Название фильма должно состоять хотя-бы из 1 символа и не больше 50','');              
                 } else {break;}
            }
       
            let rating = prompt('рейтинг','');
            
            while(true) { 
                  if (rating == '' || rating>10 || rating<1) {
                          rating = +prompt('рейтинг должен быть от 1 до 10','');              
                 } else {break;}
            }
            personalMovieDB.movies[lastFilm] = rating;
       }
   },
   
   showMyDB: function (hidden) {
        if (!hidden){
             console.log(personalMovieDB);
        }
   },
   
   toggleVisibleMyDB: function () {
        this.privat = !this.privat
   },
   
   writeYourGenres: function () {   
        for(let i = 1; i < 4; i++) {
             let question = prompt(`Ваш любимый жанр фильма под номером ${i}`, "");
             if (question=='' || question==null) {i--; continue;}
             personalMovieDB.genres.push(question);
        };
        this.genres.forEach(function(item,i,arr) {
             console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
   }
   
}; 

personalMovieDB.start();

personalMovieDB.detectYourPersonalLevel();

personalMovieDB.films();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

console.log(personalMovieDB);
