var Sentence = function (sentence) {
  this.sentence = sentence;

  this.reverse = function () {
    return this.sentence.split(' ').reverse().join(' ');
  }
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var sentence = new Sentence(line.trim());
        console.log(sentence.reverse());
    }
});