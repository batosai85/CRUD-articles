export default function sendData(http, $rootScope, $scope, dialog, $timeout, $location){
    $scope.sendData = (data) => {
        if (data.category === undefined || data.category === "") {
            dialog.context('Category must be selected!');
            return false;
        }   
        data.oldHeadline = data.headline;
        data.oldCategory = data.category;
        $rootScope.class = data.category;
        http.post("/articles", data).then((response) => {
            if(response.data !== "error"){ 
                dialog.context('Article created!');
                $scope.data = {};
                $scope.createForm.$setPristine();
                $scope.createForm.$setUntouched();
                $timeout(() => {
                    $location.path("/category/" + data.category)
                }, 1000);
            }else{
                dialog.context('Headline and content must be unique!');
                return false;
            }
        }).catch((err) => {
            dialog.context('error 404!');
        });
    }
}