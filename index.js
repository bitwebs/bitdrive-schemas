const p = require('path')

const API_VERSION = 0

module.exports = {
  bitdriveSchemaPath: p.join(__dirname, 'schemas', 'bitdrive.proto'),
  messages: require('./lib/messages'),
  Stat: require('./lib/stat'),
  version: API_VERSION
}
