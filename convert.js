var map = require('./map');

var InputIndex = 2;
var InputText = process.argv[InputIndex] || null;

if (InputText) {
  process.stdout.write(convertToAsciiArt(InputText));
}

function convertToAsciiArt(arg) {
  var sResult = null;

  if ('string' === typeof arg) {
    var text = arg.toUpperCase();

    sResult = '';
    for (var line = 0, lines = 5; line < lines; line++) {
      var textLine = '';

      for (var char of text) {
        if (map[char]) {
          var asciiLines = map[char];

          textLine += asciiLines[line] + '  ';
        } else {
          textLine += '     '; // spaces for characters not in map
        }
      }
      sResult += textLine + '\n';
    }
  }

  return sResult;
}
