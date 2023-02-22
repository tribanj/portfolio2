// var typed = new Typed('multiple-text',{
//    strings:["Frontend Developer", "You Tuber", "Blogger", "Graphics Designer"],
//    typeSpeed: 100,
//    backSpeed: 100,
//    backDelay: 1000,
//    loop: true
// })
const text = document.querySelector(".sec-text");

const textLoad = () =>{
    setTimeout(()=>{
        text.textContent = "Freelancer"
    },0);
}