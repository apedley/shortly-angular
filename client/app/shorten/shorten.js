angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.submit = function() {
    $scope.waiting = true;
    Links.add($scope.urlText)
    .then(function(result) {
      $scope.added = result;
      $scope.waiting = false;
    });
    $scope.urlText = '';
  }
});
