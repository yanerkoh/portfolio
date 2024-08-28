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
import { faLink } from "@fortawesome/free-solid-svg-icons";

const KampungConnect: React.FC = () => {
  return (
    <div className="mt-16 relative">
      <div className="container mx-auto px-4 py-8">
        <div className="absolute top-4 right-8 md:top-10 md:right-28 flex space-x-4">
          <a
            href="https://kampungconnect-staging.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-700 hover:text-black"
          >
            <FontAwesomeIcon icon={faLink} size="xl" />
          </a>
        </div>
        <div className="text-4xl font-bold mb-4 flex items-center">
          <div className="mr-10 md:mr-4 text-2xl md:text-3xl">
            Kampung Connect
          </div>
          <span className="bg-[#68B0AB] text-white px-3 py-1 rounded-full text-xs md:text-sm mr-2">
            #uiux
          </span>
        </div>
        <div className="flex">
          <h2 className="text-md md:text-lg font-semibold pr-1">My Role:</h2>
          <p className="text-md md:text-lg">UI/UX Designer</p>
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
                  src="/images/kampungconnect-1.png"
                  alt="Gallery Image 1"
                  width={1000}
                  height={500}
                  className="object-cover w-full max-h-[400px] md:max-h-[510px] rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/kampungconnect-2.png"
                  alt="Gallery Image 2"
                  width={1000}
                  height={500}
                  className="md:max-h-[510px] max-h-[400px] object-cover w-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/kampungconnect-3.png"
                  alt="Gallery Image 3"
                  width={1000}
                  height={500}
                  className="object-cover w-full max-h-[400px] md:max-h-[510px] rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/kampungconnect-4.png"
                  alt="Gallery Image 4"
                  width={1000}
                  height={500}
                  className="object-cover w-full max-h-[400px] md:max-h-[510px] rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <Image
                  src="/images/kampungconnect-5.png"
                  alt="Gallery Image 5"
                  width={1000}
                  height={200}
                  className="object-cover w-full max-h-[400px] md:max-h-[510px] rounded-lg"
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
            navigation bar, login/logout features, and the reports module on the
            admin portal. Additionally, I worked closely with product managers
            and the organization to discuss product requirements, and I
            communicated with developers to address any issues identified during
            user acceptance testing (UAT).
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Process</h2>

          {/* Initial User Flow Development */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">
              Initial User Flow Development
            </h3>
            <p className="text-lg">
              The project began with a comprehensive analysis of the Ground-Up
              Initiative’s (GUI) existing manual processes for managing
              volunteer and beneficiary information. GUI relied on spreadsheets
              stored on Google Drive for data management, which involved
              cumbersome manual tasks such as transferring data between
              spreadsheets and manually emailing project coordinators about new
              volunteer registrations.
            </p>
            <p className="text-lg mt-4">
              To address these inefficiencies, I developed an initial user flow
              based on the organization’s current manual processes. This flow
              mapped out the existing steps, including data entry, data
              migration, and communication processes. The goal was to identify
              pain points and areas for improvement, setting the stage for the
              creation of a more streamlined and automated system.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/images/kampungconnect1.png"
                alt="Original Manual User Flow"
                width={800}
                height={600}
                className="rounded-lg border border-grey-400"
              />
            </div>
            <p className="text-lg mt-4">
              Based on this analysis, we proposed a new user flow aimed at
              developing a centralized Volunteer Management System. I was
              responsible for the user flow on the admin portal. This system was
              designed to automate data handling and provide a single repository
              for all volunteer-related information. The new flow included
              automated data transfer, centralized data management, and
              controlled access based on user roles, ensuring that GUI could
              efficiently track volunteer demographics, numbers, and other key
              metrics while providing project-specific access to project leaders
              and volunteer coordinators.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/images/kampungconnect2.png"
                alt="Proposed User Flow"
                width={800}
                height={600}
                className="rounded-lg border border-grey-400"
              />
            </div>
          </div>

          <div className="mt-16 mb-16">
            <h3 className="text-xl font-semibold mb-2">
              Feature Ownership and Responsibilities
            </h3>
            <p className="text-lg">
              I was responsible for designing and implementing several key
              features of the Volunteer Management System, including:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className="text-lg">
                <strong>Admin Sign-In:</strong> Developed an email-based sign-in
                system for administrators, ensuring secure access to the admin
                web application.
              </li>
              <li className="text-lg">
                <strong>Navigational Structure:</strong> Designed the
                navigational layout of the admin web application, including the
                arrangement of tabs for calendar events, volunteer management,
                and reports to ensure intuitive navigation.
              </li>
              <li className="text-lg">
                <strong>Volunteer Attendance Report:</strong> Implemented a
                feature to generate reports listing the number of volunteers who
                attended events within a specified date range, including both
                unique and total volunteer counts.
              </li>
              <li className="text-lg">
                <strong>Volunteer Hours Report:</strong> Created a report
                detailing the number of hours volunteers have accumulated over a
                given date range, providing insights into volunteer engagement
                and activity.
              </li>
              <li className="text-lg">
                <strong>Homepage Features:</strong> Designed the homepage to
                showcase upcoming events and important alerts, providing
                administrators with quick access to event schedules and critical
                updates.
              </li>
            </ul>
            <p className="text-lg mt-4">
              Each feature was developed with a focus on usability and
              efficiency to ensure the Volunteer Management System met the needs
              of GUI’s administrators and project coordinators.
            </p>
          </div>

          {/* Low-Fidelity Wireframes */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">
              Low-Fidelity Wireframes
            </h3>
            <p className="text-lg">
              After finalizing the proposed user flow, I created low-fidelity
              wireframes that focused on several core components of the
              Volunteer Management System. The initial draft included the design
              for the login interface, the layout for the homepage and
              navigation bar, the structure of the reports module, and the flow
              for each component to ensure smooth user interactions.
            </p>
            <p className="text-lg mt-4">
              I developed multiple design concepts to facilitate discussions
              with stakeholders and designers, aiming to identify the most
              appropriate and effective solution. The first draft of the
              wireframes provided a fundamental blueprint for the system’s
              design. It helped visualize core interactions and user flows,
              enabling early feedback and refinement.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/images/kampungconnect3.png"
                alt="Low-Fidelity Wireframes - First Draft"
                width={800}
                height={600}
                className="rounded-lg border border-grey-400"
              />
            </div>
            <p className="text-lg mt-4">
              After receiving feedback from stakeholders and other designers, I
              revised the wireframes to address any concerns and integrate
              suggestions. The second draft reflected a more detailed and
              user-centric design, incorporating feedback to enhance usability
              and align with project requirements.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/images/kampungconnect4.png"
                alt="Low-Fidelity Wireframes - Second Draft"
                width={800}
                height={600}
                className="rounded-lg border border-grey-400"
              />
            </div>
          </div>

          {/* High-Fidelity Prototypes */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">
              High-Fidelity Prototypes
            </h3>
            <p className="text-lg">
              With the wireframes validated, I proceeded to develop
              high-fidelity prototypes to showcase the final design of the
              Volunteer Management System. This phase involved creating
              detailed, interactive designs that demonstrated the system’s
              visual and functional elements.
            </p>
            <p className="text-lg mt-4">
              The prototypes underwent several iterations based on feedback from
              product managers and developers. This iterative process was
              crucial for refining the design, accommodating evolving
              requirements, and ensuring that the system met all functional and
              usability standards.
            </p>
            <p className="text-lg mt-4">
              The high-fidelity prototypes included comprehensive annotations in
              Figma, detailing component behaviors, responsive design
              considerations, and interaction guidelines. These annotations
              provided valuable guidance for the development team, ensuring
              accurate implementation of the design specifications.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/images/kampungconnect5.png"
                alt="High-Fidelity Wireframes"
                width={800}
                height={600}
                className="rounded-lg border border-grey-400"
              />
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">
              User Acceptance Testing (UAT)
            </h3>
            <p className="text-lg">
              During the User Acceptance Testing phase, I thoroughly tested the
              Volunteer Management System to ensure it met the project
              requirements and user expectations. I identified and documented
              various bugs and issues encountered during testing, providing
              detailed reports to the development team. This feedback was
              crucial for refining the system and addressing any usability
              concerns before final deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KampungConnect;
