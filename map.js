const AsciiCharacterMap = {
  A: ['  A  ', ' A A ', 'AAAAA', 'A   A', 'A   A'],

  B: ['BBBB ', 'B   B', 'BBBB ', 'B   B', 'BBBB '],

  C: [' CCC ', 'C   C', 'C    ', 'C   C', ' CCC '],

  D: ['DDD  ', 'D  D ', 'D   D', 'D  D ', 'DDD  '],

  E: ['EEEE ', 'E    ', 'EEE  ', 'E    ', 'EEEE '],

  F: ['FFFF ', 'F    ', 'FFF  ', 'F    ', 'F    '],

  G: [' GGG ', 'G    ', 'G GG ', 'G  G ', ' GGG '],

  H: ['H   H', 'H   H', 'HHHHH', 'H   H', 'H   H'],

  I: [' III ', '  I  ', '  I  ', '  I  ', ' III '],

  J: ['   JJ', '    J', '    J', 'J   J', ' JJJ '],

  K: ['K  K ', 'K K  ', 'KK   ', 'K K  ', 'K  K '],

  L: ['L    ', 'L    ', 'L    ', 'L    ', 'LLLL '],

  M: ['M   M', 'MM MM', 'M M M', 'M   M', 'M   M'],

  N: ['N   N', 'NN  N', 'N N N', 'N  NN', 'N   N'],

  O: [' OOO ', 'O   O', 'O   O', 'O   O', ' OOO '],

  P: ['PPP  ', 'P  P ', 'PPP  ', 'P    ', 'P    '],

  Q: [' QQQ ', 'Q   Q', 'Q Q Q', 'Q  QQ', ' QQQQ'],

  R: ['RRR  ', 'R  R ', 'RRR  ', 'R R  ', 'R  R '],

  S: [' SSS ', 'S    ', ' SSS ', '    S', 'SSSS '],

  T: ['TTTTT', '  T  ', '  T  ', '  T  ', '  T  '],

  U: ['U   U', 'U   U', 'U   U', 'U   U', ' UUU '],

  V: ['V   V', 'V   V', 'V   V', ' V V ', '  V  '],

  W: ['W   W', 'W   W', 'W W W', 'WW WW', 'W   W'],

  X: ['X   X', ' X X ', '  X  ', ' X X ', 'X   X'],

  Y: ['Y   Y', ' Y Y ', '  Y  ', '  Y  ', '  Y  '],

  Z: ['ZZZZZ', '   Z ', '  Z  ', ' Z   ', 'ZZZZZ'],

  ' ': ['     ', '     ', '     ', '     ', '     '],
  0: [' 000 ', '0   0', '0   0', '0   0', ' 000 '],

  1: ['  1  ', ' 11  ', '  1  ', '  1  ', '11111'],

  2: [' 222 ', '2   2', '   2 ', ' 2   ', '22222'],

  3: ['3333 ', '    3', ' 333 ', '    3', '3333 '],

  4: ['4  4 ', '4  4 ', '44444', '   4 ', '   4 '],

  5: ['55555', '5    ', '5555 ', '    5', '5555 '],

  6: [' 666 ', '6    ', '6666 ', '6   6', ' 666 '],

  7: ['77777', '   7 ', '  7  ', ' 7   ', '7    '],

  8: [' 888 ', '8   8', ' 888 ', '8   8', ' 888 '],

  9: [' 999 ', '9   9', ' 9999', '    9', ' 999 '],

  '!': [' !!! ', ' !!! ', ' !!! ', '     ', ' !!! '],

  '@': [' @@@ ', '@   @', '@ @@@', '@    ', ' @@@@'],

  '#': [' # # ', '#####', ' # # ', '#####', ' # # '],

  $: [' $$$ ', '$    ', ' $$$ ', '    $', ' $$$ '],

  '%': ['%   %', '   % ', '  %  ', ' %   ', '%   %'],

  '^': [' ^^^ ', '^   ^', '     ', '     ', '     '],

  '&': [' &   ', '& &  ', ' & & ', '&  & ', ' &&& '],

  '*': ['     ', '*   *', ' *** ', '*   *', '     '],

  '(': ['  (  ', ' (   ', '(    ', ' (   ', '  (  '],

  ')': ['  )  ', '   ) ', '    )', '   ) ', '  )  '],

  '-': ['     ', '     ', '-----', '     ', '     '],

  '+': ['     ', '  +  ', '+++++', '  +  ', '     '],

  '=': ['     ', '=====', '     ', '=====', '     '],

  '[': [' [[  ', ' [   ', ' [   ', ' [   ', ' [[  '],

  '],': ['  ]] ', '   ] ', '   ] ', '   ] ', '  ]] '],

  '{': ['  {{ ', ' {   ', '{{   ', ' {   ', '  {{ '],

  '}': [' }}  ', '   } ', '   }}', '   } ', ' }}  '],

  '|': ['  |  ', '  |  ', '  |  ', '  |  ', '  |  '],
  ';': ['     ', '  ;  ', '     ', '  ;  ', ' ;   '],

  ':': ['     ', '  :  ', '     ', '  :  ', '     '],

  '"': [' `"`" ', ' `"`" ', '     ', '     ', '     '],

  "'": ["  '  ", " '   ", '     ', '     ', '     '],

  ',': ['     ', '     ', '     ', '  ,  ', ' ,   '],

  '.': ['     ', '     ', '     ', '     ', '  .  '],

  '/': ['    /', '   / ', '  /  ', ' /   ', '/    '],

  '\\': ['\\    ', ' \\   ', '  \\  ', '   \\ ', '    \\'],

  '?': [' ??? ', '?   ?', '   ? ', '     ', '  ?  '],

  '<': ['   < ', '  <  ', ' <   ', '  <  ', '   < '],

  '>': [' >   ', '  >  ', '   > ', '  >  ', ' >   '],

  _: ['     ', '     ', '     ', '     ', '_____'],

  '`': [' `   ', '  `  ', '     ', '     ', '     '],

  '~': [' ~ ~ ', '~ ~ ~', ' ~ ~ ', '     ', '     '],
};

module.exports = AsciiCharacterMap;