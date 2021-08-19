// Before

function newFunction(name, age, country) {
    var name = name || 'Eduardo';
    var age = age || 27;
    var country = country || 'MX';
    console.log(name, age, country)
}

// es6

function newFunction2(name = 'Eduardo', age = 27, country = 'MX') {
    console.log(name, age, country)
}

newFunction2()
newFunction2('Ricardo', 23, 'MX')