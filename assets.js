/**
 * New node file
 */

module.exports = function(assets) {
  assets.root = __dirname + '/public';
  
  assets.addJs('/bower_components/jquery/dist/jquery.min.js');
  assets.addJs('/bower_components/underscore/underscore-min.js');
  assets.addJs('/bower_components/angular/angular.min.js');
  assets.addJs('/bower_components/angular-bootstrap/ui-bootstrap.min.js');
  assets.addJs('/bower_components/angular-ui-router/release/angular-ui-router.min.js');

  assets.addJs('/js/**'); //adds all files in /public/js (subdirectories included) 
  
  assets.addCss('/stylesheets/**'); //adds all css files in /public 
  
};
