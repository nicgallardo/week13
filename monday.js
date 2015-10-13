var words = {
  "a": "animal",
  "b": "bart",
  "c": "curling",
  "d": "dino",
  "e": "edamame",
  "f": "flutes",
  "g": "golfing",
  "h": "habit",
  "i": "igloo",
  "j": "jerks",
  "k": "knife",
  "l": "lighter",
  "m": "mud-man",
  "n": "night-light",
  "o": "oops",
  "p": "pizza",
  "q": "quiet",
  "r": "ripped",
  "s": "society",
  "t": "telephone",
  "u": "umbrella",
  "v": "victory",
  "w": "whiskey",
  "x": "x-ray",
  "y": "yellow-belly",
  "z": "zebras"

}
//try to do this wihout for in loop!
exports.backronym = function (string){
  var splitted = string.split("");
  var pushed = [];
  for (var i = 0; i < splitted.length; i++){
    for(var prop in words){
      if(splitted[i] == prop){
        pushed.push(words[prop]);
      }
    }
  }
  return pushed.join(" ");
}
