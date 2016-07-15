angular.module('olympicPicker').controller('TaeKwonDoController', function($scope, DataService){
  console.log('TaeKwonDoController');
  $scope.data = DataService.data;
});
