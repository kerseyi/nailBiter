//change background based on vars
//maybe drop this into modal?

$(document).ready(function(){
    // Set background image of a div on click of the button
    $("#work").click(function(){
        var imageUrl = "img/work.jpg";
        $(".activity").css("background-image", "url(" + imageUrl + ")");
    });
    $("#desk").click(function(){
        var imageUrl = "img/deskView.jpg";
        $(".activity").css("background-image", "url(" + imageUrl + ")");
    });     
});