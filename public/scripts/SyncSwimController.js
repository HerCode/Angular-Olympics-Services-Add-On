angular.module('olympicPicker').controller('SyncSwimController', function($scope, DataService){
  console.log('SyncSwimController');
  $scope.data = DataService.data;
});
