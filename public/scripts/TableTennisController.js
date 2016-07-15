angular.module('olympicPicker').controller('TableTennisController', function($scope, DataService){
  console.log('TableTennisController');
  $scope.data = DataService.data;
});
