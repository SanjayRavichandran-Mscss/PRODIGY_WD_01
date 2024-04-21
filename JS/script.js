var toggle_btn;
var wrapper;
var hamburger_menu;

function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
    wrapper = document.querySelector(".wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector(".main");
declare();

let dark_mode = false;

function toggleAnimation(){
//cloning the wrapper for light and dark mode
    dark_mode = !dark_mode;

    let clone = wrapper.cloneNode(true);
    if(dark_mode){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }
    else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    document.body.classList.add("stop-scrolling");  //To avoid vertical scroll
    main.appendChild(clone);

    clone.addEventListener("animationend" , () =>{
        document.body.classList.remove("stop-scrolling")
        wrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    })
}

function events(){
    toggle_btn.addEventListener("click" , toggleAnimation);
    hamburger_menu.addEventListener("click" , ()=>{
        wrapper.classList.toggle("active");
    })
}

events();