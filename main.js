let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")

function changeColor(){
    setTimeout(() => {
        card1.classList.add("red")
        card2.classList.remove("yellow")
        card3.classList.remove("green")
    }, 0)
    setTimeout(() => {
        card1.classList.remove("red")
        card2.classList.add("yellow")
        card3.classList.remove("green")
    }, 1500)
    setTimeout(() => {
        card1.classList.remove("red")
        card2.classList.remove("yellow")
        card3.classList.add("green")
    }, 3000)
}

changeColor()
setInterval(changeColor, 4500) 