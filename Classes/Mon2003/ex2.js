const game = {
  title: "Football Manager",
  description: "Football club management simulation",
  rating: 9.5,
  alreadyPlay: true,
};
const game2 = {
  title: "Volleyball Manager",
  description: "Volleyball club management simulation",
  rating: 7.5,
  alreadyPlay: false,
};
const game3 = {
  title: "Basketball Manager",
  description: "Basketball club management simulation",
  rating: 6.5,
  alreadyPlay: true,
};
const game4 = {
  title: "Tennis Manager",
  description: "Tennis club management simulation",
  rating: "7.5",
  alreadyPlay: false,
};
const games = [game, game2, game3, game4];
let totalRating=0;
for (let index = 0; index < games.length; index++) {
  const game = games[index];
  const description = game.description;
  const rating = game.rating;
  const subject = game.title;
  const alreadyplayflag = game.alreadyPlay;
  totalRating = totalRating + rating;
  console.log(subject + " -" + description + " -" + rating);

  if (alreadyplayflag) {
    console.log("You alrady play " + subject);
    console.log();
  } else {
    console.log("You still need to play " + subject);
    console.log();
  }
}
console.log(totalRating);
