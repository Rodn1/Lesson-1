
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели",'');

// alert(numberOfFilms);
const personalMovieDB  = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a= prompt('Один из просмотренный фильмов?',''),
    b= prompt('На сколько вы его оценили?',''),
    c=prompt('Один из просмотренный фильмов?',''),
    d= prompt('На сколько вы его оценили?','');


personalMovieDB.movies[a]= b;
personalMovieDB.movies[c]= d;
console.log(personalMovieDB);

