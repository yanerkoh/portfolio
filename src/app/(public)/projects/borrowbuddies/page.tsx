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
import { Pagination } from "swiper/modules";
import Image from "next/image";
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
        <div className="absolute top-0 right-8 md:top-10 md:right-28 flex space-x-4">
          <a
            href="https://github.com/yash-bhojwani/BorrowBuddies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-700 hover:text-black"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            href="https://borrowbuddies.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-700 hover:text-black"
          >
            <FontAwesomeIcon icon={faLink} size="xl" />
          </a>
        </div>

        <div className="text-4xl font-bold mb-4 flex items-center">
          <div className="mr-6 md:mr-4 text-xl md:text-2xl">Borrow Buddies</div>
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
                  src="/images/borrowbuddies-2.png"
                  alt="Gallery Image 1"
                  width={1000}
                  height={500}
                  className="border border-grey-100 object-cover w-full max-h-[320px] md:max-h-[480px] rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/borrowbuddies-1.png"
                  alt="Gallery Image 2"
                  width={1000}
                  height={500}
                  className="border border-grey-100 md:max-h-[480px] max-h-[320px] object-cover w-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/borrowbuddies-3.png"
                  alt="Gallery Image 3"
                  width={1000}
                  height={500}
                  className="border border-grey-100 object-cover w-full max-h-[320px] md:max-h-[480px] rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/borrowbuddies-4.png"
                  alt="Gallery Image 4"
                  width={1000}
                  height={500}
                  className="border border-grey-100 object-cover w-full max-h-[320px] md:max-h-[480px] rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/borrowbuddies-5.png"
                  alt="Gallery Image 5"
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

          {/* Brainstorm */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Brainstorm</h3>
            <p className="text-lg">
              As a group, we explored various ideas to address the common issue
              of needing temporary access to items that individuals do not own.
              We identified several problems: the economic inefficiency and
              environmental impact of purchasing items for infrequent use, the
              high cost and limited selection of existing rental options, and
              the inconvenience of accessing these services. After discussing
              these challenges, we decided to develop a platform that
              facilitates borrowing and lending within local communities. This
              solution aims to minimize economic waste and environmental impact
              by leveraging a user-friendly interface with features such as an
              interactive map, user profiles, and advanced search and filter
              options. Our platform will also support price negotiation and
              include a rating and review system to promote transparency and
              fairness in transactions.
            </p>
          </div>

          {/* Solution */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Solution</h3>
            <p className="text-lg">
              Our proposed solution is a comprehensive platform designed to
              connect individuals looking to borrow or lend items within their
              community. Key features include:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className="text-lg">
                <strong>Interactive Map:</strong> Helps users locate available
                items nearby.
              </li>
              <li className="text-lg">
                <strong>User Profiles:</strong> Allows users to list items they
                want to lend and request items they need.
              </li>
              <li className="text-lg">
                <strong>Advanced Search and Filter:</strong> Enhances ease of
                discovering items based on various criteria.
              </li>
              <li className="text-lg">
                <strong>Price Negotiation and Ratings:</strong> Facilitates
                transparent and fair transactions through negotiation options
                and a review system.
              </li>
            </ul>
          </div>

          {/* Examples */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Examples</h3>
            <p className="text-lg">
              Our platform could be used for a range of scenarios such as:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className="text-lg">
                Borrowing a formal attire for a one-time event.
              </li>
              <li className="text-lg">
                Renting an outdoor speaker for a large-scale outdoor activity.
              </li>
            </ul>
          </div>

          {/* Target Audience */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Target Audience</h3>
            <p className="text-lg">Our platform targets:</p>
            <ul className="list-disc list-inside mt-2">
              <li className="text-lg">
                Individuals seeking temporary access to specific items for
                personal or professional use.
              </li>
              <li className="text-lg">
                People looking to lend out their rarely used items, generating
                income and reducing clutter.
              </li>
              <li className="text-lg">
                Community members interested in promoting sustainability and
                reducing waste through resource sharing.
              </li>
            </ul>
          </div>

          {/* Future Developments / Revenue Model */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">
              Future Developments / Revenue Model
            </h3>
            <p className="text-lg">
              Future enhancements and revenue models for the platform may
              include:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className="text-lg">
                <strong>Added-Value Services:</strong> Insurance for rental
                items, secure payments, delivery coordination, and enhanced
                listing features (e.g., promoting items to the top of search
                results).
              </li>
              <li className="text-lg">
                <strong>Advertisements:</strong> Incorporating ads to generate
                additional revenue.
              </li>
              <li className="text-lg">
                <strong>Subscription Plans:</strong> Offering plans such as
                unlimited borrows at a fixed monthly rate.
              </li>
            </ul>
          </div>

          {/* Wireframes */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">
              Wireframes and Prototyping
            </h3>
            <p className="text-lg">
              Wireframes played a crucial role in presenting our proposal and
              defining the layout and functionality of the platform. <br />
              <br /> I was responsible for creating essential wireframes for the
              platform, including the Search and Filter feature on the homepage,
              which integrates an interactive map and search bar for efficient
              item discovery. I also designed the Categories tab on the
              navigation bar, which allows users to view all available item
              categories and filter results accordingly. Additionally, I
              developed the Navigation Bar to dynamically adjust based on user
              authentication status, featuring options for listing creation,
              category browsing, and profile access. I also crafted wireframes
              for the Login/Logout processes and the Register page, ensuring a
              smooth and intuitive user experience throughout the authentication
              journey.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/images/borrowbuddies1.png"
                alt="High-Fidelity Wireframes"
                width={800}
                height={600}
                className="rounded-lg border border-grey-400 bg-grey-100 p-4"
              />
            </div>
          </div>

          {/* Development */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-lg">
              During the development phase, I was responsible for several key
              features:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className="text-lg">
                <strong>Navigation Bar:</strong> Developed a dynamic navigation
                bar that adapts based on user authentication status. Features
                include Create Listing, Browse Categories, Login/Register, View
                Profile, and Notifications/Activities.
              </li>
              <li className="text-lg">
                <strong>Homepage:</strong> Implemented the landing page with an
                interactive map and search bar. The homepage features items
                arranged in a card format similar to an e-commerce site, making
                it visually engaging and easy to browse.
              </li>
              <li className="text-lg">
                <strong>Review System:</strong> Integrated a review mechanism
                that allows users to rate and provide feedback based on their
                experience with other users. This promotes transparency and
                trust within the platform.
              </li>
              <li className="text-lg">
                <strong>Profile and Item Management:</strong> Built user
                profiles and processes for collecting and lending items,
                ensuring a seamless user experience.
              </li>
            </ul>
            <p className="text-lg mt-4">
              The platform was deployed on Vercel, with the frontend developed
              using ReactJS and Tailwind CSS, and the backend powered by
              ExpressJS and NodeJS. PostgreSQL was utilized for database
              management. For seamless deployment, we employed Vercel and
              Netlify.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowBuddies;
