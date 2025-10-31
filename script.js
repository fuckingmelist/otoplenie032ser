const burger=document.getElementById('burger');
const navLinks=document.getElementById('nav-links');
const navbar=document.getElementById('navbar');
const logo=document.getElementById('logo');

burger.addEventListener('click',()=>navLinks.classList.toggle('active'));
navLinks.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',()=>navLinks.classList.remove('active'));
});

function onScrollAnimate(){
  const services=document.querySelectorAll('.service');
  const portfolio=document.querySelectorAll('.portfolio-item');
  const h2s=document.querySelectorAll('h2');
  const scrollPos=window.innerHeight;
  services.forEach(el=>{if(el.getBoundingClientRect().top<scrollPos-50)el.classList.add('visible');});
  portfolio.forEach(el=>{if(el.getBoundingClientRect().top<scrollPos-50)el.classList.add('visible');});
  h2s.forEach(el=>{if(el.getBoundingClientRect().top<scrollPos-50){el.style.opacity=1;el.style.transform='translateY(0)';}});
}
window.addEventListener('scroll',onScrollAnimate);
window.addEventListener('load',()=>{
  document.querySelector('header h1').style.opacity=1;
  document.querySelector('header h1').style.transform='translateY(0)';
  document.querySelector('header p').style.opacity=1;
  document.querySelector('header p').style.transform='translateY(0)';
  logo.classList.add('show');
  onScrollAnimate();
});

const imageCount = 67; 
const slidesContainer = document.getElementById('slides');
for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement('img');
  img.src = `images/photo_${i}_2025-10-29_23-27-37.jpg`;
  slidesContainer.appendChild(img);
}

const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(n){
  index=(n+slideImages.length)%slideImages.length;
  slides.style.transform=`translateX(${-index*100}%)`;
}
prev.addEventListener('click',()=>showSlide(index-1));
next.addEventListener('click',()=>showSlide(index+1));
