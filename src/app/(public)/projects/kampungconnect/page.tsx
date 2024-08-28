"use client";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Autoplay,
  EffectCube,
  EffectCoverflow,
  EffectFade,
} from "swiper/modules";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const KampungConnect: React.FC = () => {
  return (
    <div className="mt-16 relative">
      <div className="container mx-auto px-4 py-8">
        <div className="absolute top-10 right-28 flex space-x-4">
          <a
            href="https://kampungconnect-staging.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-700 hover:text-black"
          >
            <FontAwesomeIcon icon={faLink} size="2xl" />
          </a>
        </div>
        <div className="text-4xl font-bold mb-4 flex items-center">
          <div className="mr-10 md:mr-4 text-2xl md:text-3xl">
            Kampung Connect
          </div>
          <span className="bg-[#68B0AB] text-white px-3 py-1 rounded-full text-sm mr-2">
            #uiux
          </span>
        </div>
        <div className="flex">
          <h2 className="text-lg font-semibold pr-1">My Role:</h2>
          <p className="text-lg">UI/UX Designer</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Swiper Gallery Section */}
          <div className="lg:w-7/12 w-full lg:mr-10">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              className="swiper-container z-0"
            >
              <SwiperSlide>
                <Image
                  src="/images/borrowbuddies-preview.png"
                  alt="Gallery Image 1"
                  width={1000} // set appropriate width
                  height={1000} // set appropriate height
                  className="object-cover w-full h-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/yoko-preview.png"
                  alt="Gallery Image 2"
                  width={1000} // set appropriate width
                  height={1000} // set appropriate height
                  className="object-cover w-full h-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/borrowbuddies-preview.png"
                  alt="Gallery Image 3"
                  width={1000} // set appropriate width
                  height={1000} // set appropriate height
                  className="object-cover w-full h-full rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Details Section */}
          <div className="lg:w-2/3 space-y-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold">Problem</h2>
              <p className="text-lg">
                Ground-Up Initiative (GUI) is a non-profit that empowers
                individuals to contribute to global stewardship. Currently, GUI
                manages volunteer and beneficiary information manually using
                spreadsheets on Google Drive, which involves tedious data
                transfers and manual notifications. This inefficiency limits
                their ability to gather and analyze crucial data, affecting the
                effectiveness of their programs.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold">Solution</h2>
              <div className="text-lg">
                A Volunteer Management System to serve as a centralized hub for
                all volunteer-related information, enabling GUI to efficiently
                track data such as demographics and volunteer numbers. GUI will
                have full control over the system, while project leaders and
                volunteer coordinators will have restricted access tailored to
                their specific projects.
              </div>
            </div>
          </div>
        </div>

        <div className="flex"></div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">My Impact</h2>
          <p className="text-lg">
            As the UI/UX designer, I collaborated with a team of designers to
            ensure consistency by adhering to a shared design library and
            exchanging feedback. I was responsible for designing the homepage,
            navigation bar, login/logout features, and the reports module.
            Additionally, I worked closely with product managers and the
            organization to discuss product requirements, and I communicated
            with developers to address any issues identified during user
            acceptance testing (UAT).
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Process</h2>
          <p className="text-lg">
            Detailed description of the process used in the project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KampungConnect;
