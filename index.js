
var buttonListLength = document.querySelectorAll(".drum").length;

//Detecting button press

for (var x = 0; x < buttonListLength; x++){


    document.querySelectorAll(".drum")[x].addEventListener("click", function (event){

        //console.log(event);

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnnimation(buttonInnerHTML);
    });
}

//Detecting keyboard press

document.addEventListener("keydown", function (event){

    var keyPressed = event.key;

    keyPressed = keyPressed.toLowerCase();

    //console.log(keyPressed);

    makeSound(keyPressed);

    buttonAnnimation(keyPressed);
})

function makeSound(key){

    switch (key) {
        case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");

                tom1.play();
            break;

            case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");

                    tom2.play();
                break;

            case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");

                    tom3.play();
                break;

            case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");

                    tom4.play();
                break;

            case "j":
                    var snare = new Audio("sounds/snare.mp3");

                    snare.play();
                break;

            case "k":
                    var crash = new Audio("sounds/crash.mp3");

                    crash.play();
                break;

            case "l":
                    var kick_bass = new Audio("sounds/kick-bass.mp3");

                    kick_bass.play();
                break;

        
            default:
                console.log(key);
                break;
    }
}

//Button Annimation 

function buttonAnnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    //console.log(activeButton.classList);

    setTimeout( function() {
        activeButton.classList.remove("pressed");
    }, 100);
}