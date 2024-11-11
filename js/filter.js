const filterBox = document.querySelectorAll('.card')
const filterCoffee = document.querySelector('li.coffee')
const filterTea = document.querySelector('li.tea')
const filterDessert = document.querySelector('li.dessert')

const arrOfFilter = [filterCoffee, filterTea, filterDessert]

filterCoffee.addEventListener('click', filter)
filterTea.addEventListener('click', filter)
filterDessert.addEventListener('click', filter)


function filter(e){
    arrOfFilter.forEach(item => item.classList.remove('active-filter-nav'))
    this.classList.add('active-filter-nav')

    let filterClass = this.dataset['filter']
    
    filterBox.forEach(elem => {
        elem.classList.remove('hide')
        if(!elem.classList.contains(filterClass)){
            elem.classList.add('hide')
        }
    })
}