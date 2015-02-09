require('@telogical/telui-core');

global.UI.Appearances.button = require('./appearances/button')(global.UI);
global.UI.Button = require('./widgets/button')(global.UI);

console.log('btn', global.UI.Appearances);

module.exports = global.UI;