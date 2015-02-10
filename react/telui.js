var TelUI = require('@telogical/telui-core');

TelUI.Appearances.button = require('./appearances/button')(TelUI);
TelUI.Button = require('./widgets/button')(TelUI);

console.log('btn', TelUI.Appearances);

module.exports = TelUI;