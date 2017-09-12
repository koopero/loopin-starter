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

new H.Cursor( {
  listening: true,
  pull: true,
  path: 'logic/scroll',
  onDelta: function( delta ) {
    let names = [ 'lilies_mask_scroll', 'pond_scroll', 'lilies_colour_scroll' ]
    names.map(
      ( name ) => H.root.patch( delta, `loopin/render/${name}` )
    )
  }
})

if ( config.get('debug.verbose') )
  loopin.logShow('patch')

loopin.plugin('bootstrap')
