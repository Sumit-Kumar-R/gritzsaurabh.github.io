const headerMailNo = document.querySelectorAll('.mail-no')
const envelopeMoblieIcon = document.querySelectorAll('.envelope-moblie-icon')
const envelopeMoblieText = document.querySelectorAll('.envelope-moblie-text')

const navProductsImpLink = document.querySelectorAll('.product-implink')
const navProduts = document.querySelectorAll('.nav-products')
const navImportantLink = document.querySelector('.nav-important-link')
const dropDownIcon = document.querySelectorAll('.dorpdown-icon-rotate')
const dropDownIcon2 = document.querySelectorAll('.dorpdown-icon2-rotate')

const header = document.getElementsByTagName('header');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const upArrow = document.querySelector('.take-us-to-top');

const topCoverPhotos = document.getElementById('top-photos');
let topCoverPhotosBackground = window.getComputedStyle(topCoverPhotos, '::before');

const animatedBox = document.querySelector('.animated-box')
const animatedBox2 = document.querySelector('.animated-box2')
const animatedBox3 = document.querySelector('.animated-box3')

const animatedBoxPara = document.getElementsByClassName('animated-box-p');
let animatedBoxParaArray = Array.from(animatedBoxPara)
const animatedBoxPara2 = document.getElementsByClassName('animated-box-p2');
let animatedBoxParaArray2 = Array.from(animatedBoxPara2)
const animatedBoxHeading = document.getElementsByClassName('animated-box-heading');
let animatedBoxHeadingArray = Array.from(animatedBoxHeading)
const boxBtn1 = document.getElementsByClassName('box-btn1');
let boxBtn1Array = Array.from(boxBtn1)
const boxBtn2 = document.getElementsByClassName('box-btn2');

leftSlideArrow = document.querySelector('.left-slider')
rightSlideArrow = document.querySelector('.right-slider')

// Mouse Hover on TOP HEADER for trasitioning icon and text at different speed (transform apply for both doubt)
headerMailNo.forEach(head => {
    head.addEventListener('mouseenter', () => {
        envelopeMoblieIcon.forEach(icon => {
            icon.style.transition = 'all 1.5s ease-in-out 0s'
            // icon.style.transform = 'rotate(-180deg)'
            // console.log(icon)
        })
        envelopeMoblieText.forEach(icon => {
            icon.style.transition = 'all .5s ease-in-out 0s'
            // console.log(icon)
        })
    })
})


// below code is for rotating drop-down icon and transiont drop down icon in different speed

navProduts.forEach(nav => {
    nav.addEventListener('mouseenter', () => {
        dropDownIcon.forEach(icon => {
            icon.style.transition = 'all 1s ease-in-out 0s'
            icon.style.transform = 'rotate(-180deg)'
        })
    })
    nav.addEventListener('mouseleave', () => {
        dropDownIcon.forEach(icon => {
            icon.style.transform = 'rotate(0deg)'
            icon.style.transition = 'all 1s ease-in-out 0s'
        })
    })
})


navImportantLink.addEventListener('mouseenter', () => {
    dropDownIcon2.forEach(icon => {
        icon.style.transition = 'all 1s ease-in-out 0s'
        icon.style.transform = 'rotate(-180deg)'
    })
})
navImportantLink.addEventListener('mouseleave', () => {
    dropDownIcon2.forEach(icon => {
        icon.style.transform = 'rotate(0deg)'
        icon.style.transition = 'all 1s ease-in-out 0s'
    })
})


// below code is for transition in sticky navbar after scrolling

window.addEventListener('scroll', function (e) {
    if (window.pageYOffset >= 40) {
        // console.log(window.pageYOffset)
        navbar.style.background = 'white'
        navbar.style.height = '80px'
        logo.style.transition = 'all 1s ease-in-out 0s'
        logo.style.height = '80px'
        logo.style.width = '153px'

        // --------------- take us to top -----------------------
        // upArrow.style.display = 'flex'
        upArrow.style.bottom = '40px'
        upArrow.style.opacity = '1'
        upArrow.style.transition = 'all .5s ease-in-out 0s'
    }
    else {
        navbar.style.background = 'rgb(205,203,203)'
        navbar.style.height = '90px'
        navbar.style.transition = 'all 1s ease-in-out 0s'
        logo.style.height = '90px'
        logo.style.width = '172px'
        console.log('less than 40 oxz')

        // --------------- take us to top -----------------------
        // upArrow.style.display = 'none'
        upArrow.style.transition = 'all .5s ease-in-out 0s'
        upArrow.style.bottom = '-40px'
        upArrow.style.opacity = '0'
    }
})

