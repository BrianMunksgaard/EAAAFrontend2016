(function(){
	"use strict";

    var btn = document.getElementById("btn");
    var box = document.getElementById("box");
    var question = document.getElementById("q");
    
	btn.addEventListener("click", function(e) {
        e.preventDefault();
        box.classList.toggle("warning");
        box.textContent = question.value;
    });
    
})();


