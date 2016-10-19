(function(){
	"use strict";

	angular
      .module("shop", [])
      .controller("shopController", shopController);
  
    function shopController($scope) {
      $scope.products = [
        {
          "title": "Old Rasputin",
          "style": "Russian Imperial Stout"
        },
        {
          "title": "Speedway Stout",
          "style": "Imperial Stout"
        }
      ]
    }

})();

