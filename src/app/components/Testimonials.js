"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
const testimonialsData = [
  {
    name: "James Thomson1",
    location: "Austin, TX",
    feedback:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident suscipit perspiciatis, ipsa ad enim id reprehenderit dolore, incidunt impedit alias animi laudantium molestias voluptate voluptatem tenetur accusantium.",
  },
  {
    name: "James Thomson2",
    location: "Austin, TX",
    feedback:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident suscipit perspiciatis, ipsa ad enim id reprehenderit dolore, incidunt impedit alias animi laudantium molestias voluptate voluptatem tenetur accusantium.",
  },
  {
    name: "James Thomson3",
    location: "Austin, TX",
    feedback:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident suscipit perspiciatis, ipsa ad enim id reprehenderit dolore, incidunt impedit alias animi laudantium molestias voluptate voluptatem tenetur accusantium.",
  },
  {
    name: "James Thomson4",
    location: "Austin, TX",
    feedback:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident suscipit perspiciatis, ipsa ad enim id reprehenderit dolore, incidunt impedit alias animi laudantium molestias voluptate voluptatem tenetur accusantium.",
  },
  {
    name: "James Thomson5",
    location: "Austin, TX",
    feedback:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident suscipit perspiciatis, ipsa ad enim id reprehenderit dolore, incidunt impedit alias animi laudantium molestias voluptate voluptatem tenetur accusantium.",
  },
  {
    name: "James Thomson6",
    location: "Austin, TX",
    feedback:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident suscipit perspiciatis, ipsa ad enim id reprehenderit dolore, incidunt impedit alias animi laudantium molestias voluptate voluptatem tenetur accusantium.",
  },
];

const Testimonials = () => {
  return (
    <>
      <div style={{ backgroundColor: "#040615", padding: "30px" }}>
        <div
          style={{
            color: "white",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
            fontWeight: "bold",
          }}
        >
          Testimonials
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="card2" style={{ padding: "20px" }}>
                <Image src="/J1.jpeg" width={50} height={50} alt="image" />
                <p style={{ marginTop: "20px", fontWeight: "bold" }}>
                  {testimonial.name}
                </p>
                <p style={{ marginTop: "5px", fontSize: "15px" }}>
                  - {testimonial.location}
                </p>
                <p style={{ marginTop: "20px" }}>{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
