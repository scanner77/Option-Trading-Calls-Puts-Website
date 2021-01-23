
const progress4 = document.getElementById('progress4')
const prev4 = document.getElementById('prev4')
const next4 = document.getElementById('next4')
const circles4 = document.querySelectorAll('.circle4')
//
let currentActive4 = 1
next4.addEventListener('click', () => {
    currentActive4++
    if(currentActive4 > circles4.length){
        currentActive4 = circles4.length
    }
    updateFour()
})
prev4.addEventListener('click', () => {
    currentActive4--
    if(currentActive4 < 1){
        currentActive4 = 1
    }
    updateFour()
})
function updateFour(){
    circles4.forEach((circle4, index4) => {
        if(index4 < currentActive4){
            circle4.classList.add('active4')
        } else{
            circle4.classList.remove('active4')
        }
    })
const actives4 = document.querySelectorAll('.active4'); //you are doing this for all the actives in 5 weeks
  
progress4.style.width = (actives4.length - 1) / (circles4.length  - 1) * 100 + '%'
console.log(progress4.style.width)

    if(currentActive4 === 1){
        prev4.disabled = true
    }else if(currentActive4 === circles4.length){
        next4.disabled = true
    }else{
        prev4.disabled = false
        next4.disabled = false
        }
    }
