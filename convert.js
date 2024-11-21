var map = require('./map');

var InputIndex = 2;
var InputText = process.argv[InputIndex] || null;

if (InputText) {
  process.stdout.write(convertToAsciiArt(InputText));
}

/**
 * Convert each character of a string into 5x5 ascii art.
 * @param {string} arg - input text.
 * @returns {string | null} a grid of characters if input is string, otherwise `null`.
 */
function convertToAsciiArt(arg) {
  var sResult = null;

  if ('string' === typeof arg) {
    var text = arg.toUpperCase();

    sResult = '';
    for (var line = 0, lines = 5, LastLine = lines - 1; line < lines; line++) {
      var textLine = '';

      for (var char of text) {
        if (map[char]) {
          var asciiLines = map[char];

          textLine += asciiLines[line] + ' ';
        } else {
          textLine += '     '; // spaces for characters not in map
        }
      }
      sResult += textLine;
      sResult += line === LastLine ? '' : '\n';
    }
  }

  return sResult;
}

module.exports = convertToAsciiArt;
