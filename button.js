/**
 * You must include the dependency on 'ngMaterial' 
 */
var app = angular.module('BlankApp', ['ngMaterial']);

<<<<<<< HEAD

app.controller('BlankCtrl', function ($scope, $mdDialog, $compile) {
=======
app.controller('BlankCtrl', function ($scope, $mdDialog) {
>>>>>>> 0565d7e8bc12acda490dfde3c95dd38c031f5477
  $scope.taskList = [];

  this.open = function(ev) {
    this.showText = false;
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

  this.save = function () {
    this.showText = true;
    $mdDialog.cancel();
  }

  $scope.addTask = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('What task would you like to add?')
      .placeholder('Task Name')
      .ariaLabel('Task Name')
      .initialValue('')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('Cancel');
    $mdDialog.show(confirm).then(function(result) {
      $scope.taskList.push({name: result, desc: vm.placeholder2});
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