// =======================================================================

// console.log('working JS')

window.addEventListener('click' , () => {
    // // console.log('55')
    // window.scrollTo = 0
    // console.log(window.scrollY)
})

// ======================== Auto change for cover photos =======================================================

let photo = 5
let indexValueOfAnimatedBox = 1
// topCoverPhotos.style.setProperty('--background', `url(/TOPCOVERPHOTOS/7.jpg)`)

function changeBackgroundPhotos(){
    if (photo < 5) {
        photo = 7
    }

    if (photo > 7) {
        photo = 5
    }

    setTimeout(() => {
        topCoverPhotos.style.setProperty('--opac', '1')
        topCoverPhotos.style.setProperty('--transition', 'all 2s ease 0s')
    }, 300);
    topCoverPhotos.style.setProperty('--opac', '.5')
    topCoverPhotos.style.setProperty('--transition', 'all 1s ease 0s')
    topCoverPhotos.style.setProperty('--background', `url(TOPCOVERPHOTOS/${photo}.jpg)`)
}


setInterval(() => {
    changeBackgroundPhotos();

    if (indexValueOfAnimatedBox == 3){
        indexValueOfAnimatedBox = 0
    }

    setTimeout(() => {
        animatedBoxParaArray[indexValueOfAnimatedBox].style.opacity = '1'
        animatedBoxParaArray[indexValueOfAnimatedBox].style.transition = 'all 3s ease 0s'
        animatedBoxParaArray[indexValueOfAnimatedBox].style.top= '0px'
        animatedBoxHeadingArray[indexValueOfAnimatedBox].style.left= '55px'
        animatedBoxHeadingArray[indexValueOfAnimatedBox].style.opacity= '1'
        animatedBoxHeadingArray[indexValueOfAnimatedBox].style.transition= 'all 1s ease 0s'
        animatedBoxParaArray2[indexValueOfAnimatedBox].classList.add('animation-para2')
        boxBtn1Array[indexValueOfAnimatedBox].style.top = '0px'
        boxBtn1Array[indexValueOfAnimatedBox].style.transition = 'all 1s ease 0s'
        boxBtn2[indexValueOfAnimatedBox].style.top = '0px'
        boxBtn2[indexValueOfAnimatedBox].style.transition = 'all 1s ease 0s'
        boxBtn1Array[indexValueOfAnimatedBox].style.opacity = '1'
        boxBtn2[indexValueOfAnimatedBox].style.opacity = '1'
        // console.log(indexValueOfAnimatedBox)
        indexValueOfAnimatedBox++
        // console.log(photo)
    }, 1000);
    
    boxBtn1Array[indexValueOfAnimatedBox].style.opacity = '0'
    boxBtn2[indexValueOfAnimatedBox].style.opacity = '0'
    boxBtn1Array[indexValueOfAnimatedBox].style.top  = '50px'
    boxBtn2[indexValueOfAnimatedBox].style.top = '-45px'
    animatedBoxParaArray2[indexValueOfAnimatedBox].classList.remove('animation-para2')
    animatedBoxParaArray[indexValueOfAnimatedBox].style.opacity = '0'
    animatedBoxParaArray[indexValueOfAnimatedBox].style.transition = 'all 1s ease 0s'
    animatedBoxParaArray[indexValueOfAnimatedBox].style.top= '-90px'
    animatedBoxHeadingArray[indexValueOfAnimatedBox].style.left= '-400px'
    animatedBoxHeadingArray[indexValueOfAnimatedBox].style.opacity= '0'
    // animatedBoxHeadingArray[indexValueOfAnimatedBox].style.transition= 'all 1s ease 0s'
    // console.log(animatedBoxParaArray[photo - 4])
    if (photo == 6) {
        animatedBox.style.display = 'flex'
        animatedBox2.style.display = 'none'
        animatedBox3.style.display = 'none'
        // console.log('1')
    }
    else if (photo == 5) {
        animatedBox2.style.display = 'flex'
        animatedBox.style.display = 'none'
        animatedBox3.style.display = 'none'
        // console.log('2')
    }
    else if (photo == 7) {
        animatedBox3.style.display = 'flex'
        animatedBox2.style.display = 'none'
        animatedBox.style.display = 'none'
        // console.log('3')
    }
    // console.log(photo)
    photo--
}, 5000);

leftSlideArrow.addEventListener('click' , ()=>{
    photo--
    changeBackgroundPhotos()
})

rightSlideArrow.addEventListener('click' , ()=>{
    photo++
    changeBackgroundPhotos()
})

