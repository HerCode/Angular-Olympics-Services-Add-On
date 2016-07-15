angular.module('olympicPicker').controller('GymnasticsController', function($scope, DataService){
  console.log('GymnasticsController On');
  $scope.data = DataService.data;
});
