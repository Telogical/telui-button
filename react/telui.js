global.UI = global.UI || require('@telogical/telui-core');

global.UI.Appearances.button = require('./appearances/button')(global.UI);
global.UI.button = require('./widgets/button')(global.UI);

module.exports = global.UI;