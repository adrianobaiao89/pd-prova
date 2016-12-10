(function () {
    'use strict';

    angular.module('pdAppArquitetura')
        .directive('pdCrud', pdCrud);

    function pdCrud(AlertService) {
        return {
            restrict: 'E',
            templateUrl: 'arquitetura/directivas/pd-crud/pd-crud.html',
            transclude: true,
            scope: {
                titulo:'@',
                salvar:'&',
                limpar:'&',
                excluir:'&',
                exibirBotaoExcluir:'='
            },
            link: link
        };

        function link(scope, element, attrs) {
            scope.formName = 'pdCrudForm' + scope.$id;

            iniciar();

            function iniciar() {
                if(!attrs.salvar){
                    AlertService.error('Programador, você não informou a função salvar');
                }
            }
        }
    }
})();