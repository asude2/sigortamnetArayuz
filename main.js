document.addEventListener("DOMContentLoaded",function(){
    const parallaxSection=document.querySelector('.parallax');

    const options ={
        root:null,
        treshold:1
    }
    const observor = new IntersectionObserver(function(entries, observor){
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                activeParallaxEfect();
            }
        })
    },options)

    observor.observe(parallaxSection)
})
function activeParallaxEfect(){
    window.addEventListener('scroll',function(){
        const scrollPosition=window.scrollY
        const windowHeight=window.innerHeight

        const parallaxText1=document.getElementById('parallax-text-1');
        if(scrollPosition>50 && scrollPosition<300){
            parallaxText1.style.transform = `translateY(-${scrollPosition}px)`
            parallaxText1.style.opacity = `$(1-scrollPosition/300)`
        }

        const parallaxText2=document.getElementById('parallax-text-2');
        if(scrollPosition>300){
            document.body.classList.add('active-text-2')
        }

        const future1=document.querySelector('.parallax-future-1')
        const future2=document.querySelector('.parallax-future-2')

        if(scrollPosition > windowHeight/2){
            document.body.classList.add('scale-future-2')
        }
        else{
            document.body.classList.remove('scale-future-2')
        }

    })
}









window.addEventListener('scroll',function(){
    const telephone=document.querySelector('.sag');
    const content=document.querySelector('.sol');
    if(window.scrollY>1110 && window.scrollY<1800){
        telephone.style.top='170px';
    }
    else{
        telephone.style.position='sticky'
    }
})


window.addEventListener('scroll',function(){
    const feature1=document.querySelector('.parallax-feature-1');
    const feature2=document.querySelector('.parallax-feature-2');
    if(window.scrollY>900 && window.scrollY<1500){
        feature1.style.transform='scale(1)';
        feature1.style.transition='transform 1.5s ease'
        feature1.style.zIndex='1';
        feature2.style.zIndex='0';
    }
   else{
    feature1.style.transform='scale(0.1)';
    feature1.style.transition='transform 0.5s ease';
   }

   if(window.scrollY>1500 && window.scrollY<3000){
        feature2.style.transform='scale(1)';
        feature2.style.transition='transform 1.5s ease';
        feature1.style.zIndex='0';
        feature2.style.zIndex='1';
   }
   else{
    feature2.style.transform='scale(0.1)';
    feature2.style.transition='transform 0.5s ease';
   }

})









/* en baştaki kısım */
window.addEventListener('scroll',function(){
    const myElement=document.getElementById('header');
    if(window.scrollY<50){
        myElement.style.display='flex';
        myElement.style.backgroundColor=' #F3F6F8';
        myElement.style.position='relative'
    }
    else{
        myElement.style.display='none';
    }
    if(window.scrollY>100){
        myElement.style.position='sticky'
        myElement.style.display='flex';
        myElement.style.backgroundColor='white';
    }
});



const buttons=document.getElementsByClassName('btn')
var oldSection='reklam'
var newSection='reklam'

Array.from(buttons).forEach(button=>{
    button.addEventListener('click',function(){
        Array.from(buttons).forEach(b=>{
            b.classList.remove('active')
        })
        button.classList.add('active')
        oldSection=newSection
        newSection=button.dataset.button
        setActive(newSection,oldSection)
    })
})

function setActive(ns,os){
    document.querySelector(`.${os}`).classList.add('d-none')
    document.querySelector(`.${ns}`).classList.remove('d-none')

    const prevButton=document.querySelector(`.${ns} .fa-chevron-left`)
    const nextButton=document.querySelector(`.${ns} .fa-chevron-right`)
    const carouselContent=document.querySelector(`.${ns} .carousel-content`)
    const circles=document.querySelectorAll(`.${ns} .fa-circle`)
    const scrollAmount=document.querySelector(`.${ns} .carousel-1`).clientWidth;
    let carouselIndex=0

    carouselContent.scrollBy({left:0,behavior:'instant'})
    Array.from(circles).forEach((circle,index)=>{
        circle.classList.remove('active2')
        if(index===0){
            circle.classList.add('active2')
        }
    })


    nextButton.addEventListener('click',function(){
        carouselIndex+=1
        if(carouselIndex>circles.length-1){
            carouselIndex=0;
            circles.forEach((circle,index)=>{
                if(index===carouselIndex){
                    circle.classList.add('active2')
                }else{
                    circle.classList.remove('active2')
                }
            })
            carouselContent.scrollTo({left:scrollAmount*carouselIndex,behavior:'smooth'})
        }else{
            Array.from(circles).forEach((circle,index)=>{
                if(index===carouselIndex){
                    circle.classList.add('active2')
                }else{
                    circle.classList.remove('active2')
                }
            })
            carouselContent.scrollTo({left:scrollAmount*carouselIndex,behavior:'smooth'})
        }
    })

    prevButton.addEventListener('click',function(){
        carouselIndex-=1
        if(carouselIndex<0){
            carouselIndex=circles.length-1;
            circles.forEach((circle,index)=>{
                if(index===carouselIndex){
                    circle.classList.add('active2')
                }else{
                    circle.classList.remove('active2')
                }
            })
            carouselContent.scrollTo({left:scrollAmount*carouselIndex,behavior:'smooth'})
        }else{
            Array.from(circles).forEach((circle,index)=>{
                if(index===carouselIndex){
                    circle.classList.add('active2')
                }else{
                    circle.classList.remove('active2')
                }
            })
            carouselContent.scrollTo({left:scrollAmount*carouselIndex,behavior:'smooth'})
        }
    })


    Array.from(circles).forEach((circle,index)=>{
        circle.addEventListener('click',function(){
            Array.from(circles).forEach(c=>{
                c.classList.remove('active2')
            })
            circle.classList.add('active2')
            carouselContent.scrollTo({left:scrollAmount*index, behavior:'smooth'})
    
        })
    
    
    })
}

