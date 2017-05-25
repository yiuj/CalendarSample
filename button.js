/**
 * You must include the dependency on 'ngMaterial' 
 */
var tasksP = document.getElementById("tasks");
var btn = document.getElementById("addButton");
var text = tasksP.innerHTML;
var tasks = 0;
var app = angular.module('BlankApp', ['ngMaterial']);

app.controller('BlankCtrl', function ($scope, $mdDialog, $compile) {
  $scope.showConfirm = function (ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Task Complete!')
        .textContent('Good job, you finished this task.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Complete!')
        .targetEvent(ev)
    );
    $scope.delTask();
  }
  $scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('What task would you like to add?')
      .textContent('Give a useful name')
      .placeholder('Dog name')
      .ariaLabel('Dog name')
      .initialValue('Task')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('Cancel');

    $mdDialog.show(confirm).then(function(result) {
      angular.element(tasksP).append($compile('<li><md-button class="md-raised md-primary md-hue-1" ng-click="showAdvanced($event)">'+result+'</md-button></li>')($scope));
    }, function() {
      window.alert("Task was not added.");
    });
  };

  $scope.showAdvanced = function (ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
      .then(function (answer) {
        $scope.delTask();
        $scope.status = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
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
  }



  $scope.tasks = [];
  $scope.addTask = function () {
    //window.alert("Tasks added");
    tasks += 1;
    var result = $scope.showPrompt();
    window.alert("Task number " + tasks + " has been added.");
  };

  $scope.delTask = function () {
    tasks -= 1;
    angular.element(tasksP).empty();
    for (var i = 0; i < tasks; i++) {
      angular.element(tasksP).append($compile('<li><md-button class="md-raised md-primary md-hue-1" ng-click="showAdvanced($event)">Task</md-button></li>')($scope));
    }
  }

});
