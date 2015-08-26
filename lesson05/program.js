var through = require('through2');
var split = require('split');

var oddLine = true;
var makeUpper = function (buffer, _, next) {
  var line = oddLine
    ? buffer.toString().toLowerCase()
    : buffer.toString().toUpperCase();
  this.push(line + '\n');
  oddLine = !oddLine;
  next();
};

process.stdin
  .pipe(split())
  .pipe(through(makeUpper))
  .pipe(process.stdout);
