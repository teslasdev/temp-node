// Modules

// Every Single file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./1-name')
const sayHi = require('./2-utils')
const data = require('./3-alternative')


sayHi('susan')
sayHi(names.john);
sayHi(names.peter);
