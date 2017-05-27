export default function Dialog(module){
    module.service("dialog", ["$mdDialog", "$q",  function ($mdDialog, $q){
        this.context =  (message) => {
            return $mdDialog.show($mdDialog.alert().clickOutsideToClose(true).title(message).textContent('').ariaLabel('').ok('Ok!'));
        }
        this.close = () => {
            return $mdDialog.hide();
        }
    }]);
}