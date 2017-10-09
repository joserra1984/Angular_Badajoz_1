angular.module('appModule',[]) //Instanciamos el modulo, para ello ponemos los corchetes. Si no no se instanciaria.
.controller("AppController",['$scope',function($scope){ //Funcion constructora
    $scope.sName='Pepe'; 
    $scope.sCurso='AngularJS';
    $scope.btnBorrar = function(){
        $scope.sName='';
    }
}]);
/*
sName='Pepe'; 
sCurso='AngularJS';
*/