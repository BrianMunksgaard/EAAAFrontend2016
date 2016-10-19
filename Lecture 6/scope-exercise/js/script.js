(function(){
	"use strict";

	var answer = 0;
  
    document.querySelector(".calc").onclick = function(e) {
      answer += 42;
      getAnswer();
    };

    function getAnswer() {
        document.querySelector(".answer").innerHTML = answer;
    }
})();

