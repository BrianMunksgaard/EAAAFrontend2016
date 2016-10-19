(function($){
    "use strict"
   $(function(){
      // Run on DOM ready
   });

    /*
    ** Retrieve GitHub users using the GitHub API.
    */
    function retrieve_users() {
        $.ajax({
            url: 'https://api.github.com/users',
            type: 'get',
            dataType: 'json',
            success: list_users
        });
    }

    /*
    ** 
    **
    */
    function list_users(response) {
        var output = $('#users'); // Section to hold users.

        // Create div for each user and set the attributes.
        // Use the users login name as the id for the div.
        $.each(response, function(idx, obj) {
            var userdiv = $('<div>');
            userdiv.attr({
                id: obj.login,
                class: 'productdescription'
            });
            
            var contentdiv = $('<div>');
            contentdiv.attr({
                class: 'contentdiv pull-left'
            })
            contentdiv.append("<p>User login name: " + obj.login + "</p>");
            
            var avatar = $('<img>'). attr({
                src: obj.avatar_url,
                height: 100,
                width: 100
            });
            
            var imgdiv = $('<div>');
            imgdiv.append(avatar);
            contentdiv.append(imgdiv);
            
            var btn = $('<button>');
            btn.attr({
                id: 'getreposbtn_' + obj.login,
                class: 'button',
                name: obj.login
            });
            btn.on('click', function(){
                get_repos(this, contentdiv);
            });

            btn.append("GET REPOS");
            contentdiv.append(btn);
            
            userdiv.append(contentdiv);
            output.append(userdiv);
        });

    }
    
    function get_repos(userinfo, contentdiv) {
        var url = 'https://api.github.com/users/' + userinfo.name + '/repos';
        var dd = $('<select>');
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(response){
                
                $.each(response, function(idx, obj) {
                    dd.append($('<option>', {
                        text: obj.name
                    }))
                })
            }
        });
        dd.on('change', function(){
            var selectedrepo = this.selectedOptions[0].text;
            alert(selectedrepo);
            console.log(selectedrepo);
        });
        contentdiv.append(dd);
    }
    

    retrieve_users();
    
})(jQuery);
