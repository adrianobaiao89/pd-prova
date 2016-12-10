angular.module('pdApp').filter('maiusculo',maiusculo);
function maiusculo() {
    return function (input) {
        if(!input){
            return'';
        }
        return input.toUpperCase();
    }

}