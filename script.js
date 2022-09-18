let menu = document.querySelector('#menu-btn')
let navbar =document.querySelector('.navbar')



menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}



window.onscroll = () =>{
    menu.classList.remove('fas-times')
    navbar.classList.remove('active')

}



var i=0,text;
text = 'submit your idea' 

function typing() {
    if (i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
    
}

typing();