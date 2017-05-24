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

  $scope.tasks = [];
  $scope.addTask = function () {
    //window.alert("Tasks added");
    tasks+=1;
    window.alert("Task number " + tasks + " has been added.");
    angular.element(tasksP).append($compile('<li><md-button class="md-raised md-primary md-hue-1" ng-click="showConfirm($event)">Task</md-button></li>')($scope));
  };

  $scope.delTask = function () {
    tasks -= 1;
    angular.element(tasksP).empty();
    for (var i = 0; i < tasks; i++){
      angular.element(tasksP).append($compile('<li><md-button class="md-raised md-primary md-hue-1" ng-click="showConfirm($event)">Task</md-button></li>')($scope));
    }
  }

});

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
