
const progress5 = document.getElementById('progress5')
const prev5 = document.getElementById('prev5')
const next5 = document.getElementById('next5')
const circles5 = document.querySelectorAll('.circle5')
//
let currentActive5 = 1
next5.addEventListener('click', () => {
    currentActive5++
    if(currentActive5 > circles5.length){
        currentActive5 = circles5.length
    }
    updateFive()
})
prev5.addEventListener('click', () => {
    currentActive5--
    if(currentActive5 < 1){
        currentActive5 = 1
    }
    updateFive()
})
function updateFive(){
    circles5.forEach((circle5, index5) => {
        if(index5  < currentActive5){
            circle5.classList.add('active5')
        } else{
            circle5.classList.remove('active5')
        }
    })
const actives5 = document.querySelectorAll('.active5'); //you are doing this for all the actives in 5 weeks
  
progress5.style.width = (actives5.length - 1) / (circles5.length  - 1) * 100 + '%'
console.log(progress5.style.width)

    if(currentActive5 === 1){
        prev5.disabled = true
    }else if(currentActive5 === circles5.length){
        next5.disabled = true
    }else{
        prev5.disabled = false
        next5.disabled = false
        }
    }
