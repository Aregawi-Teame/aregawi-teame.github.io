$(document).ready(function(){
    $("#articlesList").on("click","article p > a", function(event){
        event.preventDefault();
        $("#articlesList").append("<article> <p>Article Title - <a href='http://www.google.com'>Click to Add a new Article</a></p> </article>");
    });
});