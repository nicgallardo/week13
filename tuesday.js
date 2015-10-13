
exports.convert = function (number){
  var pushed = []
  var numbStringSplit = number.toString().split("").reverse();
  if (numbStringSplit.length == 0 && numbStringSplit[0] == 0){
    return null;
  } else {
  for(var i = 0; i < 1; i++){
    if(numbStringSplit[0] == 1){
      pushed.push(1)
    }
    if(numbStringSplit[1] == 1){
      pushed.push(2)
    }
    if(numbStringSplit[2] == 1){
      pushed.push(4)
    }
    if(numbStringSplit[3] == 1){
      pushed.push(8)
    }
    if(numbStringSplit[4] == 1){
      pushed.push(16)
    }
    if(numbStringSplit[5] == 1){
      pushed.push(32)
    }
    if(numbStringSplit[6] == 1){
      pushed.push(64)
    }
    if(numbStringSplit[7] == 1){
      pushed.push(128)
    }
    if(numbStringSplit[8] == 1){
      pushed.push(256)
    }
    if(numbStringSplit[9] == 1){
      pushed.push(512)
    }
  }

    return pushed.reduce(function(prev, curr){
      return prev + curr;
    })
  }
}
