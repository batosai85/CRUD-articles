import sendData from "./sendData.js";

export default function createCtrl(module){
    module.controller("createCtrl", ["$rootScope", "$scope", "dialog", "$timeout", "$location", "http",
      ($rootScope, $scope, dialog, $timeout, $location, http) => {

            $rootScope.class = "create";

            sendData(http, $rootScope, $scope, dialog, $timeout, $location);  

            $rootScope.$on('$stateChangeStart', () => {
                dialog.close();
            });
    }]);
}