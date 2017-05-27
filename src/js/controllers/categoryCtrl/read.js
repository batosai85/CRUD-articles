export default function Read(http, $scope, $location, dialog){
    $scope.read = (data) => {
        let url = data.category + "/" + data.headline;
        let sendData = {
            category: data.category,
            headline: data.headline
        }
        http.post("/article", sendData).then((data) => {
            $location.path("/article/" + url);
        }).catch((err) => {
            dialog.context('error 404!');
        });
    }
}