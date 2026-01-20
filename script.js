let button = document.getElementById('btn');

let coin = document.querySelector('.coin');

let sound = document.getElementById('music')

// let tail = document.querySelector('.tail');
  
let angle = 0; //multiple time spins

button.addEventListener("click",()=>{

    sound.currentTime = 0;
    
    sound.play();
    

    let value = ["head","tail"];

    let random = Math.floor(Math.random()* value.length);


    if(random === 0)
    {
        // head.style.display = "flex"
        // head.style.background="red"
        // head.style.transition = "transform 1s"
        // head.style.color = "white"
        angle += 720; // HEAD
        coin.style.transform = `rotateY(${angle}deg)`;
        // tail.style.display = "none"

        console.log(`head ${value[random]}`)
    }
    else
    {

        // tail.style.display="flex"
        // tail.style.background="yellow"
        // tail.style.transition = "transform 1s"
        // tail.style.color = "black"
         angle += 900; // TAIL
         coin.style.transform = `rotateY(${angle}deg)`;
        // head.style.display="none"
        console.log(`tail${value[random]}`)
 
    }

    
});


