// constants
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// adding functionality to the "TO-DO App".
function addTask() {
	// basic conditions check
	if (inputBox.value === "") {
		alert("You must write something to add a task!");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);

		// adding cross icon in the span element
		let span = document.createElement("span");
		span.innerHTML = "\u00d7"; // cross icon
		li.appendChild(span);
	}
	inputBox.value = "";
	//call the function when a task is added
	saveTasks();
}

// function triggers when clicked on a "task"
listContainer.addEventListener("click", function (e) {
	// if clicked on "LI" then the "checked" class is toggled
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
		saveTasks();
	} // if clicked on "SPAN" then remove the parent element
	else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
		saveTasks();
	}
});

// function to save the user tasks
function saveTasks() {
	// saving tasks in the browser
	localStorage.setItem("data", listContainer.innerHTML);
}

// function to show the saved tasks when open the website
function showTasks() {
	listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
