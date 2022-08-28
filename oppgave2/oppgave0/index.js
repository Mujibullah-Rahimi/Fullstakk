// DELOPPGAVE 1
const removeButtonEventListener = () => {
    const removeBtn = document.getElementById("remove-btn");
    removeBtn.addEventListener("click", removeBtnHandler);
};
const removeBtnHandler = (e) => {
    const removeText = document.getElementById("remove");
    removeText.innerHTML = "";
    const removeBtn = document.getElementById("remove-btn");
    removeBtn.innerHTML = "Hent teksten tilbake";
    removeBtn.addEventListener("click", removeBtnHandler2);
};
const removeBtnHandler2 = (e) => {
    const removeText = document.getElementById("remove");
    removeText.innerHTML = "Fjern denne teksten med knappen under";
    const removeBtn = document.getElementById("remove-btn");
    removeBtn.innerHTML = "Fjern teksten over";
    removeBtn.addEventListener("click", removeBtnHandler);
};
removeButtonEventListener();

// DELOPPGAVE 2
const changeButtonEventListener = () => {
    const removeBtn = document.getElementById("change-btn");
    removeBtn.addEventListener("click", changeBtnHandler);
};
const changeBtnHandler = (e) => {
    const removeText = document.getElementById("change");
    removeText.innerHTML = "😂";
};
changeButtonEventListener();

// DELOPPGAVE 3
const inputEventListener = () =>{
    const input = document.querySelector("input");
    input.addEventListener("input", inputTextHandler);
};
const inputTextHandler = () => {
    const textValue = document.querySelector("input").value;
    const inputText = document.getElementById("input-text");
    inputText.innerHTML = textValue;
};
inputEventListener();

// DELOPPGAVE 4
const myList = ["item one", "item two", "item three"];
const listButtonEventListener = () => {
    let writeListBtn = document.getElementById("write-list");
    writeListBtn.addEventListener("click", writeList);  
};
const writeList = () => {
    myList.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = item;
        const ul = document.getElementById("ul");
        ul.appendChild(listItem);
    });
    let writeListBtn = document.getElementById("write-list");
    writeListBtn.disabled = true;
}
listButtonEventListener();

// DELOPPGAVE 5
const createElementEventListener = () => {
    const createBtn = document.getElementById("create");
    createBtn.addEventListener("click", createBtnHandler);
};
const createBtnHandler = () => {
    const selected = document.getElementById("select");
    let elementType = selected.value;
    const textInput = document.getElementById("text");
    let inputText = textInput.value;

    let newElement = document.createElement(elementType);
    newElement.innerHTML = inputText;

    let container = document.getElementById("placeholder");
    container.appendChild(newElement);
}
createElementEventListener();

// DELOPPGAVE 6
const removeLiEventListener = () =>{
    const removeLiBtn = document.getElementById("remove-li");
    removeLiBtn.addEventListener("click", removeLiHandler);
}
const removeLiHandler = () => {
    const elementList = document.getElementById("list");
    elementList.removeChild(elementList.lastElementChild);
}
removeLiEventListener();

// DELOPPGAVE 7
const nameInputEventListener = () =>{
    const input = document.getElementById("name");
    input.addEventListener("input", orderBtnHandler);
};
const orderBtnHandler = () => {
    const nameValue = document.getElementById("name").value;
    const orderBtn = document.getElementById("order");
    
    if (nameValue.length > 4) {
        orderBtn.disabled = true;
    }
    else{
        orderBtn.disabled = false;
    }
};
nameInputEventListener();

// DELOPPGAVE 8
//children, color
const colorBtnEventListener =() =>{
    const colorBtn = document.getElementById("color");
    colorBtn.addEventListener("click", changeLiElements);
};
const style =
    "border: 2px solid red; margin: 5px;"; 

    const changeLiElements =() =>{
    const elements = document.querySelector(".children");
    const LiArray = Array.from(elements.children);
    LiArray.forEach(li => {
        li.style.cssText = style;
    });
};
colorBtnEventListener();
