// Filter | Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];
let highScores = [];
let highScoreCount;

for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    highScores.push(scores[i]);
  }
  highScoreCount = highScores.length;
}

console.log(highScores);
console.log(highScoreCount);