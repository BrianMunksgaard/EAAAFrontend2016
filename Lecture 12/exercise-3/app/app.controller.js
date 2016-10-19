(function(){
	"use strict";

	angular
      .module("shop", [])
      .controller("shopController", shopController);
	
    function shopController($scope) {
      $scope.products = [
        {
		  "id": 1,
          "title": "Old Rasputin",
          "style": "Russian Imperial Stout"
        },
        {
		  "id": 2,
          "title": "Speedway Stout",
          "style": "Imperial Stout"
        }
      ]

	  //$scope.cart = [];
	  $scope.cart = {};
	  
	  $scope.buyProduct = function() {
		  var product = this.product;
		  var cartObject = $scope.cart[product.id];
		  if(!cartObject) {
			  $scope.cart[product.id] = {};
			  cartObject = $scope.cart[product.id];
		  }
		  cartObject.product = product;
		  cartObject.items = cartObject.items ? cartObject.items = cartObject.items + 1 : 1;
	  }
	  
	  $scope.removeProduct = function() {
		  var item = this.item;
		  delete $scope.cart[item.product.id];
	  }
	  
	  $scope.emptyCart = function() {
		  return jQuery.isEmptyObject($scope.cart);
	  }
    }

})();

