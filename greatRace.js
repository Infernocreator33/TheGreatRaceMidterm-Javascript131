var thunderBackground = document.getElementById("background");
thunderBackground.src = "thunderCourt.gif";
var starterPosition = 0;
var myRace;
var stopLight = document.getElementById("Light");
var durant = document.getElementById("Durant");
var lebron = document.getElementById("Lebron");
var harden = document.getElementById("Harden");
var votes = document.getElementById("Votes");
var durantPosition = 0;
var lebronPosition  = 0;
var hardenPosition = 0;
function loadBackGround()
{    
    stopLight.style.position = "absolute";
    stopLight.style.top = "200px";  
    durant.style.position = "absolute";
    durant.style.right = "0px";
    lebron.style.position = "absolute";
    lebron.style.right = "0px";
    lebron.style.top = "750px";
    harden.style.position = "absolute";
    harden.style.right = "0px";
    harden.style.top = "505px";
}


function setUpRacers()
{
    durantPosition = 0;
    lebronPosition  = 0;
    hardenPosition = 0;
    votes.style.visibility = "hidden";
    stopLight.src = "redlight.png";
    durant.src = "KevinDurantRunning.jpg";
    durant.className = "img-circle";
    durant.style.visibility ="visible";
    lebron.src = "LebronRunning.jpg";
    lebron.className = "img-circle";
    lebron.style.visibility = "visible";
    harden.src = "HardenRunning.jpg";
    harden.className = "img-circle";
    harden.style.visibility = "visible";
    durant.style.position = "absolute";
    durant.style.left = "0px";
    lebron.style.position = "absolute";
    lebron.style.left = "0px";
    lebron.style.top = "750px";
    harden.style.position = "absolute";
    harden.style.left = "0px";
    harden.style.top = "505px";

}
function startRace()
{   
    setUpRacers();
    myRace = setInterval(race, 75);
}
function race()
{
    var raceWin = 1250;
    if(lebronPosition <= raceWin || hardenPosition <= raceWin || durantPosition <= raceWin)
    {
        stopLight.src = "greenlight.png";
        var randHarden = Math.ceil(Math.random() * 25);
        hardenPosition += randHarden;
        harden.style.left = hardenPosition + 'px';
        console.log("Harden's Votes: " + hardenPosition);
        var randLebron = Math.ceil(Math.random() * 25);
        lebronPosition += randLebron;
        lebron.style.left = lebronPosition + 'px';
        console.log("Lebron's Votes: " + lebronPosition);
        var randDurant = Math.ceil(Math.random() * 25);
        durantPosition += randDurant;
        durant.style.left = durantPosition + 'px';
        console.log("Durant's Votes: " + durantPosition);
        votes.className = "show";
        votes.style.visibility = "visible";
        votes.value = 
        " VOTES FOR MVP\n\nVotes Needed To Win >= " + raceWin + "\n\n" +
        "Durant Votes: " + durantPosition + " (player on top)" +
        "\nHarden Votes: " + hardenPosition + " (player in the middle)" +
        "\nLebron Votes: " + lebronPosition + " (player  on bottom)";
    }
     if(durantPosition >= raceWin && durantPosition > lebronPosition && durantPosition > hardenPosition)
    {
        clearInterval(myRace);
        console.log("Durant Won");
        stopLight.src = "redlight.png";
        durant.className = "img-rounded";
        durant.src = "durantVictory.jpg";
        lebron.style.visibility = "hidden";
        harden.style.visibility = "hidden";
        stopLight.addEventListener("click", loadBackGround);
        stopLight.addEventListener ("click", startRace);
    }
    if(lebronPosition >= raceWin && lebronPosition > durantPosition && lebronPosition > hardenPosition)
    {
        clearInterval(myRace);
        console.log("Lebron Won");
        stopLight.src = "redlight.png"; 
        lebron.className ="img-rounded";
        lebron.src = "lebronVictory.jpg";
        durant.style.visibility = "hidden";
        harden.style.visibility = "hidden";
        stopLight.addEventListener("click", loadBackGround);
        stopLight.addEventListener("click", startRace);
    }
    if(hardenPosition >= raceWin && hardenPosition > durantPosition && hardenPosition > lebronPosition)
    {
        clearInterval(myRace);
        console.log("Harden Won");
        stopLight.src = "redlight.png";
        harden.className = "img-rounded";
        harden.src = "hardenVictory.jpg";
        lebron.style.visibility = "hidden";
        durant.style.visibility = "hidden";
        stopLight.addEventListener("click", loadBackGround);
        stopLight.addEventListener("click", startRace);
    }
}
harden.addEventListener("click", setUpRacers);
durant.addEventListener("click", setUpRacers);
lebron.addEventListener("click", setUpRacers);
stopLight.addEventListener("click", startRace);
window.addEventListener("load", loadBackGround);
