let string="";
let buttons=document.querySelectorAll('button');
let screen=document.querySelector('input');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            screen.value=string;

        }
        else if(e.target.innerHTML=="C" || e.target.innerHTML=="AC" ){
            string="";
            screen.value=string;
        }
        else if(e.target.innerHTML=="X"){
            e.target.innerHTML="*";
            string=string+e.target.innerHTML;
            screen.value=string;

        }
        else{
            string=string+e.target.innerHTML;
            screen.value=string;
        }

    })
})