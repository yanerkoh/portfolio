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
import { Pagination } from "swiper/modules";
import Image from "next/image";
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
        <div className="absolute top-0 right-8 md:top-8 md:right-28 flex space-x-4">
          <a
            href="https://github.com/yanerkoh/orbital-yoko"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-700 hover:text-black"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </div>
        <div className="text-4xl font-bold mb-4 flex items-center">
          <div className="mr-32 md:mr-4 text-xl md:text-2xl">Yoko</div>
          <span className="bg-[#68B0AB] text-white px-3 py-1 rounded-full text-xs md:text-sm mr-2">
            #uiux
          </span>
          <span className="bg-[#7B7263] text-white px-3 py-1 rounded-full text-xs md:text-sm">
            #software-development
          </span>
        </div>
        <div className="flex">
          <h2 className="text-md md:text-lg font-semibold pr-1">My Role:</h2>
          <p className="text-md md:text-lg">
            UI/UX Designer and Full Stack Developer
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Swiper Gallery Section */}
          <div className="lg:w-7/12 w-full lg:mr-10 mb-4 lg-mb-0">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              modules={[Pagination, Navigation]}
              className="swiper-container z-10"
            >
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/yoko-7.png"
                  alt="Gallery Image 1"
                  width={1000}
                  height={500}
                  className="border border-grey-100 object-cover w-full max-h-[320px] md:max-h-[480px] rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/yoko-1.png"
                  alt="Gallery Image 2"
                  width={1000}
                  height={500}
                  className="border border-grey-100 md:max-h-[480px] max-h-[320px] object-cover w-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/yoko-2.png"
                  alt="Gallery Image 3"
                  width={1000}
                  height={500}
                  className="border border-grey-100 object-cover w-full max-h-[320px] md:max-h-[480px] rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/yoko-3.png"
                  alt="Gallery Image 4"
                  width={1000}
                  height={500}
                  className="border border-grey-100 object-cover w-full max-h-[320px] md:max-h-[480px] rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/yoko-4.png"
                  alt="Gallery Image 5"
                  width={1000}
                  height={200}
                  className="border border-grey-100 object-cover w-full max-h-[320px] md:max-h-[480px] rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/yoko-5.png"
                  alt="Gallery Image 6"
                  width={1000}
                  height={200}
                  className="border border-grey-100 object-cover w-full max-h-[320px] md:max-h-[480px] rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/yoko-6.png"
                  alt="Gallery Image 7"
                  width={1000}
                  height={200}
                  className="border border-grey-100 object-cover w-full max-h-[320px] md:max-h-[480px] rounded-lg"
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

          {/* Motivation */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Motivation</h3>
            <p className="text-lg">
              The project was inspired by the frequent challenge of last-minute
              studying due to poor time management, where we often found
              ourselves creating cheat sheets just before exams. We were
              frustrated by the tedious process of gathering resources and
              formatting them into concise cheat sheets, frequently resorting to
              templates shared in our module&apos;s Telegram group. This experience
              highlighted the need for a more efficient and high-quality
              solution for creating cheat sheets. Recognizing that university
              students often face the overwhelming task of processing extensive
              course materials, we envisioned developing a tool to streamline
              this process and enhance the quality of content.
            </p>
          </div>

          {/* Vision */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p className="text-lg">
              Our vision is to create &quot;Yoko,&quot; an intelligent assistant designed
              to help students quickly and accurately generate cheat sheets or
              summaries from their resources. Yoko aims to simplify the process,
              ensuring that students can create high-quality content
              efficiently.
            </p>
          </div>

          {/* Proposed Features */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Proposed Features</h3>
            <p className="text-lg">
              To address the challenges of creating cheat sheets, Yoko includes
              several key features:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className="text-lg">
                <strong>Efficient Cheatsheet Creation:</strong> Yoko facilitates
                the rapid creation of concise and accurate cheat sheets without
                compromising content quality.
              </li>
              <li className="text-lg">
                <strong>User Authentication:</strong> Implemented a strict
                user-authentication process to personalize the user experience
                and ensure secure access.
              </li>
              <li className="text-lg">
                <strong>Cheatsheet Repository:</strong> Provides a platform for
                users to share and cross-check their cheat sheets with others,
                promoting community learning and collaboration.
              </li>
            </ul>
          </div>

          {/* Wireframes and Prototyping */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">
              Wireframes and Prototyping
            </h3>
            <p className="text-lg">
              I created wireframes and prototypes using Figma to visualize the
              user interface and interactions of Yoko. These designs were
              essential for presenting the concept and gathering feedback before
              moving into the development phase.
            </p>
            <p className="text-lg mt-4">
              Below are the wireframes from our initial design phase, showing
              the layout and functionality of key components of the application:
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/images/yoko1.png"
                alt="High-Fidelity Wireframes"
                width={800}
                height={600}
                className="rounded-lg border border-grey-400 bg-white p-4"
              />
            </div>
          </div>

          {/* Development Stages */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Development Stages</h3>

            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Initial Setup</h4>
              <p className="text-lg">
                We began by setting up a Firebase project and integrating it
                with our ReactJS frontend. This setup allowed us to implement
                authentication flows, enabling users to sign up and log in with
                email and Google accounts. Firebase managed user information
                securely, facilitating efficient verification during logins. For
                Google authentication, we utilized OAuth 2.0 with Google&apos;s
                services.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Development</h4>
              <p className="text-lg">
                Once users created their accounts, they gained access to a
                personalized dashboard where they could manage their
                cheatsheets. Users could upload existing cheat sheets or create
                new ones using our built-in cheatsheet maker. Firebase storage
                ensured secure and reliable data handling. <br/> To elevate the user
                experience even further, we decided to implement a profile page
                within the dashboard. This enhancement allows users to customise
                their accounts by adding personal details such as their course
                of study and year. Just like cheatsheet data, this user
                information is securely stored in Firebase&apos;s cloud.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">
                Backend and Integration
              </h4>
              <p className="text-lg">
                In the third stage, we faced a challenge with our Django setup,
                realizing we had deployed a standard Django server instead of a
                Django REST API server. We resolved this by correctly setting up
                the API and using Axios to connect the Django backend with our
                React frontend. Additionally, the backend logic was written in
                Python, and we integrated GPT-3.5 for AI functionalities to
                enhance the cheat sheet generation process.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
              <p className="text-lg">
                Our tech stack included ReactJS, HTML, and CSS for the frontend;
                Firebase for backend services; Django (with Django REST API) for
                backend logic; and GPT-3.5 for AI-based functionalities.
                Deployment was carried out using Vercel for the frontend and
                Google Cloud Platform for the backend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yoko;
