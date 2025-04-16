# ConvertTo-AsciiArt

## Versions

- `main` - the main branch that was froked from the original repos,
- `default` - a NodeJS application that was my original intent,
- `go` - a Go (golang) version of the app.

As I wanted to try something new, I got aware of Go programming language and became fond of it rapidly over time.

## Overview
Forked from the [original idea](https://github.com/dabeastnet/ConvertTo-AsciiArt), which I used to customize my terminal profile. I like it, but I'm not much into PowerShell scripting.
<br />
<br />
I've kept the original licenses, since I'm mostly not aware of software distribution rules and law.

## Features
- **Extensibility:** can either be used as a standalone thing, or processed in an external file.
- **Linux support:** successfully tested on Debian 12 and Ubuntu-based WSL. Can be set up for Apple Mac, I will try it out shortly.
- **Go:** an opportunity to modify the script using the language you are familiar with.

## Prerequisites
- Latest binary file from the `releases` tab.
- *Optional*: [Go toolchain](https://go.dev/doc/install) - a development environment for creating and running go applications.
- *Optional*: [cobra-cli package](https://github.com/spf13/cobra-cli) a dependency module which helped me generate the cli API

## The API
You can use the app by using `asci` command. The main argument is `con` which stands for *convert*. It's fit for me, but you may change it by editing the corresponding property at `app-config.json` file and then rebuilding the project.

Here's how you do that:
- WORK IN PROGRESS

## Installation
No specific installation process is needed. I usually retrieve the output like that:
``` GO
WORK IN PROGRESS
```

## Usage

### Converting Text to ASCII Art
To convert a simple text string to ASCII art:
``` Shell
asci con Hello
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
``` Shell
asci con 13375P34K!?
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
