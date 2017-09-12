const loopin = module.exports = require('loopin').global()
const config = require('./config')

loopin.plugin('horten','loopin/')
loopin.plugin('files')
loopin.filesRoot( require('path').resolve( __dirname, '..' ) )

loopin.plugin('presetDir')
loopin.presetDir( { autoload: true })

loopin.plugin('shaderDir')
loopin.shaderDir()

loopin.plugin('imageDir')
loopin.imageDir()

loopin.plugin( require('./logic/snapshot' ) )

if ( config.get('debug.verbose') )
  loopin.logShow('patch')

loopin.plugin('bootstrap')

// This will be the new way!
// loopin.plugin( require('loopin-native'), {} )
