let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item')
    let thumItems = document.querySelectorAll('.list .list-item')

    if(type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItens[0])
    } else {

    }

}