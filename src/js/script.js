"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many films have You watched so far?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have You watched so far?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("You've watched not so many movies :(");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are a classic movie viewer");
        } else if (personalMovieDB.count > 30) {
            console.log("You are a movie lover!");
        } else {
            console.log("Error");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Your favourite genre number ${i}`);
            if (genres == null || genres == '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    }
};

personalMovieDB.writeYourGenres();















// function first() {
//     // do something;
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`I learn: ${lang}`);
//     callback();
// }

// learnJS("Javascript", function() {
//     console.log("I've passed this lesson");
// });

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function() {
//         console.log("test");
//     }
// };

// options.makeTest();

// console.log(Object.keys(options).length);

// const {border, bg} = options.colors; // деструктуризация

// console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

// const arr = [111, 25, 13, 48, 245, 16];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// // arr[arr.length] = 0;
// // console.log(arr.length);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for (let value of arr) {
//     console.log(value);
// }

// // arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// let a = 5,
//     b = a;

// b += 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(main) {
//     let objCopy = {};
//     let key;
//     for (key in main) {
//         objCopy[key] = main[key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 12
//     }
// };
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };
// const addCopy = (Object.assign({}, add));
// addCopy.d = 40;
// console.log(addCopy);
// console.log(add);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();
// newArray[0] = "dsfsfsdf";
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet.sort());

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

// const array = ['a', 'b'];

// const newArrray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// let str = "some";
// let strObj = new String(str);
// console.log(typeof(str));
// console.log(typeof(strObj));

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello!");
//     }
// };

// const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
// john.sayHello();