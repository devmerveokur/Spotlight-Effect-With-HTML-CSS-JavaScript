const spotlight = document.querySelector(".spotlight");
const overlay = document.querySelector(".overlay");

let scrollAmount = 0;
 
let yPos = 0;
let xPos = 0;

spotlight.addEventListener("mousemove", handleMoveEvent);
spotlight.addEventListener("touchmove", handleMoveEvent);

function handleMoveEvent(e) {

    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;

    setTimeout (() => {
        yPos = clientY - overlay.offsetHeight / 2;
        xPos = clientX - overlay.offsetWidth / 2;
        scrollAmount = overlay.scrollTop + yPos;
        overlay.style.top = `${scrollAmount}px`;
        overlay.style.left = `${xPos}px`;
    }, 100);  
}