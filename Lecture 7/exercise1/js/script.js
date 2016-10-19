(function($){
    "use strict"
   $(function(){
      // Run on DOM ready
   });

   var box = $('.box');

   $('#moveBtn').on('click', function(e) {
        var myDiv = $('#moveAndColorDiv');
        $(myDiv).animate({top: "+=300px" }, 2000);
    })
    

   $('#colorBtn').on('click', function(e) {
       box.toggleClass('yellow-back');
   })

})(jQuery);
