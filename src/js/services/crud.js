export default function Crud(module){
    module.service("http", ["$http", function ($http) {
        this.get = function (url) {
            return $http.get(url);
        }
        this.post = (url, data) => {
            return $http({
                method: "POST",
                url: url,
                data: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        this.put =  (url, data) => {
            return $http({
                method: "PUT",
                url: url,
                data: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        this.delete =  (url, data) => {
            return $http({
                method: "DELETE",
                url: url,
                data: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
    }]);
}