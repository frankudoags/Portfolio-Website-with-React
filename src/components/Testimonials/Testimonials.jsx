import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import Swiper core and required modules
import {Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Revew From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
              // // install Swiper modules
              modules={[Pagination,Navigation]}
              spaceBetween={50}
              // navigation
              slidesPerView={1}
              pagination={{ clickable: true }}
              >
        <SwiperSlide key={1} className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Client One" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laudantium reiciendis, distinctio ea, tempore sint consequatur unde omnis dignissimos rem accusantium animi! Tempore error quos rem architecto recusandae nam delectus!
            </small>
          </div>
        </SwiperSlide>
        <SwiperSlide key={2} className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Client Two" />
            <h5 className="client__name">John Doe</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laudantium reiciendis, distinctio ea, tempore sint consequatur unde omnis dignissimos rem accusantium animi! Tempore error quos rem architecto recusandae nam delectus!
            </small>
          </div>
        </SwiperSlide>
        <SwiperSlide key={3} className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Client Three" />
            <h5 className="client__name">Jane Doe</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laudantium reiciendis, distinctio ea, tempore sint consequatur unde omnis dignissimos rem accusantium animi! Tempore error quos rem architecto recusandae nam delectus!
            </small>
          </div>
        </SwiperSlide>
        <SwiperSlide key={4} className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Client Four" />
            <h5 className="client__name">Kate Jessica</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laudantium reiciendis, distinctio ea, tempore sint consequatur unde omnis dignissimos rem accusantium animi! Tempore error quos rem architecto recusandae nam delectus!
            </small>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials