const topBar = document.querySelector(".topbar");
const scrollers = document.querySelectorAll(".marquee");
const counters = document.querySelectorAll(".counter");
const speed = 300;



function changeTopBarBg() {
    if (window.scrollY > 1) {
        topBar.classList.add("changeBg");
    } else {
        topBar.classList.remove("changeBg");
    }
}

window.addEventListener("scroll", changeTopBarBg);

counters.forEach(counter =>{
    const animate = ()=>{
        const value = +counter.getAttribute("num");
        const data = +counter.innerText;

        const time = value / speed;
        if(data < value){
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1); 
        }else{
            counter.innerText = value;
    
        }
    }
    animate();
    
})