document.addEventListener('DOMContentLoaded',function(){
    setActive(newSection,oldSection)
})



const üstComp=document.querySelector('.üst-comp2')
const altComp=document.querySelector('.alt-comp2')
const üstComp2=document.querySelector('.üst-comp3')

const chevronOn=document.querySelector('.click-on')
const chevronOff=document.querySelector('.click-off')

const questions=document.querySelectorAll('.question')
const questHeader=document.querySelectorAll('.quest-header')
const questContent=document.querySelectorAll('.quest-content')

chevronOn.addEventListener('click',function(){
    üstComp.classList.remove('d-none')
    üstComp2.classList.remove('d-none')
    altComp.classList.remove('d-none')
    chevronOn.classList.add('d-none')
    chevronOff.classList.remove('d-none')
})

chevronOff.addEventListener('click',function(){
    üstComp.classList.add('d-none')
    üstComp2.classList.add('d-none')
    altComp.classList.add('d-none')
    chevronOn.classList.remove('d-none')
    chevronOff.classList.add('d-none')
})


questHeader.forEach(header => {
    header.addEventListener('click', function () {
        questContent.forEach(content => {
            content.classList.add('d-none')
        })
        const content = this.nextElementSibling;
        content.classList.remove('d-none')
        content.style.transform="scale";
        content.style.transition="all 1s ease"
    })
})



const tostRow = Array.from(document.querySelectorAll('.tost-row'))
const tostMenu = Array.from(document.querySelectorAll('.tost-menü'))

function toggleTost(i) {
    tostMenu.forEach((t, index) => {
        const icon = tostRow[index].querySelector('i') // ikon tost-row'un içinde olmalı

        if (index === i) {
            if (t.classList.contains('open')) {
                t.classList.remove('open')
                t.classList.add('close')
                icon.classList.remove('fa-chevron-up')
                icon.classList.add('fa-chevron-down') 
            } else {
                t.classList.remove('close')
                t.classList.add('open')
                icon.classList.remove('fa-chevron-down')
                icon.classList.add('fa-chevron-up') 
            }
        } else {
            t.classList.remove('open')
            t.classList.add('close')
            tostRow[index].querySelector('i').classList.remove('fa-chevron-up')
            tostRow[index].querySelector('i').classList.add('fa-chevron-down') 
        }
    })
}

tostRow.forEach((row, index) => {
    row.addEventListener('click', () => {
        toggleTost(index)
    })
})





/*baştaki butonların değiştirilip stillendirilmesi*/ 
let loginButton=document.querySelector('.header-contact')
let headerButton=document.querySelector('.header-button')
let headerButton2=document.querySelector('.header-button2')

window.addEventListener('scroll',()=>{
    if(window.scrollY>700){
        loginButton.classList.add('d-none')
        headerButton2.classList.remove('d-none')
        headerButton.style.height="3rem"
        headerButton.style.marginRight="1rem"
        headerButton.style.color="#0089ec"
        headerButton.style.backgroundColor="white"
        headerButton.style.border="0.2px solid #0089ec"
    }
    else{
        loginButton.classList.remove('d-none')
        headerButton2.classList.add('d-none')
        headerButton2.style.color="white"
        headerButton2.style.backgroundColor="#0089ec"
        headerButton2.style.border="0.1px solid white"
        headerButton2.style.padding="0 2rem"
        headerButton2.style.borderRadius="10px"
        headerButton2.style.fontSize="17px"
        headerButton2.style.cursor="pointer"
        headerButton.style.height="3rem"
        headerButton.style.marginRight="0"
        headerButton.style.color="white"
        headerButton.style.backgroundColor="#0089ec"
        headerButton.style.border="0.2px solid rgb(255, 255, 255)"
    }
    
})

