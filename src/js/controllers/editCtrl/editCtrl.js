import getArticle from "./getArticle.js";
import editArticle from "./editArticle.js";

export default function editCtrl(module){
    module.controller("editCtrl", ["$rootScope", "$scope", "dialog", "$window", "$location", "$timeout", "http", "$stateParams",
      ($rootScope, $scope, dialog, $window, $location, $timeout, http, $stateParams) => {
            $scope.loading = true;
            $rootScope.class = $stateParams.category;

            getArticle(http, $scope, dialog);
            editArticle(http, $scope, dialog, $timeout, $location)
          
            $rootScope.$on('$stateChangeStart', () => {
                dialog.close();
            });
    }]);
}