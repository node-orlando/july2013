var config      = require('yaml-config');
    settings    = config.readConfig(__dirname + '/settings.yml');

// override if provider is setting PORT for us
if (process.env.PORT) {
    settings.port = process.env.PORT;
}

exports.settings = settings;