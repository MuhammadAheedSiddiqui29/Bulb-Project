const on = document.getElementById("on");
const off = document.getElementById("off");

on.addEventListener("click", () => {
    document.body.style.backgroundColor = "#FFF3B0"; 
    document.body.style.backgroundImage = `
        linear-gradient(
            120deg,
            #FFF3B0 0%,
            #FFD700 50%,
            #87CEEB 100%
        )
    `;
    
})

off.addEventListener("click", () => {
    document.body.style.backgroundColor = "#36454F";
    document.body.style.backgroundImage = "none";
})





