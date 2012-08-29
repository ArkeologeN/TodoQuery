/* 
 * Copyright (c) 2012 - 2013. All Rights Reserved.
 * All the code underneath is written by Hamza Waqas @ Ubuntu
 * From Karachi on The PlumTree Group.
 * 
 * *Code may varies from Public & Private source code.
 */

jQuery(document).ready(function() {
    // jQuery is ready with DOM
    // Represent jQuery with "$" now.
    $("#add-todo").click(function() {
        // Add Todo Button Clicked
        var _todo = $("#todotitle").val(); // Get The value of textbox.
        if (typeof _todo != 'undefined' && _todo != '' && _todo != null) {
            // Todo is not undefined, empty and null means it carries value!. Go Ahead!
            var _id = "todo-"+($("ul li").length + 1); // Generate ID to remove element by ID in future
            $("#todo-listing").append( // Append ul with <li>
                $("<li></li>").append(
                    $("<div></div>").addClass("content").html(_todo) // Add Todo Title
                ).append(
                    $("<div></div>").addClass("cross").html("x").attr("onclick", "$('#"+_id+"').remove();") // Add (x) 
                ).attr("id",_id)
            );
            cleanTextBox(); 
        }
    });
    
    function cleanTextBox() {
        // Clean textbox and make focus
        $(".txt").val('').focus();
    }
    
    function removeTodo(o) {
        // Check if it is object
        if (typeof o == 'undefined')
            alert("Invalid Object!"); return false;
        
        // Delete Todo;
        $(o).remove();
    }
    
});