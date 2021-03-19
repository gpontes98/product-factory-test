function showAnswer(idAnswer){
    document.getElementById(idAnswer).style.display = "flex";
}
function hideAnswer(idAnswer){
    document.getElementById(idAnswer).style.display = "none";
}

function resizeButton(myButton){
    console.log(myButton);
    myButton.style = "font-size:45px";
    myButton.style.cursor = "pointer";

}

function backButton(myButton){
    console.log(myButton);
    myButton.style = "font-size:35px";
}