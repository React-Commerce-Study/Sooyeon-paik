import React from 'react'
import Swiper from 'swiper';

export default function Carousel() {
  return (
    <div class="swiper">
  
  <div class="swiper-wrapper">
 
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    
  </div>
  
  <div class="swiper-pagination"></div>


  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

 
  <div class="swiper-scrollbar"></div>
</div>
  )
}
