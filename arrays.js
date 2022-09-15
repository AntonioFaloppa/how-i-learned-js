////1
function mezclar (...ingredientes) {
    return ingredientes.join(",") + " todo mezclado ahí";
};
function freir (...ingredientes) {
    const _ingredientes = [
        ...ingredientes,
        "vegetal oil"
    ];
    return _ingredientes.join(",") + " todo frito ahí";
};
function comprarIngredientes (){
    return [
        "mushrooms",
        "pasta",
        "milk cream",
        "cheese",
        "bacon"
    ];
};
function hacerAlmuerzo (ingredientes, metodoDeCocina) {
    console.log(metodoDeCocina);
    return metodoDeCocina(ingredientes);
};
console.log(hacerAlmuerzo(comprarIngredientes(), mezclar));
console.log(hacerAlmuerzo(comprarIngredientes(), freir));
//2




