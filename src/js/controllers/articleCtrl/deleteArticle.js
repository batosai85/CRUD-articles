export default function deleteArticle(http, $scope, dialog, $timeout, $location, $stateParams){
    $scope.delete = (data) => {
        http.delete("/articles", data).then((data) => {
            dialog.context('Article deleted');
            $timeout(() => {
                $location.path("/category/" + $stateParams.category);
            }, 1000);
        }).catch((err) => {
            dialog.context('error 404!');
        });
    }
}