
//Exercise 1: Get the total budget of all movies - need to inogre the tbd movie (Easy)

//Exercise 2: Get the list of action movie (category_name) (Middle)

//Exercise 3: Get all the movie that has the budget > 175.000.000 - need to inogre the tbd movie (Easy)
const moviejson=require('./movie.json');
//console.log(moviejson);

const marvelMovie = moviejson['Marvel Cinematic Universe']
//console.log(marvelMovie);

let moviename=Object.keys(marvelMovie);
console.log(moviename);