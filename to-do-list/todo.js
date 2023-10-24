let general=document.querySelector(".newElement");
let input=document.querySelector("input")
let btn=document.querySelector(".btn");
let delbtn=document.querySelector(".delbtn");
input.style.outline="none";
btn.addEventListener("click",()=>{
    if(input.value==""){
        alert("please enter your task!");
    }
    else{
        var inpt=document.createElement("input");
        general.appendChild(inpt);
        inpt.value=input.value;
        inpt.style.border="none";
        inpt.style.backgroundColor="transparent";
        inpt.style.color="white";
        var i=document.createElement("i");
        // i.style.marginLeft="8px";
        i.style.fontSize="20px"
        general.appendChild(i);
        i.classList.add("fa-solid","fa-x");
         i.addEventListener("click",()=>{
           inpt.remove();
           i.remove();
        })
    }
    input.value="";
    delbtn.addEventListener("click",()=>{
         inpt.remove();
         i.remove();

    })
})
