

export function Journal(title, body) {
  this.title = title,
  this.body = body,
  this.vowel = 0,
  this.consonant = 0,
  this.word = 0,
  this.totalWords = "",
  this.teaser = ""
}

Journal.prototype.combineWords = function() {
  this.totalWords = this.title.concat(this.body);
}

Journal.prototype.countWords = function() {
  this.totalWords.split(" ");
  this.word = this.totalWords.length;
}

Journal.prototype.countCharacters = function() {
  var checkVowels = this.totalWords.split("");
  //console.log(checkVowels);
  for (var i=0; i<checkVowels.length; i++) {
    if ( checkVowels[i] === "a" || checkVowels[i] === "A" || checkVowels[i] === "e" || checkVowels[i] === "E" || checkVowels[i] === "i" || checkVowels[i] === "I" || checkVowels[i] === "o" || checkVowels[i] === "O" || checkVowels[i] === "u" || checkVowels[i] === "U") {
      this.vowel += 1;
    } else {
      this.consonant += 1;
    }
  } 
}

Journal.prototype.getTeaser = function() {
  this.teaser = this.body.split(".");
  var firstSentence = this.teaser[0];
  var splitFirstSentence = firstSentence.split(" ");
  if (splitFirstSentence.length >= 8) {
    this.splitFirstSentence = splitFirstSentence.slice(0, 8).join(" ");
    this.teaser = this.splitFirstSentence;
  }else {
    this.teaser = this.teaser[0];
  } 
}