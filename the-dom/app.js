console.log(this); //
window.onload = () => {
    console.log("Hello");
};

//Change ul for ol so to number them
document.onreadystatechange = () => {
    if (document.readyState !== "complete") return;
    console.log(this); //
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
        )
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
        console.log(this);
        //btn btn-primary
        button.className = "btn btn-primary";
        button.textContent = "Click me!";
        const flex = document.createElement("div");
        flex.style.display = "flex";
        flex.style.flexFlow = "wrap";
        flex.style.justifyContent = "center";
        flex.style.width = "100%";
        flex.appendChild(button);
        return flex;
    }
}