export default function editArticle(http, $scope, dialog, $timeout, $location){
    $scope.sendData = (data) => {
        let url = data.category;
        if (data.category === undefined || data.category === "") {
            dialog.context('Category must be selected!');
            return false;
        }
        http.put("/articles", data).then((result) => {
            if(result.data !== "error"){
                dialog.context('Article edited!');
                $scope.data = {};
                $scope.editForm.$setPristine();
                $scope.editForm.$setUntouched();
                $timeout(() => {
                    $location.path("/category/" + url);
                }, 1200);
            }else{
                dialog.context('Headline and content must be unique!');
                return false;                             
            }
        }).catch((err) => {
            dialog.context('Error 404!');
        });
    }
}