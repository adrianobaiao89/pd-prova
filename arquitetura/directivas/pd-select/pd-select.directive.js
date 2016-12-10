(function () {
    'use strict';
    angular.module('pdAppArquitetura').directive('pdSelect',pdSelect)
    function pdSelect() {
        return {
            restrict: 'E',
            templateUrl: 'arquitetura/directivas/pd-select/pd-select.html',
            scope: {
                label: '@',
                provider:'=',
                propriedadeDescricao:'@',
                propriedadeValor:'@',
                colspan:'@'

            },
            link: link
        };
        function link(scope, element, attrs) {
            scope.propriedadeDescricao =  scope.propriedadeDescricao || 'descricao';
            scope.propriedadeValor =  scope.propriedadeValor || 'valor';

            scope.classColspan = 'col-md-'+(scope.colspan || '3')
        }
    }

})();