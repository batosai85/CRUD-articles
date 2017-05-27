export default function getArticle(http, $scope, dialog){
    http.get("/articles").then((data) => {
        $scope.check = data.data;
        http.get("/article").then((data) => {
            $scope.data = data.data;
            $scope.loading = false;
        }).catch((err) => {
            dialog.context('No article selected!');
        });
    }).catch((err) => {
        dialog.context('Error 404!');
    });
}