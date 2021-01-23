
const progress3 = document.getElementById('progress3')
const prev3 = document.getElementById('prev3')
const next3 = document.getElementById('next3')
const circles3 = document.querySelectorAll('.circle3')
//
let currentActive3 = 1
next3.addEventListener('click', () => {
    currentActive3++
    if(currentActive3 > circles3.length){
        currentActive3 = circles3.length
    }
    updateThree()
})
prev3.addEventListener('click', () => {
    currentActive3--
    if(currentActive3 < 1){
        currentActive3 = 1
    }
    updateThree()
})
function updateThree(){
    circles3.forEach((circle3, index3) => {
        if(index3  < currentActive3){
            circle3.classList.add('active3')
        } else{
            circle3.classList.remove('active3')
        }
    })
const actives3 = document.querySelectorAll('.active3'); //you are doing this for all the actives in 5 weeks
  
progress3.style.width = (actives3.length - 1) / (circles3.length  - 1) * 100 + '%'
console.log(progress3.style.width)

    if(currentActive3 === 1){
        prev3.disabled = true
    }else if(currentActive3 === circles3.length){
        next3.disabled = true
    }else{
        prev3.disabled = false
        next3.disabled = false
        }
    }
