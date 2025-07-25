
let clock = document.getElementById("box")

function format(unit) {
    return unit < 10 ? "0" + unit: unit
}
function time() {
    const now = new Date()
    let hours=format(now.getHours())
    let minutes=format(now.getMinutes())
    let second=format(now.getSeconds())
    
    
    let currentTime = `${hours} : ${minutes} : ${second} `
    clock.textContent = currentTime

}
time()
setInterval(time , 1000)





