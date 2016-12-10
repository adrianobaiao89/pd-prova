angular.module('pdApp').config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {

    var visualizarUsuarios = {
        name:'visualizarUsuarios',
        url:'/visualizar-usuarios',
        templateUrl:'app/views/usuarios/pesquisa-usuarios.html',
        resolve:{
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/usuarios/pesquisa-usuario.controller.js')
            }
        }

    };

    $stateProvider
        .state('visualizarUsuarios',visualizarUsuarios)
}