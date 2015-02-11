var TelUI = require('@telogical/telui-core');

TelUI.Appearances.button = require('./appearances/button')(TelUI);
TelUI.Button = require('./widgets/button')(TelUI);

module.exports = TelUI;