import Post from "./post.js";
import Read from "./read.js";

export default function categoryCtrl(module){
    module.controller("categoryCtrl", ["$rootScope", "$scope", "$stateParams", "$window", "$location", "$timeout", "dialog", "http",
      ($rootScope, $scope, $stateParams, $window, $location, $timeout, dialog, http) => {

          $rootScope.class = $stateParams.category;
          $scope.category = $stateParams.category;
          $scope.loading = true;

          Post(http, $scope, $timeout, dialog, $location);
          Read(http, $scope, $location, dialog);

          $rootScope.$on('$stateChangeStart', () => {
              dialog.close();
          });
      }]);
}