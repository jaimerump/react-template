
// Attach all routes to server
module.exports = function(server) {

  require('fs').readdirSync(__dirname).forEach( function( filename ) {

    // Attach routes
    if( filename != 'index.js' ) {
      require(`./${filename}`)(server);
    }
    
  }); // require('fs')

}
