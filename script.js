function heart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText="❤️";
    heart.style.left=Math.random() * 100 + "vw";
    heart.style.animationDuration=Math.random() * 2 + 3;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove
    }, 3000)
}

function rose(){
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.innerText="🌹";
    rose.style.left=Math.random() * 100 + "vw";
    rose.style.animationDuration=Math.random() * 2 + 3;
    document.body.appendChild(rose);
    setTimeout(() => {
        rose.remove
    }, 3000) 
}

function party(){
    const party = document.createElement("div");
    party.classList.add("party");
    party.innerText="🥳";
    party.style.left=Math.random() * 100 + "vw";
    party.style.animationDuration=Math.random() * 2 + 3;
    document.body.appendChild(party);
    setTimeout(() => {
        party.remove
    }, 3000) 
}

setInterval(party, 200)
setInterval(rose, 200);
setInterval(heart, 200);
