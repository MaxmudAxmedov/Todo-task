let elForm = document.querySelector('.form');
let elInput = document.querySelector('.form__input');
let elBtn = document.querySelector('.form__btn');
let elList = document.querySelector('.list');
// let elSelectList = document.querySelector('.select-list');
let elCard = document.querySelector('.card');

// result btn
let btnOne = document.querySelector('.btn-one');
let btnTwo = document.querySelector('.btn-two');
let btnThree = document.querySelector('.btn-three');

// result strong
let elListAll = document.querySelector('.list-all')
let elListComplete = document.querySelector('.list-complete')
let elListUnComplete = document.querySelector('.list-UnComplete')

let data = [];


elList.addEventListener('click', e => {
    if(e.target.matches('.list__item-btn')){
        let btnTarget = e.target.dataset.lineId;
        let removeList = data.find(a => a.id === btnTarget);
        data.splice(removeList, 1);

        createFunc(data, elList);
    }else if(e.target.matches('.list__item-checked')){

        let inputTarget = Number(e.target.dataset.lineId);
        console.log(inputTarget);
        let checkedS = data.find(a => a.id == inputTarget);
        console.log(checkedS);
        checkedS.condition = !checkedS.condition;
        createFunc(data, elList);
    } 
})

// createFunction
function createFunc (array, list) {
    elList.innerHTML = '';

    let idAllLength = data.length;
    elListAll.textContent = idAllLength;

    let idCompLength = data.filter(a => a.condition === true).length;
    elListComplete.textContent = idCompLength;

    let idUnCompLength = data.filter(a => a.condition === false).length;
    elListUnComplete.textContent = idUnCompLength;


    if(elListAll.textContent > 0){
        btnOne.style.boxShadow = 'inset 0 0 5px 5px green';
    }else{
        btnOne.style.boxShadow = 'inset 0 0 5px 5px rgb(255, 160, 160)';
    }

    if(elListComplete.textContent > 0){
        btnTwo.style.boxShadow = 'inset 0 0 5px 5px green';
    }else{
        btnTwo.style.boxShadow = 'inset 0 0 5px 5px rgb(255, 160, 160)';
    }

    if(elListUnComplete.textContent > 0){
        btnThree.style.boxShadow = 'inset 0 0 5px 5px green';
    }else{
        btnThree.style.boxShadow = 'inset 0 0 5px 5px rgb(255, 160, 160)';
    }

    array.forEach(element => {
        let elItem = document.createElement('li');
        let elBtnDelete = document.createElement('button');
        let elChecked = document.createElement('input');


        elItem.classList.add('list__item');
        elItem.textContent = element.title;
        elBtnDelete.dataset.lineId = element.id;
        elBtnDelete.classList.add('list__item-btn');
        elBtnDelete.textContent = 'Delete'
        elChecked.type = 'checkbox';
        elChecked.dataset.lineId = element.id;
        elChecked.classList.add('list__item-checked');

        if(element.condition){
            elChecked.checked = true;
            elItem.style.textDecoration = 'line-through';
        }
        
        elItem.appendChild(elChecked);
        elItem.appendChild(elBtnDelete);
        list.appendChild(elItem);
    });
}

elForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let elInputValue = elInput.value.trim();
    let obj = {
        id: data.length > 0 ? data[data.length -1].id + 1 : 1,
        title: elInputValue,
        condition: false
    }
    data.push(obj);
    elInput.value = '';
    createFunc(data, elList);
})

elCard.addEventListener('click', evt => {

    elList.innerHTML = '';

    let idAllCount = evt.target.matches('.btn-one');
    if(idAllCount){
        let listAll = elList.innerHTML = data
        createFunc(listAll, elList);
    }

    let idCompCount = evt.target.matches('.btn-two');
    if(idCompCount){
        let listTrue = data.filter(a => a.condition == true);
        createFunc(listTrue, elList);
    }

    let idUnCompCount = evt.target.matches('.btn-three');
    if(idUnCompCount){
        let listFalse = data.filter(a => a.condition == false);
        createFunc(listFalse, elList);
    }
})

// elList.addEventListener('click', e => {
//     let star = e.target.matches('.img-star');

//     if(!select.includes(star)){
//         let idNumb = Number(e.target.dataset.idN);
//         let checkStar = data.find(a => a.id == idNumb);
//         select.push(checkStar);
//     }
//     console.log(select);
    
// })

// elKorzinka.addEventListener('click', function() {
//     // elList.innerHTML = '';

//     createFunc(deleteList, elSelectList);
// })

// console.log(deleteList);