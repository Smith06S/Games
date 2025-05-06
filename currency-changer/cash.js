const money = {
    dollar: 0.84,
    euro: 1,
    livre: 1.14,
    bitcoin: 40000
};

var money_entered = 1; // default to a valid exchange rate
var money_want_get = 1; // default to prevent division by zero


// Convert function
function convert() {
    let money_to_convert = document.getElementById("entry").value; // gets the entry from the id
    let result_element = document.getElementById("result"); // gets the result field from the id

    if (money_entered && money_want_get && money_to_convert) { // if every element is not empty it does the convertion
        result_element.value = (money_entered * money_to_convert) / money_want_get;
    }
}

// Selects the entry
function entry_click(clicked_data_devise) {
    money_entered = money[clicked_data_devise]; // gets the currency
    updateSelection("entry_div", clicked_data_devise); // keeps the color once the currency is chosen
}

// Selects the output
function wanted_click(clicked_data_devise) {
    money_want_get = money[clicked_data_devise];
    updateSelection("output_div", clicked_data_devise);
}

// Add a eventListener on the input with the id="entry"
document.getElementById("entry").addEventListener("blur", convert);

// Function for the style of the currency chosen
function updateSelection(parentId, selectedDevise) {
    var parent = document.getElementById(parentId); // gets the parent element
    var buttons = parent.querySelectorAll("button"); // gets the buttons

    buttons.forEach(button => { // does a loop over the buttons to find the right one
        if (button.dataset.devise === selectedDevise) {
            button.style.backgroundColor = "green"; // keeps the green color on the right one
        } else {
            button.style.backgroundColor = "gray"; // Rétablit la couleur par défaut
        }
    });
}
