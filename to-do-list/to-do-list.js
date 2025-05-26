// function that creates a new task
function newTask(text) {
    // create the task div with the class "task"
    var taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // create the task text with the text given as parameter
    var label = document.createElement("label");
    label.textContent = text;
    
    // create the task checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // append checkbox to the label
    label.appendChild(checkbox);
    taskDiv.appendChild(label);

    // append task to the list of tasks
    document.getElementById("tasklist").appendChild(taskDiv);

    // event listener to remove task when the checkbox is checked
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskDiv.remove();
        }
    });
}

// listening event to add a new task when button "newtask" is clicked
document.getElementById("newtask").addEventListener("click", function () {
    var taskValue = document.getElementById("taskvalue").value; // gets the value given by the user in the input 

    // ensure the input is not empty before creating a task
    if (taskValue !== "") {
        newTask(taskValue); // calls the newTask function with the text input
        document.getElementById("taskvalue").value = ""; // clear the input
    }
});
