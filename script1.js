// const daty = new Date().toISOString().split('T')[0];
// document.getElementById('demo').innerHTML = daty;

const progress2 = document.getElementById('progress2')
const prev2 = document.getElementById('prev2')
const next2 = document.getElementById('next2')
const circles2 = document.querySelectorAll('.circle2')
//
let currentActive2 = 1
next2.addEventListener('click', () => {
    currentActive2++
    if(currentActive2 > circles2.length){
        currentActive2 = circles2.length
    }
    updateTwo()
})
prev2.addEventListener('click', () => { 
    currentActive2--
    if(currentActive2 < 1){
        currentActive2 = 1
    }
    updateTwo()
})
function updateTwo(){
    circles2.forEach((circle1, index1) => {
        if(index1  < currentActive2){
            circle1.classList.add('active2')
        } else{
            circle1.classList.remove('active2')
        }
    })
const actives2 = document.querySelectorAll('.active2'); //you are doing this for all the actives in 5 weeks
  
progress2.style.width = (actives2.length - 1) / (circles2.length  - 1) * 100 + '%'
console.log(progress2.style.width)

    if(currentActive2 === 1){
        prev2.disabled = true
    }else if(currentActive2 === circles2.length){
        next2.disabled = true
    }else{
        prev2.disabled = false
        next2.disabled = false
        }
    }
