const loopin = module.exports = require('loopin').global()
const config = require('./config')

// Resolve to project root
const resolve = require('path').resolve.bind( null, __dirname, '..')


loopin.plugin('horten','loopin/')
loopin.plugin('files')
loopin.filesRoot( resolve() )

loopin.plugin('presetDir')
loopin.presetDir( { autoload: true } )

loopin.plugin('shaderDir')
loopin.shaderDir( { autoload: true } )

loopin.plugin('imageDir')
loopin.imageDir( { watch: true, autoload: true } )

loopin.plugin( require('./logic/snapshot' ) )
loopin.plugin( require('./logic/recorder' ) )


if ( config.get('debug.verbose') )
  loopin.logShow('patch')

loopin.plugin( require('loopin-native'), {
  root: resolve('native'),
  useEnv: true
} )

loopin.bootstrap()
.then( function () {
  // Loopin is sucessfully booted!
})
