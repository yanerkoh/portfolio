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

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Yoko: React.FC = () => {
  return (
    <div className="mt-20 relative">
      <div className="container mx-auto px-4 py-8">
        <div className="absolute top-10 right-28 flex space-x-4">
          <a
            href="https://github.com/yanerkoh/orbital-yoko"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-700 hover:text-black"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
        </div>
        <div className="text-4xl font-bold mb-4 flex items-center">
          <div className="mr-10 md:mr-4 text-2xl md:text-3xl">Yoko</div>
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
                <img
                  src="/images/borrowbuddies-preview.png"
                  alt="Gallery Image 1"
                  className="object-cover w-full h-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/yoko-preview.png"
                  alt="Gallery Image 2"
                  className="object-cover w-full h-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/borrowbuddies-preview.png"
                  alt="Gallery Image 3"
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
                University students frequently face time management issues,
                resulting in last-minute cheat sheet creation before exams. They
                often depend on shared templates or tools like ChatGPT for
                summaries, but limitations such as the inability to upload large
                texts and the cumbersome task of formatting make the process
                inefficient and stressful.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold">Solution</h2>
              <div className="text-lg">
                Yoko is designed to simplify and streamline the creation of
                cheat sheets and summaries for students, improving their study
                efficiency. The platform will not only enhance individual study
                methods but also foster community learning by enabling students
                to share their summaries and cheat sheets with others.
                Additionally, Yoko will serve as an organized repository for
                students to manage and access their cheat sheet resources
                effectively.
              </div>
            </div>
          </div>
        </div>

        <div className="flex"></div>
        <div className="mt-24">
          <h2 className="text-2xl font-semibold">My Impact</h2>
          <p className="text-lg">
            This project was my first foray into both development and UI/UX
            design, and it holds a special place in my heart. I designed the
            mascot and learned Figma and prototyping while working on this
            project. My design work included the homepage, the depository, the
            complete cheatsheet generation process—from uploading lecture notes
            to downloading the final cheatsheet—and the profile page. In terms
            of development, I managed the implementation of the homepage,
            depository, profile pages, login/logout functionality, and
            cheatsheet viewing, and also integrated a feature allowing users to
            comment on summaries and cheat sheets.
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

export default Yoko;
