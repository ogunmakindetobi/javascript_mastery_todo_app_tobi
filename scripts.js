const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");


inputBox.onkeyup = () => {
    let userData = inputBox.value; //getting user enteered value
    if (userData.trim() != 0) { // if user values aren't only spaces
        addBtn.classList.add("active")//  active button

    } else {
        addBtn.classList.remove("active")// unactive the add button
    }
}

showTasks(); // calling showTasks Function


//if user click on the add button
addBtn.onclick = () => {
    let userData = inputBox.value;// getting user emtered value
    let getLocalStrong = localStorage.getItem("New Todo");// getting localstorage
    if (getLocalStrong == null) {//  if localstring is null
        listArr = []; // creating blank array
    } else {
        listArr = JSON.parse(getLocalStrong);// transforming Json js object
    }
    listArr.push(userData);// pushing or add user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); // transforming js object into a Json string
    showTasks(); // calling showTasks Function
}

// function to add task list inside ul
function showTasks() {
    let getLocalStrong = localStorage.getItem("New Todo");// getting localstorage
    if (getLocalStrong == null) {//  if localstring is null
        listArr = []; // creating blank array
    } else {
        listArr = JSON.parse(getLocalStrong);// transforming Json js object
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick ="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; // adding new li tag inside ul tag
    inputBox.value = " "; //once task added leave the imput field blank
}
//delete task function
function deleteTask(index) {
    let getLocalStrong = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStrong);
    listArr.splice(index, 1); //delete or remove the particular indexed li
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //
    showTasks(); // calling showTask function
}

