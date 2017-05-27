export default function Post(http, $scope, $timeout, dialog, $location){
    http.post("/page", {
        page: $scope.category
    }).then((data) => {
        http.get("/page").then((data) => {
            $scope.data = data.data;
            if ($scope.data.length < 1) {
                $scope.loading = true;
                $timeout(() => {
                    dialog.context('There is no articles in this category!');
                }, 400);
                $timeout(() => {
                    $location.path("/");
                }, 1400);
            } else {
                $scope.loading = false;
            }
        }).catch((err) => {});
    }).catch((err) => {});
}