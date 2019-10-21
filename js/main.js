
//change background based on vars
//maybe drop this into modal?
var thoughts = getColumn("Thoughts?",displayData(),"Form Responses 1");
var leftThumbWork = getItem("4","F", displayData(), "data");
var leftPointerWork = getItem("5","F", displayData(), "data");
var leftMiddleWork = getItem("6","F", displayData(), "data");


/* */



/*function printThoughts(thoughts){
   
}*/

//printThoughts(thoughts);


var weather = "cloudy";
//var stuff = getItem("3", "B", displayData(), "data");
var stuff = getColumn("Activities",displayData(),"data");
/*$.each(stuff, function(index, value){
            $(".test").append(index + ": " + value + '<br>');
        });*/




    // Set background image of a div on click of the button
    $("#cloudy").click(function(){
        var imageUrl = "img/work.jpg";
        var weather = "cloudy";
        console.log(weather);
        $(".activity").css("background-image", "url(" + imageUrl + ")");
    });
    $("#rainy").click(function(){
        var imageUrl = "img/deskView.jpg";
        $(".activity").css("background-image", "url(" + imageUrl + ")");
        var weather = "rainy";
        console.log(weather);
    });
    $("#sunny").click(function(){
        var imageUrl = "img/deskView.jpg";
        $(".activity").css("background-image", "url(" + imageUrl + ")");
        var weather = "sunny";
        console.log(weather);
    });

    //activities
    $("#working").click(function(){
      
        var activity = "working";
        console.log(activity);
    });
    $("#travelling").click(function(){
        var activity = "travelling";
        console.log(activity);
    });
    $("#relaxing").click(function(){
        var activity = "relaxing";
        console.log(activity);
    });
     $("#inClass").click(function(){
        var activity = "in class";
        console.log(activity);
    });
    $("#studying").click(function(){
        var activity = "studying";
        console.log(activity);
    });             
function displayData(){
    console.log(thoughts);
    console.log(leftThumbWork);

    //console.log(thoughts.length);
}
/*$("#randomThoughts").html("<p>" + thoughts + "</p>").delay(10000);*/

/*if(weather == "sunny"){

}*/

/*https://docs.google.com/spreadsheets/d/e/2PACX-1vTDh5naSNQ0Qgd_gB8-m7hw88AFxJZn9qun8w5RJBveb82dd_I1PlqMtlqKvB6oIucUFLV6fabfFB1k/pub?gid=842493988&single=true&output=csv*/