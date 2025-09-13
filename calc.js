// Calc.js | Alex Olson | alexko@bu.edu
// JavaScript File containing calculator functionality

// Retriveing information from the HTML as in demo...
let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

// Function to add the two user values...
function doAdd(){
    output.innerHTML=String(Number(one.value)+Number(two.value));
    // check if text should be red in the negative case
    if (Number(output.innerHTML) < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "green";
    }
}

// Function to subtract the two user values...
function doSub() {
    output.innerHTML=String(Number(one.value)-Number(two.value));
    // check if the text should be red in the negative case
    if (Number(output.innerHTML) < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "green";
    }
}

// Function to multiply the two user values...
function doMult () {
    output.innerHTML=String(Number(one.value)*Number(two.value));
    // check if the text should be red in the negative case
    if (Number(output.innerHTML) < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "green";
    }
}

// Function to divide the two user values...
function doDiv () {
    // cant divide by 0 obviously...
    if (Number(two.value) == 0) {
        output.innerHTML=String(undefined);
    } else {
        output.innerHTML=String(Number(one.value)/Number(two.value));
    }
    // check if the text should be red in the negative case
    if (Number(output.innerHTML) < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "green";
    }
}

// Function to reset the user values and output...
function doClear () {
    one.value = "";
    two.value = "";
    output.innerHTML = "";
}

// Function to power the first user val by the second...
function doPower () {
    let num = Number(one.value);
    let diff = 0;

    // converting negative exponent for loops sake
    if (Number(two.value) > 0) {
        diff = Number(two.value);
    } else {
        diff = Number(two.value)*-1;
    }

    // calculating the value
    for (let i=0; i < (diff-1); i++) {
        num = num*Number(one.value);
    }

    // converting to fraction for negative exponent case
    if (Number(two.value) < 0) {
        num = 1 / num;
    }

    // ensure its just 1 if the exponent was 0
    if (Number(two.value) == 0) {
        num = 1;
    }

    output.innerHTML=num;

    // check if the text should be red in the negative case
    if (Number(output.innerHTML) < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "green";
    }
}

