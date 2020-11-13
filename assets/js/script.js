
$('.pop-up').magnificPopup({
    type: 'iframe'
});
/*
$('.mile-counter').counterUp ({
    delay:10,
    counter:1000
});
*/
var increment = document.getElementsByClassName('inc');
var decrement = document.getElementsByClassName('dec');
var number = document.getElementsByClassName('num');
var z = 0;
var y = 0;
for ( i =0 ; i < increment.length ; i ++) {
     increment[i].addEventListener('click' , function(){
        var prevsibling = this.previousElementSibling;
         z+=1;
         prevsibling.value = z;
     });
};

for ( j =0 ; j < decrement.length ; j ++) {
    decrement[j].addEventListener('click' , function(){
       var nextsibling = this.nextElementSibling;
        y-=1;
        nextsibling.value = y;
    });
};

var select = document.getElementById('select-item');
var list = document.getElementById('options-list');

select.addEventListener('click',function(){
    if(list.style.display === 'none') {
      list.style.display ='block';
    }
    else {
        list.style.display = 'none';
    }
});

var options = document.getElementsByClassName('option');

for ( j = 0 ; j <= options.length ; j ++) {
    options[j].addEventListener('click', function(){

        select.innerHTML = this.innerHTML;
    });
};




