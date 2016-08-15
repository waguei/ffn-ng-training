/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("angular.module('app',[])\r\n.service('$api',__webpack_require__(5))\r\n.directive('listing',__webpack_require__(4))\r\n.directive('listen',__webpack_require__(6));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/app.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/app.js?");

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	eval("listingDirective.$inject = ['$api']\r\n\r\nfunction listingDirective($api){\r\n  return {\r\n    templateUrl: 'listing.html',\r\n    controllerAs: 'vm',\r\n    controller: ['$scope',function($scope){\r\n      var vm = this;\r\n\r\n      vm.item = {name:\"\",price:0};\r\n\r\n      vm.items = [];\r\n\r\n      vm.submit = function(){\r\n        $api.postItem(vm.item).then(function(items){\r\n          vm.items = items;\r\n          vm.item = {name:\"\",price:0};\r\n        });\r\n      }\r\n\r\n      $api.getItem().then(function(items){\r\n        vm.items = items;\r\n      });\r\n      \r\n    }]\r\n  }\r\n}\r\n\r\nmodule.exports = listingDirective;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/listing.directive.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/listing.directive.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("apiService.$inject = ['$http','$rootScope']\n\nfunction apiService($http,$rootScope){\n  var $api = this;\n  \n  $api.getItem = function(){\n    return $http.get('/api/items').then(function(res){\n      $rootScope.$broadcast('get_items',res.data);\n      return res.data;\n    })\n  }\n  \n  $api.postItem = function(item){\n    return $http.post('/api/items',item).then(function(res){\n      $rootScope.$broadcast('post_items',res.data);\n      return res.data;\n    })\n  }\n\n}\n\nmodule.exports = apiService;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/api.service.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/api.service.js?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("listenDirective.$inject = []\n\nfunction listenDirective(){\n  return {\n    scope: {},\n    controllerAs: 'vm',\n    controller: ['$scope',function($scope){\n      $scope.$on('get_items',function(e,data){\n        console.log('get_items');\n        console.log(data);\n      });\n\n      $scope.$on('post_items',function(e,data){\n        console.log('post_items');\n        console.log(data);\n      });\n      \n    }]\n  }\n}\n\nmodule.exports = listenDirective;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/listen.directive.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/listen.directive.js?");

/***/ }
/******/ ]);