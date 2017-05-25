/**
 * You must include the dependency on 'ngMaterial' 
 */
var app = angular.module('BlankApp', ['ngMaterial']);

app.controller('BlankCtrl', function ($scope, $mdDialog) {
  $scope.taskList = [];

  $scope.addTask = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('What task would you like to add?')
      .textContent('Give a useful name')
      .placeholder('Task Name')
      .ariaLabel('Task Name')
      .initialValue('')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('Cancel');
    $mdDialog.show(confirm).then(function(result) {
      $scope.taskList.push({name: result,
                            desc: "This task needs to be completed."});
    }, function() {
      window.alert("Task was not added.");
    });
  };

  // $scope.showTask = function (ev,task) {
  //   $mdDialog.show({
  //     controller: DialogController,
  //     templateUrl: 'dialog.tmpl.html',
  //     parent: angular.element(document.body),
  //     targetEvent: ev,
  //     clickOutsideToClose: true,
  //     fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  //   })
  //     .then(function (answer) {
  //       $scope.delTask(task);
  //     }, function () {
  //     });
  // };

  $scope.showTask = function(ev, task) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title(task.name)
      .textContent(task.desc)
      .placeholder('Task Description')
      .ariaLabel('Task Description')
      .placeholder('Edit Description')
      .targetEvent(ev)
      .ok('Save!')
      .cancel('Complete!');

    $mdDialog.show(confirm).then(function(result) {
      task.desc = result;
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
