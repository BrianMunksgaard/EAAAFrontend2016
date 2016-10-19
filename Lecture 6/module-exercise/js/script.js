(function(){
	"use strict";

	var modal = (function(){

      var modalwin = document.getElementById("modal-window");
      var coverwin = document.getElementById("cover-window");
      
      var init = function(){
        console.log("Up and running");
                  
        var openbtn = document.getElementById("openmodal");
        openbtn.addEventListener("click", function() {
            openModal();
        });
          
        var closebtn = document.getElementById("closemodal");
        closebtn.addEventListener("click", function() {
            closeModal();
        });
      }
      
      var openModal = function() {
          alert("OpenModal start");
          modalwin.classList.remove("hidden");
          coverwin.classList.remove("hidden");
          alert("OpenModal exit");
      }
      
      var closeModal = function() {
          alert("CloseModal start");
          modalwin.classList.add("hidden");
          coverwin.classList.add("hidden");
          alert("CloseModal exit");
      }
      
      return {
        init: init
      }
      
    })();
  
    modal.init();

})();

