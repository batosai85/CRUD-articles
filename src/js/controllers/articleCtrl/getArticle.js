export default function getArticle(http, $scope, $location, $stateParams, dialog){
    http.get("/article").then((data) => {
        $scope.data = data.data;
        if ($scope.data.length < 1) {
            $scope.loading = true;
            $location.path("/articles/" + $stateParams.category);
        } else {
            $scope.loading = false;
        }
    }).catch((err) => {
        dialog.context('error 404!');
    });
}