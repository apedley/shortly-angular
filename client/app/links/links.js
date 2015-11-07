angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links) {
  var path = $location.path();
  if (path && path !== '/') {
    $window.location.href = '/api/links' + path;
  } else {

    Links.fetch()
    .then(function(data) {
      $scope.data = data;
    });
  }
});