
let addButton = document.querySelector(".addbutton");
console.log(addButton);
let inputField = document.querySelector(".userinput");

let sortButton = document.querySelector(".sortbutton");

let displayContainer = document.querySelector(".displayarea"); 

let i = 0;

addButton.addEventListener("click", addToList);

sortButton.addEventListener("click", sortTasks);

//Add function
function addToList(event) {

    event.preventDefault();

    let inputValue = inputField.value;

    const newdiv = document.createElement("div");
    newdiv.classList.add("taskItem");
    newdiv.contentEditable = false;

    //Left container
    const leftContent = document.createElement("div");
    leftContent.classList.add("leftContent");

    //Checkbox
    var box = document.createElement("input");
    box.type = "checkbox";
    box.name = "checkbox";
    box.classList.add("checkbox");

    //Text span
    var textNode = document.createElement("span");
    textNode.classList.add("textNode");
    textNode.textContent = inputValue;

    //Add content to left section
    leftContent.appendChild(box);
    leftContent.appendChild(textNode);

    //Right container
    const rightContent = document.createElement("div");
    rightContent.classList.add("rightContent");


    //Delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    //Edit button
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    //Add content to right section
    rightContent.appendChild(deleteBtn);
    rightContent.appendChild(editBtn);

    //Add left and right containers to main task div
    newdiv.appendChild(leftContent);
    newdiv.appendChild(rightContent);

    //Add whole task to display
    displayContainer.appendChild(newdiv);

    //Clear input field
    inputField.value = "";

    //Toggle line through on task completion
    box.addEventListener("change", function (){
        console.log("checkbox clicked");

        let parentdiv = this.parentElement;

        let textElement = parentdiv.querySelector("span");

        if(this.checked){
            textElement.style.textDecoration = "line-through";
        }else{
            textElement.style.textDecoration = "none";
        }
    });

    //Delete function
    deleteBtn.addEventListener("click", function(){
        console.log("delete button clicked");
        newdiv.remove();
    });

    function changeBtnText(){
        if(editBtn.textContent=="Edit"){
            editBtn.textContent="Save";
        }else{
            editBtn.textContent="Edit";
        }
    }

    function makeEditable(){
        if(newdiv.contentEditable == "false"){
            newdiv.contentEditable = "true";
            console.log("Content is editable");
        }else{
            newdiv.contentEditable = "false";
            console.log("Content isn't editable");
        }
    }


    editBtn.addEventListener("click", function(){
        changeBtnText();
        makeEditable();
    });




}

//Sort function
function sortTasks(event){

    event.preventDefault();


    let itemArray = Array.from(document.querySelectorAll(".taskItem"));

    itemArray.sort((a, b) => {
        let text1 = a.querySelector(".textNode").textContent.toLowerCase();
        let text2 = b.querySelector(".textNode").textContent.toLowerCase();
        return text1.localeCompare(text2);
    });

    itemArray.forEach(item => displayContainer.appendChild(item));

}




