# ConvertTo-AsciiArt

## Overview
Forked from the [original idea](https://github.com/dabeastnet/ConvertTo-AsciiArt), which I used to customize my terminal profile. I like it, but I'm not much into PowerShell scripting.
<br />
<br />
I've kept the original licenses, since I'm mostly not aware of software distribution rules and law.

## Features
- **Extensibility:** can either be used as a standalone thing, or processed in an external file.
- **Linux support:** successfully tested on Debian 12 and Ubuntu-based WSL.
- **JavaScript:** an opportunity to modify the script using the language you are familiar with.

## Prerequisites
- [NodeJs](https://nodejs.org/en) version `4.9.1` and higher,
- *Optional*: [nvm](https://github.com/nvm-sh/nvm) - node version manager.

## Installation
No specific installation process is needed. I usually retrieve the output like that:
``` JS
const execSync = require('child_process').execSync;
const dec = new TextDecoder("utf-8");

const data = dec.decode(execSync('node convert.js test').buffer);
```

## Usage

### Converting Text to ASCII Art
To convert a simple text string to ASCII art:
```
node convert.js Hello
```
Output will be the ASCII art representation of "Hello":

```
H   H EEEE  L     L      OOO
H   H E     L     L     O   O
HHHHH EEE   L     L     O   O
H   H E     L     L     O   O
H   H EEEE  LLLL  LLLL   OOO
```

### Extended Character Support
Demonstrates converting a string with mixed characters:
```
node convert.js 13375P34K!?
```
Displays ASCII art for each character, including spaces and exclamation marks:

```
  1   3333  3333  77777 55555 PPP   3333  4  4  K  K   !!!   ???
 11       3     3    7  5     P  P      3 4  4  K K    !!!  ?   ?
  1    333   333    7   5555  PPP    333  44444 KK     !!!     ?
  1       3     3  7        5 P         3    4  K K
11111 3333  3333  7     5555  P     3333     4  K  K   !!!    ?
```

## Full special characters list

- `!` Exclamation mark
- `@` At symbol
- `#` Hash (Pound) symbol
- `$` Dollar sign
- `%` Percent sign
- `^` Caret (Circumflex accent)
- `&` Ampersand
- `*` Asterisk
- `(` Open parenthesis
- `)` Close parenthesis
- `-` Hyphen-minus
- `+` Plus sign
- `=` Equal sign
- `[` Open square bracket
- `]` Close square bracket
- `{` Open curly bracket
- `}` Close curly bracket
- `|` Vertical bar
- `;` Semicolon
- `:` Colon
- `"` Double quotation mark
- `'` Single quotation mark (Apostrophe)
- `,` Comma
- `.` Period (Full stop)
- `/` Slash (Forward slash)
- `\` Backslash
- `?` Question mark
- `<` Less-than sign
- `>` Greater-than sign
- `_` Underscore
- `` ` `` Grave accent (Backtick)
- `~` Tilde

## Contributing
Your contributions to enhance functionality, extend character support, or improve documentation are highly appreciated. Feel free to fork the project, implement your changes, and submit a pull request for review.

## License
This project is licensed under the GNU General Public License v3.0 - see the COPYING file for more details.
