/**
 * You must include the dependency on 'ngMaterial' 
 */
var tasksP = document.getElementById("tasks");
var btn = document.getElementById("addButton");
var text = tasksP.innerHTML;
var tasks = []
var app = angular.module('BlankApp', ['ngMaterial']);

app.controller('BlankCtrl', function ($scope, $mdDialog, $compile) {
  $scope.showConfirm = function (ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is a Task')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Complete!')
        .targetEvent(ev)
    );
    tasksP.innerHTML.blur();
  }

  $scope.tasks = [];
  $scope.addTask = function () {
    //window.alert("Tasks added");
    angular.element(document.body).append($compile("<md-button class='md-raised md-primary md-hue-1' ng-click='showConfirm($event)'>Task</md-button>")($scope));
    //tasksP.innerHTML = tasksP.innerHTML + "<br><md-button class='md-raised md-primary md-hue-1' ng-click='addTask()'>Task</md-button><br>";

  };

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
