const money = {
    dollar: 0.84,
    euro: 1,
    livre: 1.14,
    bitcoin: 40000
};

var type_money_entry = 1; // default to a valid exchange rate
var type_money_result = 1; // default to prevent division by zero


// Convert function
function convert() {
    var entry = document.getElementById("entry").value; // gets the entry from the id
    var result = document.getElementById("result"); // gets the result field from the id

    if (type_money_entry && type_money_result && entry) { // if every element is not empty it does the convertion
        result.value = (type_money_entry * entry) / type_money_result;
    }
}

// Selects the entry
function entry_click(clicked_data_devise) {
    type_money_entry = money[clicked_data_devise]; // gets the currency
    updateSelection("entry_div", clicked_data_devise); // keeps the color once the currency is chosen
    convert()
}

// Selects the output
function wanted_click(clicked_data_devise) {
    type_money_result = money[clicked_data_devise];
    updateSelection("output_div", clicked_data_devise);
    convert()
}

// When the element loses focus, it calls convert()
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