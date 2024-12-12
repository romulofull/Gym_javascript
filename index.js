const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const images = document.querySelectorAll('.sliderimagenes img');
const texts = document.querySelectorAll('.txtBox');
const inicial = document.querySelector('.inicial');
const final = document.querySelector('.final');

let currentIndex = 0; 


function updateSlider() {
  
  images.forEach(img => img.style.display = 'none');
  texts.forEach(txt => txt.style.display = 'none');
  

  images[currentIndex].style.display = 'block';
  texts[currentIndex].style.display = 'block';
  
  inicial.textContent = currentIndex + 1;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function prevSlide() {
 
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}


nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

updateSlider();
