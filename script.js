/* *************************FIRST-WEEK**************************** */
// const daty = new Date().toISOString().split('T')[0];
// document.getElementById('demo').innerHTML = daty;




const progress1 = document.getElementById('progress1')
const prev = document.getElementById('prev1')
const next = document.getElementById('next1')
const circles = document.querySelectorAll('.circle1')

let currentActive = 1
next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})
prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    update()
})
function update(){
    circles.forEach((circle, index) => {
        if(index  < currentActive){
            circle.classList.add('active1')
        } else{
            circle.classList.remove('active1')
        }
    })
    const actives = document.querySelectorAll('.active1') //you are doing this for all the actives in 5 weeks
    // actives.length = 2;
    // console.log((actives.length / circles.length)*50 + '%')
    progress1.style.width = (actives.length-1) / (circles.length  -1) * 100 + '%'
    console.log(progress1.style.width);

    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
 }

 function firstDay(){
     const x = document.getElementById('firstday');
     x.innerHtml = alert(
         "Hi",
         "Hi",
      
     )
 }