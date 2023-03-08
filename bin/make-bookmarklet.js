/**
 * Read a JS script from stdin and outputs it as a bookmarklet:
 *    javascript:<code>>
 * where code is
 *    (function(){ <stdin> })();)()
 * already encoded for URIs
 */
const fs = require('fs');
const code = fs.readFileSync(0).toString()
// https://github.com/caiorss/bookmarklet-maker/blob/master/index.html
var bookmarklet = 'javascript:' +  encodeURIComponent('(function(){' + code +  '})();');
console.log(bookmarklet);