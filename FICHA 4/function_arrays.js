var lista = [];

lista.push(function () {
    console.log("Hello World 1")
});

lista.push(function () {
    console.log("Hello World 2")
});

lista.push(function () {
    console.log("Hello World 3")
});

for (let i = 0; i < lista.length; i++) {
    var element = lista[i];
    // element();
}

lista.forEach(element => {
    element();
});



