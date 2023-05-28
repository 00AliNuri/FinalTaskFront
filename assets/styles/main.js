const myArrow = document.getElementById('arrow')
const myShape = document.querySelector('.shape')
const myBtn = document.querySelector('.btn')


let state = 'rotate(180deg)'
let state1 = '1'

myArrow.addEventListener('click', ()=>{
    myArrow.style.transform = state
    state = state == 'rotate(180deg)' ? 'rotate(360deg)' : 'rotate(180deg)'
})

myBtn.addEventListener('click', ()=>{
    myShape.style.opacity = state1
    state1 = state1 == '1' ? '0' : '1'
    myArrow.style.transform = state
    state = state == 'rotate(180deg)' ? 'rotate(360deg)' : 'rotate(180deg)'
})

