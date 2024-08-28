"use client";

import { Swiper, SwiperSlide } from "swiper/react";
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
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const BorrowBuddies: React.FC = () => {
  return (
    <div className="mt-20 relative">
      <div className="container mx-auto px-4 py-8">
        <div className="absolute top-10 right-28 flex space-x-4">
          <a
            href="https://github.com/yash-bhojwani/BorrowBuddies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-700 hover:text-black"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a
            href="https://borrowbuddies.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-700 hover:text-black"
          >
            <FontAwesomeIcon icon={faLink} size="2xl" />
          </a>
        </div>

        <div className="text-4xl font-bold mb-4 flex items-center">
          <div className="mr-10 md:mr-4 text-2xl md:text-3xl">
            Borrow Buddies
          </div>
          <span className="bg-[#68B0AB] text-white px-3 py-1 rounded-full text-sm mr-2">
            #uiux
          </span>
          <span className="bg-[#7B7263] text-white px-3 py-1 rounded-full text-sm">
            #software-development
          </span>
        </div>
        <div className="flex">
          <h2 className="text-lg font-semibold pr-1">My Role:</h2>
          <p className="text-lg">UI/UX Designer and Full Stack Developer</p>
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
                Many individuals occasionally need items that they do not own.
                Acquiring these items for one-time or infrequent use is not
                economical and contributes to environmental waste. Traditional
                rental options can be expensive, have a limited selection, and
                be inconveniently located.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold">Solution</h2>
              <div className="text-lg">
                BorrowBuddies addresses these issues by enabling community
                members to lend and borrow items with ease.
                <br />
                <strong>Our platform includes:</strong>
                <ul className="list-disc ml-4">
                  <li>An interactive map to locate nearby items.</li>
                  <li>User profiles for listing and requesting items.</li>
                  <li>
                    Advanced search and filter options to facilitate discovery.
                  </li>
                  <li>A chat system for price negotiation.</li>
                  <li>
                    A rating and review mechanism to ensure transparent and fair
                    transactions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex"></div>
        <div className="mt-24">
          <h2 className="text-2xl font-semibold">My Impact</h2>
          <p className="text-lg">
            I served as both the UI/UX designer and developer for this project.
            In terms of design, I collaborated with my team members to divide
            the responsibilities. I specifically worked on the landing page,
            which encompassed the search and filter features, the interactive
            map, the navigation bar, as well as the login/logout and
            registration functionalities. After creating the wireframes, we
            proceeded with the development phase. My contributions included
            implementing the same elements from the design phase, and I also
            focused on developing features related to reviews, user listings,
            user profiles, and parts of the borrowing and lending process.
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

export default BorrowBuddies;
