angular.module('app',[])
.service('$api',require('./api.service'))
.directive('listing',require('./listing.directive'))
.directive('listen',require('./listen.directive'));