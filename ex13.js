word = ["school", "game", "piano", "science", "hotel", "mountain"];
let word2 = word.filter(function(value){
    if (value.length>=6){
        return true;
    }
    else {
        return false;
} })
console.log(word2)
