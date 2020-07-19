var div= document.getElementById('cor');
var img = document.querySelector('#img2');
var menu = document.querySelector('#menu');
var list = document.querySelector('#list-cell');
var roleta = document.querySelector('#roleta');
var figuras = document.querySelector('#figuras');
var excluir = document.querySelector('#excluir');
var i = 1;


div.addEventListener('click',function(){
    div.classList.toggle("color")
});


img.addEventListener('click',function(){
    menu.classList.toggle('menuzim');
    list.classList.toggle('list-celll')
    excluir.classList.toggle('menuzim')
});

function mudar(){
    
}

roleta.addEventListener('wheel',event =>{
    
    if(event.deltaY < 0 ){
        event.target.scrollBy(300,0)
        console.log(event) 

    } else{
        event.target.scrollBy(-300,0)
        console.log(event) 
    }
  
}
 
);

