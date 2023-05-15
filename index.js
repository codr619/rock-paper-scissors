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


}
    
    else {
        alert(`only enter "rock" or "paper" or "scissors"`)
    }
}
else{
    alert("i guess not ineterested")
}
}
else{
    alert("another tijme then")
}