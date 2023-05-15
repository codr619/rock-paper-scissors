gameStart=confirm("Do you want to play a game?")
if(gameStart){
rockPaper=confirm("Do you want to play rock paper scissirs?")
if(rockPaper){
    choice=prompt("choose rock paper or scissors...")
    choice=choice.trim()
    
    if(choice==="rock"||choice==="paper"||choice==="scissors")
    {
let opt=["rock","paper","scissors"]
comp=opt[Math.floor(Math.random()*3)]
console.log(comp)
if(choice===comp){
    alert("tie")
}
else{
    comp==="rock"&&choice==="paper"?alert("u win"):
    comp==="rock"&&choice==="scissors"?alert("u lose"):
    comp==="paper"&&choice==="rock"?alert("u lose"):
    comp==="paper"&&choice==="scissors"?alert("u win"):
    comp==="scissors"&&choice==="paper"?alert("u lose"):
    alert("u win");

}
alert(`result:
you:${choice}\n
computer:${comp}`)
playAgain=confirm("play again?")
if(playAgain){
window.location.reload();
}
}
    
    else {
        alert(`only enter "rock" or "paper" or "scissors"`)
        playAgain=confirm("play again?")
if(playAgain){
window.location.reload();
}
    }
}
else{
    alert("i guess not interested")
}
}
else{
    alert("another time then")
}