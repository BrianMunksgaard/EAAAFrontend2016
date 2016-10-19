(function(){
	"use strict";

	angular
      .module("shop", [])
      .controller("shopController", shopController);
	
	function shopController($scope, shopService) {
      
	  shopService.getProducts().then(function(data) {
		$scope.products = data;	  
		  //console.log(data);
	  });

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

