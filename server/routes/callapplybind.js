let name = {
    firstname: 'faiz',
    lastname: 'shaikh',
}

let printFullName = function () {
    console.log(this.firstname);
}

let name1 = {
    firstname: 'zaid',
    lastname: 'shaikh',
}


//function borrowing 
// printFullName.call(name);


// printFullName.apply(name,['solapur',26]);

// let obj = printFullName.bind(name);
// obj();


Function.prototype.myBind = function (...args) {
    let obj = this,
        params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params,...args2]);
    }
}

let obj1 = printFullName.myBind(name);
obj1();




// const funA = function (a, a1) {
//     console.log(a, a1)
// }
// new funA(40, 30)


// let myFunc = {
//     showArgs() {
//         console.log(...arguments);
//     }
// };
// myFunc.showArgs(1, 2, 3, 4);







