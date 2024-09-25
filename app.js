var userValue = +prompt("Enter A Number To Generate It's Table:");

for (var i = 1; i<= userValue; userValue--) {
    for (var j = 1 ; j <= 10; j++){
        document.write("<br>", userValue + " x " + j + " = " + userValue * j);   
    }
        document.write("<br>")
}
