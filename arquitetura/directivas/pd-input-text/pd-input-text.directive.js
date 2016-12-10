(function () {
    'use strict';
    angular.module('pdAppArquitetura').directive('pdInputText',pdInputText)
    function pdInputText() {
        return {
            restrict: 'E',
            templateUrl: 'arquitetura/directivas/pd-input-text/pd-input-text.html',
            scope: {
                label: '@',
                placeholder: '@',
                ngModel: '=',
                colspan: '@'
            },
            link: link
        };
        function link(scope, element, attrs) {
            scope.idInputText = 'pdInputText'+scope.$id;
            scope.classColspan = 'col-md-'+(scope.colspan || '3')
        }
    }

})();