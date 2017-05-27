import getArticle from "./getArticle.js";
import deleteArticle from "./deleteArticle.js";

export default function articleCtrl(module){
    module.controller("articleCtrl", ["$rootScope", "$scope", "dialog", "$location", "$stateParams", "$timeout", "http",
      ($rootScope, $scope, dialog, $location, $stateParams, $timeout, http) => {

            $rootScope.class = $stateParams.category;
            $scope.loading = true;

            getArticle(http, $scope, $location, $stateParams, dialog);
            deleteArticle(http, $scope, dialog, $timeout, $location, $stateParams);

            $rootScope.$on('$stateChangeStart', () => {
                dialog.close();
            });
    }]);
}