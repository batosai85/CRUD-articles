import createCtrl from "./createCtrl/createCtrl.js";
import editCtrl from "./editCtrl/editCtrl.js";
import categoryCtrl from "./categoryCtrl/categoryCtrl.js";
import articleCtrl from "./articleCtrl/articleCtrl.js";

export default function Controllers(module){

    module.controller("indexCtrl", ["$rootScope", "$scope", "$stateParams",
        ($rootScope, $scope, $stateParams) => {}]);
    module.controller("homeCtrl", ["$rootScope", "$scope", ($rootScope, $scope) => {
        $rootScope.class = "home";}]);
    
    createCtrl(module);
    editCtrl(module);
    categoryCtrl(module);
    articleCtrl(module);
}