listenDirective.$inject = []

function listenDirective(){
  return {
    scope: {},
    controllerAs: 'vm',
    controller: ['$scope',function($scope){
      $scope.$on('get_items',function(e,data){
        console.log('get_items');
        console.log(data);
      });

      $scope.$on('post_items',function(e,data){
        console.log('post_items');
        console.log(data);
      });
      
    }]
  }
}

module.exports = listenDirective;