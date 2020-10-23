function promptuser(){
    var txt;
    var name = window.prompt('Enter your name')
    if (name != null || name == ''){

        txt = 'Hello ' + name
    }
    document.getElementById('name').innerHTML = txt;
    // This changes the inner property of name id for the button and assigns the txt value to it

}

//arrays
let car = [];
car.push('kenny')
console.log(car)
