const headerEl = document.getElementById('header')
const titleEl = document.getElementById('title')
const descEl = document.getElementById('description') 
const profileImg = document.getElementById('profile-img')
const sellerName = document.getElementById('name')
const priceEl = document.getElementById('price')

const animatedBg = document.querySelectorAll('.animated-bg')
const animatedText = document.querySelectorAll('.animated-text')

setTimeout(showContent,2000);

function showContent() {
    headerEl.innerHTML = `
    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    `
    titleEl.innerHTML = `Sofa`
    descEl.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, amet in aliquam quam cupiditate sint, voluptate natus quod reprehenderit, dolorem eveniet quos corrupti similique commodi ea porro id architecto incidunt.`
    profileImg.innerHTML=`<img src="https://randomuser.me/api/portraits/women/75.jpg" alt="">`;
    sellerName.innerHTML = `John`
    priceEl.innerHTML = `Price 20$`

    animatedBg.forEach(bg=>bg.classList.remove('animated-bg'))
    animatedText.forEach(txt=>txt.classList.remove('animated-text'))

}
