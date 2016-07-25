angular.module('umbraco').controller('fontIconPickerCtrl', function($scope, assetsService, $http){
	$http.get('/App_Plugins/fontIconPicker/js/fontList.json').success(function(data){
		$scope.items = data.iconList;
	});


	$scope.ShowClose = function(){
		if ($scope.model.value == undefined) {
			return false;
		} else {
			return true;
		}
	}
	
	$scope.close = function(){
		console.log("clear");
		$scope.model.value = undefined;
	}

});