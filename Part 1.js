/* Justin Yeung CWID:50018281
CSIT537: JavaScript Discussion Exercise
Part 1: Write a JavaScript program which will display a button.
When user clicks on this button, your program will ask user to enter exam scores. 
If user entered -999 then your program will stop asking user to enter score and it will output the sum and average of these scores. */

function calcScores(){

    let scores = 0;
    let totalScores = 0
    let averageScores = 0;
    let listOfScores = [];

    while(true){
        scores = parseInt(prompt("Enter a score or enter -999 when you're finished."));
        if(scores == -999 && listOfScores.length == 0){
            document.write("No scores entered.");
            break;
        }
        if(scores == -999){
            break;
        }else{
            listOfScores.push(scores);
        }
    }
    
    if(listOfScores.length !=0){
        for(let i = 0; i < listOfScores.length; i++){
            totalScores += listOfScores[i];
        }
        document.write("The sum of these scores is: " + totalScores + "." + "</br>");

        averageScores = totalScores/listOfScores.length;
        document.write("The average of these scores is: " + averageScores + ".");
    }
}