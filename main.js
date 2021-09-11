const button = document.querySelector('input');
const bodyColor = document.querySelector('body');
const header = document.querySelector('.header');
const headerTitle =document.querySelector('.header-title');
const singleSocial = document.querySelectorAll('.single-social');
const singleSocailNumber = document.querySelectorAll('.single-social-year');

const singleBottom =document.querySelectorAll('.single-bottom');
const singleBottomText = document.querySelectorAll('.single-bottom-number');
const modeText =document.querySelector('.switch-text');




let mode='';



function initalize(){
    mode='Dark Mode'
    singleSocial.forEach((singleItem) => {
        singleItem.classList.remove('single-socail-light');
        singleItem.classList.add('single-socail-dark');
    });

    singleBottom.forEach((singleItem)=>{
        singleItem.classList.remove('single-bottom-light');
        singleItem.classList.add('single-bottom-dark');
    })
}
initalize()




button.onchange=function(){

    mode = mode==="Dark Mode" ? "Dark Mode":"Light Mode"
    
    if (mode === "Dark Mode"){
        
        bodyColor.style.backgroundColor="white";
        header.style.backgroundColor="rgb(247,249,254)";
        headerTitle.style.color="rgb(0,0,0)";
        singleSocial.forEach((single)=>{
            single.classList.remove('single-social-dark');
            single.classList.add('single-socail-light')})
        
        singleSocailNumber.forEach((singleItem)=>{singleItem.style.color="rgb(0,0,0)";})

        singleBottom.forEach((singleItem)=>{
            singleItem.classList.add('single-bottom-light');
            singleItem.classList.remove('single-bottom-dark');
        })
       
        singleBottomText.forEach((singleItem)=>{singleItem.style.color="rgb(0,0,0)";})
        
        
        mode = "Light Mode";
        modeText.textContent = mode;
        modeText.style.color="black";
    }
    else{
        bodyColor.style.backgroundColor="rgb(29,32,40)";
        header.style.backgroundColor="rgb(32,34,47)";
        headerTitle.style.color="rgb(240,243,250)";
        singleSocial.forEach((single)=>{
            single.classList.add('single-social-dark');
            single.classList.remove('single-socail-light')})
        
        singleSocailNumber.forEach((singleItem)=>{singleItem.style.color="rgb(240,243,250)";})

        singleBottom.forEach((singleItem)=>{
            singleItem.classList.remove('single-bottom-light');
            singleItem.classList.add('single-bottom-dark');
        })
        
        singleBottomText.forEach((singleItem)=>{singleItem.style.color="rgb(240,243,250)";})

       
        mode = "Dark Mode";
        modeText.textContent = mode;
        modeText.style.color="white";
    }
    
}

