/**
 * You must include the dependency on 'ngMaterial' 
 */
var app = angular.module('TaskApp', ['ngMaterial']);

app.controller('TaskCtrl', function ($scope, $mdDialog) {

  $scope.taskList = [];

  $scope.addTask = function(ev) {
    $scope.showText = false;
    $mdDialog.show(
      {
        templateUrl: "test.html",
        clickOutsideToClose: true,
        scope: $scope,
        preserveScope: true,
        controller: function($scope) {
       },
    });
  };

  $scope.addTaskHelper = function(ev, namePlaceholder, descPlaceholder) {
    $scope.taskList.push({name: namePlaceholder,
                          desc: descPlaceholder});
    $mdDialog.cancel();
  };


  $scope.showTask = function(ev, task) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title(task.name)
      .textContent(task.desc)
      .ariaLabel('Task')
      .targetEvent(ev)
      .ok('Not yet')
      .cancel('Completed!');

    $mdDialog.show(confirm).then(function() {
    }, function() {
      $scope.delTask(task);
    });
  };

  $scope.delTask = function (task) {
    var index=$scope.taskList.indexOf(task)
      $scope.taskList.splice(index,1);
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };
  };

});
