listingDirective.$inject = ['$api']

function listingDirective($api){
  return {
    templateUrl: 'listing.html',
    controllerAs: 'vm',
    controller: ['$scope',function($scope){
      var vm = this;

      vm.item = {name:"",price:0};

      vm.items = [];

      vm.submit = function(){
        $api.postItem(vm.item).then(function(items){
          vm.items = items;
          vm.item = {name:"",price:0};
        });
      }

      $api.getItem().then(function(items){
        vm.items = items;
      });
      
    }]
  }
}

module.exports = listingDirective;