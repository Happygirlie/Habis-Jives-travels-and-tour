import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {

    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]

    }
  return (
  <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>As a frequent traveler, I have used numerous travel websites, but none compare
             to Habis Jives travels and tour. The personalized itenerary suggestions were spot-on,
              saving me a lot of time and hassle. Plus, their customer support is exceptional. 
              Highly recommend!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Emily T.</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Our family trip to Europe was unforgettable, thanks to Habis Jives. We loved the
             detailed travel guides and recommendations, which helped us plan our activities better.
              The booking process was seamless and we appreciated the exclusive deals that helped us
              stay within our budget. We will definitely be using this site again!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">James and Lisa</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>I was initially skeptical about booking through a new travel site, but Havis Jives
             exceeded all my expectations. The platform is incedibly intuitive, and the range of
              options for flight and accommodations is impressive. I managed to snag a last-minute deal 
              for a weekend getaway to New York. Everything went perfectly!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Benjamin M.</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Planning our trip to Japan was a breeze with Habis Jives. The extensive database
             of destinations, combined with user reviews and ratings, made it easy to choose the best
              places to stay and things to do. The real-time customer support was a lifesaver when we had
              to make a last-minute change to our itinerary. I was happy with the experience!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Jennifer A.</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Booking our honeymoon through Habis Jives was the best decision we made! The user-friendly
             interface made it so easy to find and compare flights and hotels. We found an incredible
              deal for our stay in Bali, and everything went smoothly from start to finish.
              We can not wait to use this site for our future travels!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Sarah and Mark</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
    
  ); 
};

export default Testimonials
