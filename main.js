let audio = new Audio();
audio.src = "f4.mp3";
let element = document.getElementById("div_1");
let elementTwo = document.getElementById("div_2");
let elementThree = document.getElementById("div_3");
let prograse = document.getElementById("pg_container");
let aboutItem = document.getElementById("gird_container");
let aboutItem_2 = document.getElementById("gird_container_next");
let text = document.getElementById("title");
let navBar = document.getElementById("nav");
let WP = document.getElementById("wp_val");
let PHP = document.getElementById("php_val");
let JS = document.getElementById("js_val");
let REACT = document.getElementById("react_val");
let HTML = document.getElementById("html_val");
let CSS_3 = document.getElementById("css_val");
let wp_score = document.getElementById("wp_score");
let php_score = document.getElementById("php_score");
let js_score = document.getElementById("js_score");
let react_score = document.getElementById("react_score");
let html_score = document.getElementById("html_score");
let css_score = document.getElementById("css_score");

window.addEventListener("scroll", ()=>{
    let value  = window.scrollY;
    navBar.classList.toggle("nav_back", window.scrollY > 20);
    element.style.left = value * 0.6 + "px";
    elementTwo.style.right = value * 0.6 + "px";
    text.style.top = value * 2 + "px";
    prograse.style.left = value * 2.1 + "px";
    aboutItem.style.top = value * 0.9 + "px";
    aboutItem_2.style.top = value * -0.9 + "px";
    WP.classList.toggle("score", window.scrollY > 500);
    PHP.classList.toggle("score_2", window.scrollY > 500);
    JS.classList.toggle("score_3", window.scrollY > 500);
    REACT.classList.toggle("score_4", window.scrollY > 500);
    HTML.classList.toggle("score_5", window.scrollY > 500);
    CSS_3.classList.toggle("score_6", window.scrollY > 500);
});

let preload = document.getElementById("container_loader");

window.addEventListener("load", ()=>{
    preload.style.display = "none";
})

let menu = document.getElementById("menu");
let menuclose = document.getElementById("colse");
let ul = document.getElementById("ul");
let link = document.getElementById("link");
let link_2 = document.getElementById("link_2");
let link_3 = document.getElementById("link_3");
let link_4 = document.getElementById("link_4");

menuclose.addEventListener("click", ()=>{
    ul.style.display = "none";
})

link.addEventListener("click", ()=>{
    ul.style.display = "none";
})
link_2.addEventListener("click", ()=>{
    ul.style.display = "none";
})
link_3.addEventListener("click", ()=>{
    ul.style.display = "none";
})
link_4.addEventListener("click", ()=>{
    ul.style.display = "none";
})

menu.addEventListener("click", ()=>{
    ul.style.display = "block";
})

let profe = document.getElementById("profe");


let score_5 = 0;

let set = profe.onmouseenter = function(){
    
    for(let score = 0; score <= 86; score++){
        wp_score.innerText = `${score} %`;
    }

    for(let score_2 = 0; score_2 <= 48; score_2++){
        php_score.innerText = `${score_2} %`;
    }
   
    for(let score_3 = 0; score_3 <= 71; score_3++){
        js_score.innerText = `${score_3} %`;
    }
   
    for(let score_4 = 0; score_4 <= 60; score_4++){
        react_score.innerText = `${score_4} %`;
    }

    for(let score_5 = 0; score_5 <= 95; score_5++){
        html_score.innerText = `${score_5} %`;
    }


    for(let score_6 = 0; score_6 <= 92; score_6++){
        css_score.innerText = `${score_6} %`;
    }


};

function reload(){
    location.reload();
}
function submit(){
    let fn = document.getElementById("fname").value;
    let ln = document.getElementById("lname").value;
    let em = document.getElementById("email").value;
    let ph = document.getElementById("phone").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    let totalname = fn + " " + ln;
    let Password = pass;

    let object = {
        name: totalname,
        email: em,
        Phone: ph,
        Password: Password
    }

    if(fn == "" && ln == "" && em == "" && ph == "" && pass == "" && cpass == ""){
        let containr = document.getElementById("container");
        containr.classList.add("error_animation");
        function reload(){
            location.reload();
        }
        setInterval(reload, 500);
    }
    else if(fn == "" || fn == null){
        let fastname = document.getElementById("fname")
        fastname.classList.add("error_animation");
        function Fremove(){
            fastname.classList.remove("error_animation");
        }
        setInterval(Fremove, 1000);
    }
    else if(ln == "" || ln == null){
        let lastname = document.getElementById("lname");
        lastname.classList.add("error_animation");
        function Lremove(){
            lastname.classList.remove("error_animation");
        }
        setInterval(Lremove, 1000);
    }
    else if(em == "" || em == null){
        let email = document.getElementById("email");
        email.classList.add("error_animation");
        function Eremove(){
            email.classList.remove("error_animation");
        }
        setInterval(Eremove, 1000);
    }
    else if(ph == "" || ph == null){
        let phone = document.getElementById("phone");
        phone.classList.add("error_animation");
        function Phremove(){
            phone.classList.remove("error_animation");
        }
        setInterval(Phremove, 1000);
    }
    else if(pass == "" || pass == null){
        let password = document.getElementById("pass");
        password.classList.add("error_animation");
        function Premove(){
            password.classList.remove("error_animation");
        }
        setInterval(Premove, 1000);
    } 
    else if(cpass == "" || cpass == null){
        let cpassword = document.getElementById("cpass");
        cpassword.classList.add("error_animation");
        function Cremove(){
            cpassword.classList.remove("error_animation");
        }
        setInterval(Cremove, 1000);
    } 
    else{
        console.log(object);
        let mass = document.getElementById("massage");
        mass.classList.add("b");
    }
}