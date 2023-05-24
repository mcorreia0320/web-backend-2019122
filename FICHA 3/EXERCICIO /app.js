function started() {
    console.log('Download Started...')
};
function update(progress) {
    console.log(progress + "% of Download")
};
function completed() {
    console.log('Download Completed!')
};

function performDownload(started, update, completed) {
    started();
    
    for (let i = 0; i <= 100; i++) {
        update(i);
    }
    
    completed();
};

// performDownload(started, update, completed);

var arrayUtils = require('./ArrayUtils');

var lista = [3,2,7,3,5,4,3,9,21,3,11,34,8];
var a1 = [0, 1, 2, 3, 4];
var a2 = [0, 1, 2, 3];

var empty = arrayUtils.isEmpty(lista);
var max = arrayUtils.max(lista);
var min = arrayUtils.min(lista);
var media = arrayUtils.media(lista);
var indexOf = arrayUtils.indexOf(lista, 3);
var subArray = arrayUtils.subArray(lista, 2, 6);
var isSameLength = arrayUtils.isSameLength(a1, a2);
var reverse = arrayUtils.reverse([1, 2, 3, 4, 5]);
var swap = arrayUtils.swap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9);
var contains = arrayUtils.contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)
var concatenate = arrayUtils.concatenate([5,4,3],[6,7,8])

// console.log(empty);
// console.log(max);
// console.log(min);
// console.log(media);
// console.log(indexOf);
// console.log(subArray);
// console.log(isSameLength);
// console.log(reverse);
// console.log(swap);
// console.log(contains);
// console.log(concatenate);


function Person(firstname) {
    this.benfica = firstname;
}

var p = new Person("David");
var x = 0;
