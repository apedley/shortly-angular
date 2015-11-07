angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.isAuth = Auth.isAuth();
  if (!Auth.isAuth()) {
    $location.url('/signin');
  }
  $scope.submit = function() {
    if($scope.linkForm.$valid) {
      $scope.waiting = true;
      Links.add($scope.urlText)
      .then(function(result) {
        $scope.added = result;
        $scope.waiting = false;
      });
      $scope.urlText = '';
    }
  }
});
