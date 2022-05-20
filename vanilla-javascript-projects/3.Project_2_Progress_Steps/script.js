const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1; //index (whichever is active set to default value 1)

next.addEventListener('click',() => {
    currentActive++;
    // console.log(currentActive);
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    // console.log(currentActive);
    update();
})
prev.addEventListener('click', () => {
    currentActive--;
    // console.log(currentActive);
    if(currentActive < 1) {
        currentActive = 1;
    }
    // console.log(currentActive);
    update();
})
function update() {
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    // console.log((actives.length / circles.length)*100+ '%'); // 50%, 75%, 100%
    // console.log(((actives.length - 1) / (circles.length - 1)*100)+ '%');  // 33.33%, 66.66%, 100%
   
     progress.style.width = (actives.length - 1) / (circles.length - 1 ) * 100 + '%'; // 33, 66, 100
    
    if(currentActive === 1) {
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true;
    } else{
        prev.disabled= false;
        next.disabled = false;
    }
}