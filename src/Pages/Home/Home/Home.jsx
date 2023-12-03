import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonials/Testimonial';
import CallUs from '../CallUs/CallUs';

function Home() {
  return (
    <div>
      <Helmet>
        <title>ProjectPlus | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      {/* <PopularMenu></PopularMenu> */}
      <CallUs></CallUs>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home;