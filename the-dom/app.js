window.onload = () => {
    console.log("Hello");
};
//Change ul for ol so to number them
document.onreadystatechange = () => {
    if (document.readyState !== "complete") return;
    const listContainer = document.querySelector("#list-container");
    const liElements = [...listContainer.children[0].children];
    listContainer.removeChild(listContainer.children[0]);
    const ol = document.createElement("ol");
    liElements.forEach((li) => {
        ol.appendChild(li);
    });
    listContainer.appendChild(ol);
    listContainer.parentElement.appendChild(//To put the button on the parent of listContainer
        myObject.buildButton()
        );
    const body = document.querySelector("body"); //document.body;
    //Event listener of the body
    body.addEventListener("click", (event) => {
        console.log("Hello, I am the event listener of the body");
        console.log(event.eventPhase);
        console.log(event.target);
    });
    //Event listener of the father of listContainer
    listContainer.parentElement.addEventListener("click", (event) => {
        console.log("Hello, I am the event listener of the father of listContainer");
        console.log(event.eventPhase);
        console.log(event.target);       
    });
    //Event listener of listContainer
    listContainer.addEventListener("click", (event) => {
        console.log("Hello, I am the event listener of listContainer");
        console.log(event.eventPhase);
        console.log(event.target);       
    });
};

function handleClick (event) {
    console.log("Hello, I am the event listener of the flex container");
    console.log(event.eventPhase);
    console.log(event.target);
    event.stopPropagation();
    event.preventDefault();
    event.target.parentElement.removeEventListener("click", handleClick);
};

//Function that creates a button with some properties
// function buildButton () {
//     const button = document.createElement("button");
//     //btn btn-primary
//     button.className = "btn btn-primary";
//     button.textContent = "Click me!";
//     const flex = document.createElement("div");
//     flex.style.display = "flex";
//     flex.style.flexFlow = "wrap";
//     flex.style.justifyContent = "center";
//     flex.style.width = "100%";
//     flex.appendChild(button);
//     return flex;
// };

const myObject = {
    name: "myObject",
    buildButton: function () { //If arrow funtion is used, the call in console.log(this) will show window as the one who called the function
        const button = document.createElement("button");
        //btn btn-primary
        button.className = "btn btn-primary";
        button.textContent = "Click me!";
        button.addEventListener("click", (event) => {
            alert("You clicked the button");
            console.log("Hello, I am the button");
            console.log(event.eventPhase);
            console.log(event.target);
        });
        const flex = document.createElement("div");
        flex.addEventListener("click", handleClick);
        flex.style.display = "flex";
        flex.style.flexFlow = "wrap";
        flex.style.justifyContent = "center";
        flex.style.width = "100%";
        flex.appendChild(button);
        return flex;
    }
}