var app;
(function(){
  app = angular.module('api', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');
    $mdThemingProvider.theme('success-toast');
    $mdThemingProvider.theme('error-toast');
    
    $mdThemingProvider.alwaysWatchTheme(true);
  })  
})();

app.controller('mainController', function($scope, $mdToast){

    $scope.api = api;
    $scope.api.onSuccess('Connecting ....');
    
    });
