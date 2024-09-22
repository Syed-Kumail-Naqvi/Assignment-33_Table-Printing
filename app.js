var userValue = prompt("Enter A Number To Generate It's Table:");

for (var i = userValue; i >= 1; i--) {
    for (var j = 1 ; j <= 10 ; j++){
        console.log(i + " x " + j + " = " + i * j);
    }
    // document.getElementById("table").innerHTML = [userValue.value + " x " + i + " = " + (i*userValue).value];
};
