angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links, Auth) { 
  var path = $location.path();
  if (path && path !== '/' && path !== '/links') {
    $window.location.href = '/api/links' + path;
  } else {
    if (Auth.isAuth()) {
      Links.fetch()
      .then(function(data) {
        $scope.data = data;
      });
    } else {
      $location.url('/signin');
    }
  }
})
.directive('shortenedlink', function() {
  return {
    templateUrl: 'app/links/shortenedlink.html'
    // template: 'test'
  }
});