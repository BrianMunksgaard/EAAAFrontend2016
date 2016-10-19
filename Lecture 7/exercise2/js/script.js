(function($){
    "use strict"
   $(function(){
      // Run on DOM ready
   });

  $( "#theinputform" ).submit(function( event ) {
 
      // Stop form from submitting normally
      event.preventDefault();

      var theform = $(this).serializeArray();
      
       $.ajax({
        url: '/',
        type: 'post',
        dataType: 'json',
        data: theform, success: success_callback 
        });

    });
    
    function success_callback(response) {
        console.log(response);
    }
})(jQuery);
