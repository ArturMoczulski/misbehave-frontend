misbehave-frontend
==================

Technology stack
------------------
* angular.js
* bower
* grunt
* twitter bootstrap


Initial Angular setup
---------------------
* What version of angular would you like to use? ~1.3.0
* Which official angular modules would you need? animate, cookies, resource, route, sanitize, touch
* Any third-party component you might require? twbs/bootstrap (^3.0), fortawesome/font-awesome (^4.0), mgcrea/angular-strap (^2.0), mgcrea/angular-motion (^0.3), angular-ui/ui-router (^0.2)
* Should I set up one of those HTML preprocessors for you? jade
* Should I set up one of those JS preprocessors for you? none
* Should I set up one of those CSS preprocessors for you? sass
* Would you want me to support old versions of Internet Explorer (eg. before IE9)? no


Development installation
------------------------
1. Install Node.js and NPM on your environment.
2. `git clone https://github.com/ArturMoczulski/misbehave-frontend && cd misbehave-frontend && npm install && node_modules/.bin/bower install && node_modules/.bin/gulp build && node_modules/.bin/gulp`

Useful vim plugins
------------------
* https://github.com/editorconfig/editorconfig-vim
* https://github.com/digitaltoad/vim-jade


Development conventions
-----------------------
* Test first
* HTML with jade and twitter bootstrap
* use .editorconfig

Using tools
-----------
Please use tools as installed per project instead of your globally installed versions. NPM is the
only exceptions. All the tools binaries will be installed to:
* node_modules/.bin/
