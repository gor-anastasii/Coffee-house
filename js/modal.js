 const openModal = document.querySelectorAll('.card-img')
 const modal = document.querySelector('.modal')
 const layout = document.querySelector('.overlay')
 const closeModal = document.querySelector('.modal-close')
 const firstAdd = document.querySelector('.first-add')
 const secondAdd = document.querySelector('.second-add')

 const addContainer = document.querySelectorAll('.add-container')

 openModal.forEach(elem => elem.addEventListener('click', e => {
    let parentElem = e.target.parentNode.classList[2]
    let header = document.querySelector(`.${parentElem} h3`)
    let text = document.querySelector(`.${parentElem} p`)
    let price = document.querySelector(`.${parentElem} span`)
    let imgUrl = e.target.style.backgroundImage 

    document.getElementsByClassName("modal-img")[0].style.backgroundImage = imgUrl
    document.querySelector('.modal #header').innerHTML = header.textContent
    document.querySelector('.modal #text').innerHTML = text.textContent
    document.querySelector('.modal #price').innerHTML = price.textContent

    if(parentElem.split('-').includes('coff')){
        changeAddition('coffee')
    } else if(parentElem.split('-').includes('tea')){
        changeAddition('tea')
    } else if(parentElem.split('-').includes('dessert')){
        changeAddition('dessert')
    }

    layout.classList.add('overlay--active')
    modal.classList.add('modal--active')
 }))

 function changeAddition(flag){
    addContainer.forEach(box => {
        box.classList.remove('hiden-addition')
        if(![...box.classList].includes(flag)){
            box.classList.add('hiden-addition')
        }
    })
 }

 layout.addEventListener('click', () => {
    layout.classList.remove('overlay--active')
    modal.classList.remove('modal--active')
 })

 closeModal.addEventListener('click', () => {
    layout.classList.remove('overlay--active')
    modal.classList.remove('modal--active')
 })

const firstAddBtns = document.querySelectorAll('.first-add .add-btn')
const secondAddBtns = document.querySelectorAll('.second-add .add-btn')

firstAddBtns.forEach(item => item.addEventListener('click', () => {
    firstAddBtns.forEach(elem => elem.classList.remove('active-add'))
    item.classList.add('active-add')
}))

secondAddBtns.forEach(item => item.addEventListener('click', () => {
    let price = document.querySelector('.modal #price')
    if([...item.classList].includes('active-add')){
        price.innerHTML = getChangedPrice(price.innerHTML, 'less')
        item.classList.remove('active-add')
    } else {
        price.innerHTML = getChangedPrice(price.innerHTML, 'more')
        item.classList.add('active-add')
    }
}))

function getChangedPrice(str, flag){
    let priceCount = +str.replace('$', '')
    let step = 0.2
    if(flag == 'less'){
        priceCount -= step
    } else {
        priceCount += step
    }

    return `$${priceCount.toFixed(2)}`
}

