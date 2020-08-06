var numsquare = 6;
var colors = generateRandomColor(numsquare);
var pickedcolor = pickColor();
var square = document.querySelectorAll(".square");
var displayColor = document.getElementById("colordisplay");
displayColor.textContent = pickedcolor;
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton  = document.querySelector("#reset");
var easybtn = document.querySelector(".easybtn");
var hardbtn = document.querySelector(".hardbtn");



easybtn.addEventListener("click",function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsquare = 3
    colors = generateRandomColor(numsquare);
    pickedcolor = pickColor();
    displayColor.textContent = pickedcolor;
    for(var i=0 ;   i<square.length ;   i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
});

hardbtn.addEventListener("click",function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numsquare = 6
    colors = generateRandomColor(numsquare);
    pickedcolor = pickColor();
    displayColor.textContent = pickedcolor;
    for(var i=0 ;   i<square.length ;   i++){
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
    }
})

resetButton.addEventListener("click",function(){
    colors = generateRandomColor(numsquare);
    pickedcolor = pickColor();
    displayColor.textContent = pickedcolor;
    displayMessage.textContent = "";
    resetButton.textContent = "New Colors";

    for(var i=0 ;   i<square.length ;   i++){
        square[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});


for(var i=0 ;   i<square.length ;   i++){
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedcolor){
            displayMessage.textContent = "Correct";
            changeColor(pickedcolor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again";
        }
        else{
            this.style.backgroundColor = "#232323";
            displayMessage.textContent = "try again";
        }
    });
}

function changeColor(color){
    for(var i=0 ;   i<square.length ;   i++){
        square[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = [];

    for(var i=0 ;   i<num   ;   i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var string = "rgb(" + r + ", " + g + ", " + b + ")" ;
    return string;
}