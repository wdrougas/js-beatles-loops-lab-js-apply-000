function theBeatlesPlay(musicians, instruments) {
  var phrases = []
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i])
  }
  return phrases
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += "!!!"; i++;
  }
  return array
}

function iLoveTheBeatles(num) {
  var phrases = []
  do { 
    phrases.push("I love the Beatles!"); num++;
} 
while (num < 15);
return phrases
}
