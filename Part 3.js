/* Justin Yeung CWID:50018281
CSIT537: JavaScript Discussion Exercise 
Part 3: Write a JavaScript program which will ask user to enter four names. The first prompt will say “Enter first name”, 
and the second prompt will say “Enter second name”, and then the third, and then the fourth name.
After retrieve these four names, your program will output these names in input order, one name a line.
After that, your program will output the names in reversed order. Lastly, your program will output the names in sorted order. 
The following shows a test run when user entered John, Peter, Marry, and Paul.*/

let nameList = [];
let name1 = prompt("Enter first name.");
    nameList.push(name1);
let name2 = prompt("Enter second name.");
    nameList.push(name2);
let name3 = prompt("Enter third name.");
    nameList.push(name3);
let name4 = prompt("Enter fourth name.");
    nameList.push(name4);


document.write("You entered:" + "<br>");

for(let i = 0; i < nameList.length; i++){
    document.write(nameList[i] + "<br>");
}

document.write("<br>" + "The names in reversed order: " + "<br>");

nameList.reverse();
for(let i = 0; i < nameList.length; i++){
    document.write(nameList[i] + "<br>");
}

document.write("<br>" + "The names in sorted order: " + "<br>");

nameList.sort();
for(let i = 0; i < nameList.length; i++){
    document.write(nameList[i] + "<br>");
}