
var buttonListLength = document.querySelectorAll(".drum").length;

console.log(buttonListLength);

for  (var x = 0; x < buttonListLength; x++) {
    document.querySelectorAll("button")[x].addEventListener("click", function(){
       // alert("I have been clicked");

        var audio = new Audio("sounds/tom-1.mp3");

        audio.play();
    })
}



