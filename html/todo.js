const result = document.getElementById('result');
const btn = document.getElementById('btn');
const input = document.getElementById('input');

let items = [];
window.onload=()=>{
    //get data from local storage
    items=JSON.parse(localStorage.getItem('list-items')) || [];
    items.forEach(item => addresult(item));

}

btn.addEventListener('click', () => {
    items.push(input.value);
    //set data into localstorage
    localStorage.setItem('list-items',JSON.stringify(items))
    console.log(items)
    addresult(input.value);
    input.value = '';
});

function addresult(val) {
    let para = document.createElement('p');
    para.innerHTML = val;
    result.appendChild(para);

    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(val);
    })

    para.addEventListener('dblclick',()=>{
        result.removeChild(para);
        remove(val);
    })
};

function remove(value){
    let index=items.indexOf(value);
    items.splice(index,1);
    console.log(items);localStorage.setItem('list-items',JSON.stringify(items))

}