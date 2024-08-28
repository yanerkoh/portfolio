import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { SECTION } from "@/shared/consts/styles/layout";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto pt-40 px-4 py-8 h-screen">
      <div className={`${SECTION.WIDTH}`}>
        {/* Introduction Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-4 text-[#2D080A]">
              Hello, I'm Yan Er.
            </h1>
            <p className="text-lg mb-16">
              I am a UI/UX designer and developer. I love creating beautiful and
              functional digital experiences.
            </p>
            {/* Buttons Section */}
            <div className="flex justify-center lg:justify-start mb-4">
              <a
                href="/projects"
                className="bg-[#2D080A] hover:bg-[#7B7263] text-white px-8 py-2 mr-4 rounded-full hover:bg-blue-700 transition duration-300"
              >
                View My Projects
              </a>

              {/* Social Links Section */}
              <div className="flex justify-center items-center lg:justify-start space-x-4">
                <a
                  href="https://github.com/yanerkoh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D080A] hover:text-[#7B7263] transition duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                </a>
                <a
                  href="https://linkedin.com/in/koh-yan-er"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D080A] hover:text-[#7B7263] transition duration-300"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/home-image.png"
              alt="Girl on Computer"
              className="w-100 h-auto rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
