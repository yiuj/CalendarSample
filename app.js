var app = angular.module('birthdayToDo', []);

app.controller('main', function($scope){ 

    // Start as not visible but when button is tapped it will show as true 

        $scope.visible = false;

    // Create the array to hold the list of Birthdays

        $scope.bdays = [];

    // Create the function to push the data into the "bdays" array

    $scope.newBirthday = function(){

        $scope.bdays.push({name:$scope.bdayname, date:$scope.bdaydate});

        $scope.bdayname = '';
        $scope.bdaydate = '';

    };
    
    
    $scope.remove=function(item){ 
      var index=$scope.bdays.indexOf(item)
      $scope.bdays.splice(index,1);     
    }
});