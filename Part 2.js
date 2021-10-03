/* Justin Yeung CWID:50018281
CSIT537: JavaScript Discussion Exercise 
Part 2: Write a JavaScript program which will display a button and ask user to enter one character and a name. 
Your program will then put the name inside a box which is formed by using the character entered. */

function nameInBox(){
    let symbol = prompt("Type a symbol to border your name, such as * or #");
    let name = prompt("What is your name?");

    for(let i = 0; i < 2*name.length; i++){
        document.write(symbol);
    }
    
    document.write("<br>");

    for(let i = 0; i < name.length/2; i++){
        document.write(symbol);
    }

    document.write(name);

    for(let i = 0; i < name.length/2; i++){
        if(name.length % 2 != 0 && i == 0){
            i++;
        }
    
        document.write(symbol);
    }

    document.write("<br>");

    for(let i = 0; i < 2*name.length; i++){
        document.write(symbol);
    }

}