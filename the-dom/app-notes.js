//About timing with DOM
window.onload = () => {
    console.log("Hola");
};

document.onreadystatechange = () => {
    if (document.readyState === "loading") console.log("We are loading"); //Not going to be printed
    if (document.readyState === "interactive") console.log("We are interactive"); //Print before the onload
    if (document.readyState === "complete") console.log("We are complete"); //After process of loading the page is complete, window onload starts
    console.log(document.readyState);
};