let backgroundContainer = document.getElementById('colorPickerContainer');
let hexcode = document.getElementById('selectedColorHexCode');

function button_1() {
    backgroundContainer.style.backgroundColor = "#e0e0e0";
    hexcode.textContent = "#e0e0e0";
}

function button_2() {
    backgroundContainer.style.backgroundColor = "#6fcf97";
    hexcode.textContent = "#6fcf97"
}

function button_3() {
    backgroundContainer.style.backgroundColor = "#56ccf2";
    hexcode.textContent = "#56ccf2";
}

function button_4() {
    backgroundContainer.style.backgroundColor = "#bb6bd9";
    hexcode.textContent = "#bb6bd9";
}

function reset() {
    backgroundContainer.style.backgroundColor = "#ffffff";
    hexcode.textContent = "#ffffff";
}