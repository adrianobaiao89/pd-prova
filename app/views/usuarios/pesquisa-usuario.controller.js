angular.module('pdApp')
    .controller('CadastroUsuariosController', CadastroUsuariosController);
CadastroUsuariosController.$inject = ['$scope', 'AlertService', '$filter', '$rootScope', '$state'];
function CadastroUsuariosController($scope, AlertService, $filter, $rootScope, $state) {
    var index = 0;
    $rootScope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.editar = editar;
    $scope.visualizar = visualizar;

    iniciar();

    function iniciar() {
        if (!$rootScope.listaUsuarios) {
            $rootScope.listaUsuarios = [];
        }
        $scope.listaUsuarios = $rootScope.listaUsuarios;
    }

    $scope.gridOptions = {
        columnDefs: [
            {name: 'Codigo', field: 'codigoUsuario'},
            {name: 'Nome', field: 'nomeUsuario'},
            {name: 'E-Mail', field: 'emailUsuario'},
            {name: 'Login', field: 'loginUsuario'},
            {name: 'Ações', field: 'acoes', cellTemplate: 'app/template/grid/cell-template-acoes.html', width: 140}
        ],
        data: 'listaUsuarios',
        enableColumnMenus: false
    };


    function salvar() {

        if ($scope.usuarioForm.$invalid) {
            if ($scope.usuarioForm.senhaUsuario !== $scope.usuarioForm.confirmaSenhaUsuario) {
                $scope.usuarioForm.senhaUsuario.$setTouched();
                $scope.usuarioForm.confirmaSenhaUsuario.$setTouched();
                AlertService.error('Senha inválida');
                return;
            }
            $scope.usuarioForm.codigoUsuario.$setTouched();
            $scope.usuarioForm.nomeUsuario.$setTouched();
            $scope.usuarioForm.emailUsuario.$setTouched();
            $scope.usuarioForm.loginUsuario.$setTouched();
            $scope.usuarioForm.senhaUsuario.$setTouched();
            $scope.usuarioForm.confirmaSenhaUsuario.$setTouched();
            AlertService.error('Formulário inválido');
            return;

        }

        if ($scope.entidade.id == null) {
            $scope.entidade.id = index++;
            $scope.listaUsuarios.push($scope.entidade);
        } else {
            for (i in $scope.listaUsuarios) {
                if ($scope.listaUsuarios[i].id == $scope.entidade.id) {
                    $scope.listaUsuarios[i] = $scope.entidade;
                }
            }
        }
        $scope.entidade.nomeUsuario = $filter('maiusculo')($scope.entidade.nomeUsuario);
        $scope.entidade.nomeEstado = $filter('maiusculo')($scope.entidade.nomeEstado);
        AlertService.success('Registro salvo com sucesso');
        limpar();

    }

    function limpar() {
        $scope.entidade = {};
        $scope.usuarioForm.$setUntouched();

        angular.element('#codigoUsuario').focus();
    }

    function excluir(linha) {
        var index = $scope.listaUsuarios.indexOf(linha);
        $scope.listaUsuarios.splice(index, 1);

    }

    function editar(linha) {
        $scope.entidade = angular.copy(linha);

    }

    function visualizar(linha) {
        $rootScope.entidade = angular.copy(linha);
        $state.go('visualizarUsuarios');
    }

}