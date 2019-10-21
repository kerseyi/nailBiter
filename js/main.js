
//change background based on vars
//maybe drop this into modal?
/*var thoughts = getColumn("Thoughts?",displayData(),"Form Responses 1");
var leftThumbWork = getItem("4","F", displayData(), "data");
var leftPointerWork = getItem("5","F", displayData(), "data");
var leftMiddleWork = getItem("6","F", displayData(), "data");

*/
/* */



/*function printThoughts(thoughts){
   
}*/

//printThoughts(thoughts);


var weather = "cloudy";
var activity = "working";
//var stuff = getItem("3", "B", displayData(), "data");
//var stuff = getColumn("Activities",displayData(),"data");
/*$.each(stuff, function(index, value){
            $(".test").append(index + ": " + value + '<br>');
        });*/




    // Set background image of a div on click of the button
    $("#cloudy").click(function(){
        $("#weatherAnimation").attr("class","cloudy");
        $("#leftHandImage").attr("src","img/ICCR-5.png");
        $("#rightHandImage").attr("src","img/ICCL-5.png");
        var weather = "cloudy";
        console.log(weather);
        
    });
    $("#rainy").click(function(){
        $("#weatherAnimation").attr("class","rainy");
        $("#leftHandImage").attr("src","img/SCL-5.png");
        $("#rightHandImage").attr("src","img/SCR-5.png");
        var weather = "rainy";
        console.log(weather);
    });
    $("#sunny").click(function(){
        $("#weatherAnimation").attr("class","sunny");
        $("#leftHandImage").attr("src","img/WSL-5.png");
        $("#rightHandImage").attr("src","img/SSR-5.png");
        var weather = "sunny";
        console.log(weather);
    });

    //activities
    $("#working").click(function(){
        var imageUrl = "img/work.jpg";
        var imageUrl = "img/deskView.jpg";
        $("#leftHandImage").attr("src","img/WRL-5.png");
        $("#rightHandImage").attr("src","img/WSR-5.png");
        $("#halfImg").attr("src", "img/work.jpg");
        
        var activity = "working";
        console.log(activity);
    });
    $("#travelling").click(function(){
        var activity = "travelling";
        $("#leftHandImage").attr("src","img/WCL-5.png");
        $("#rightHandImage").attr("src","img/WSR-5.png");
        console.log(activity);
        $("#halfImg").attr("src", "img/car.jpg");
       
    });
    $("#relaxing").click(function(){
        $("#halfImg").attr("src", "img/relax.jpg");
        $("#leftHandImage").attr("src","img/ICCR-5.png");
        $("#rightHandImage").attr("src","img/ICCL-5.png");
        var activity = "relaxing";
        console.log(activity);
        
    });
     $("#inClass").click(function(){
        $("#halfImg").attr("src", "img/class.jpg");
        $("#leftHandImage").attr("src","img/SSL-5.png");
        $("#rightHandImage").attr("src","img/SCR-5.png");
        var activity = "in class";
        console.log(activity);
        setVars();
    });
    $("#studying").click(function(){
        $("#halfImg").attr("src", "img/study.jpg");
        $("#leftHandImage").attr("src","img/WRL-5.png");
        $("#rightHandImage").attr("src","img/SCR-5.png");
        var activity = "studying";
        console.log(activity);
        
    }); 
/*function setVars(){
    if(activity == "working" && weather == "cloudy") {
        $("#progressL1").attr("style", "width: 90px");
        $("#progressL2").attr("style", "width: 30px");
        $("#progressL3").attr("style", "width: 3px");
        $("#progressL4").attr("style", "width: 120px");
        $("#progressL5").attr("style", "width: 30px");
        $("#progressR1").attr("style", "width: 00px");
        $("#progressR2").attr("style", "width: 60px");
        $("#progressR3").attr("style", "width: 90px");
        $("#progressR4").attr("style", "width: 3px");
        $("#progressR5").attr("style", "width: 3px");
    } else if(activity == "working" && weather == "sunny"){
        $("#progressL1").attr("style", "width: 3px");
        $("#progressL2").attr("style", "width: 3px");
        $("#progressL3").attr("style", "width: 3px");
        $("#progressL4").attr("style", "width: 30px");
        $("#progressL5").attr("style", "width: 30px");
        $("#progressR1").attr("style", "width: 3px");
        $("#progressR2").attr("style", "width: 3px");
        $("#progressR3").attr("style", "width: 3px");
        $("#progressR4").attr("style", "width: 3px");
        $("#progressR5").attr("style", "width: 3px");
    } else if(activity == "working" && weather == "rainy"){
        $("#progressL1").attr("style", "width: 3px");
        $("#progressL2").attr("style", "width: 3px");
        $("#progressL3").attr("style", "width: 60px");
        $("#progressL4").attr("style", "width: 3px");
        $("#progressL5").attr("style", "width: 3px");
        $("#progressR1").attr("style", "width: 3px");
        $("#progressR2").attr("style", "width: 3px");
        $("#progressR3").attr("style", "width: 60px");
        $("#progressR4").attr("style", "width: 30px");
        $("#progressR5").attr("style", "width: 21px"); 
    }  */
  

