// To Ensure that the JavaScript File is Connected to the Index.html File:
console.log("CONNECTED...Up and Running...");

// Function to Add a Task to the List:
function addTask(list, newTask)
{
    console.log("Task Added!"); // To Note that a Task was added and the Function Ran.

    let task = document.querySelector('input').value; //Gets the input value from the Text Field.
    console.log(task);

    //Appending the Children to Diplay the Task as a list:
    var list = document.getElementById('tasks');
    var toDo = document.createElement("li");
    toDo.setAttribute('id', 'taskItem');
    var check = document.createElement("input");
    check.type = "checkbox";
    toDo.innerText = newTask.value;
    var space = document.createElement("br");
    toDo.appendChild(check);
    list.appendChild(space);
    list.appendChild(toDo);

    document.getElementById('newTask').value = '';
    console.log(" ");

    //Add Event Listener to the Check Boxes:
    check.addEventListener("click", clearDone);
    
    return false;

    // Function to Remove checked off Items:
    function clearDone(event)
    {
        console.log("Box has been checked");
        list.removeChild(space);
        list.removeChild(toDo);
        console.log("Task has been Done and Crossed Off...Way to Go!");
        console.log(" ");

    }
}