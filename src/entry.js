
export function Entry(title,body){
  this.title= title;
  this.body= body;
  this.allWords = this.title + " — " + this.body;
}
Entry.prototype.countWords = function(){
  var words = this.allWords.split(' ').length - 1;
  return "There are "+words+" words in this entry";
};
Entry.prototype.countVowelsConsonants = function(){
  var vowels = this.allWords.match(/[aeiou]/gi).length;
  var consonants = this.allWords.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gi).length;
  var count = "There are " + vowels + " vowels and " + consonants + " consonants in this entry.";
  return count;
};
Entry.prototype.getTeaser = function(){
  var teaser = this.allWords.split(" ");
  return teaser.slice(0,8).join(" ") + "...";
};
