var increment = document.getElementById('inc');
var decrement = document.getElementById('dec');
var number = document.getElementById('num');
var i = 0;
increment.addEventListener('click',function(){
i += 1;
number.innerHTML = i;
});

decrement.addEventListener('click',function(){
    i-= 1;
    number.innerHTML = i
});

var select = document.getElementById('select-item');
var list = document.getElementById('options-list');

select.addEventListener('click',function(){
    if(list.style.display === 'none') {
      list.style.display ='block';
    }
    else {
        list.style.display = 'none';
    }
})