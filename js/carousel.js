// gitteing the ul
const track =document.querySelector('.carousel__track');
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right');
const  prevButton= document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slides[0])
//arrange the slides next to each other
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
//  slides.forEach((slide,index)=>{
//      slide.style.left = slideWidth * index + 'px'
//  })
const setSlidePosition = (slide,index)=>{
    slide.style.left = slideWidth * index + 'px';
    
}
slides.forEach(setSlidePosition)

//stpes
const moveToSlide = (track,currentSlide,targetSlide)=>{
          console.log(targetSlide.style.left)
         console.log(`translateX( -${targetSlide.style.left})`)
        
            track.style.transform = `translateX( -${targetSlide.style.left})`;
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
}
//when i click left ,move slides to the left
prevButton.addEventListener('click',e=>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track,currentSlide,prevSlide)
})
//when i click right , move slides ot the right
nextButton.addEventListener('click',e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling;
    //move to the next slide
    moveToSlide(track,currentSlide,nextSlide);
})
// when i click the nav indicator move to that slide
