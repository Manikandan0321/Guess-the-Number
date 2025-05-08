// selecting  Element
var inputbox = document.getElementById("inputbox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var noofguess = 3

// generate random number from 1 to 5
var randomnumber = Math.floor(Math.random()*10)+1
if (randomnumber>5)
{
    randomnumber=randomnumber-5
}



// event headler function
function checkthenumber()
{
    if (inputbox.value == randomnumber)
    {
        alert("you got right, congratulation")
        result.textContent = "youur are right"
    }

    else{
        noofguess=noofguess-1
        if(noofguess==0)   

        {
            noofguess = 3
            alert("you lost, generate random number is : "+randomnumber)

        }

        guesscount.textContent = "available guesses : "+noofguess
        result.textContent = "you are wrong !"
    }
}