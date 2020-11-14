const increment = document.getElementsByClassName('inc');
const decrement = document.getElementsByClassName('dec');
const number = document.getElementsByClassName('num');
const select = document.getElementById('select-item');
const list = document.getElementById('options-list');
const options = document.getElementsByClassName('option');
let z = 0; let y = 0;

for (let i =0 ; i < increment.length ; i ++) {
     increment[i].addEventListener('click' , function(){
        let prevSibling = this.previousElementSibling;
        z = Number(prevSibling.value);
        z+=1;
        prevSibling.value = z;
     });
}

for (let j =0 ; j < decrement.length ; j ++) {
    decrement[j].addEventListener('click' , function(){
        let prevSibling = this.nextElementSibling;
        y = Number(prevSibling.value);
        y-=1;
        prevSibling.value = y;
    });
}

select.addEventListener('click',function(){
    list.classList.toggle('display-block');
    for (let j = 0 ; j <= options.length ; j ++) {
        options[j].addEventListener('click', function(){
            select.innerHTML = this.innerHTML;
            list.classList.remove('display-block');
        });
    }
});

$('.mile-counter').counterUp({
    delay: 10,
    time: 1000
});;