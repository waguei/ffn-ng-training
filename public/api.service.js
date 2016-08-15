apiService.$inject = ['$http','$rootScope']

function apiService($http,$rootScope){
  var $api = this;
  
  $api.getItem = function(){
    return $http.get('/api/items').then(function(res){
      $rootScope.$broadcast('get_items',res.data);
      return res.data;
    })
  }
  
  $api.postItem = function(item){
    return $http.post('/api/items',item).then(function(res){
      $rootScope.$broadcast('post_items',res.data);
      return res.data;
    })
  }

}

module.exports = apiService;