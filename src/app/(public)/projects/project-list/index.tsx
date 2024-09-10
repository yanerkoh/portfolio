import React from "react";
import Link from "next/link";
import Image from 'next/image';

interface Project {
  projectLink: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const tagColors: Record<string, string> = {
  "#uiux": "bg-[#68B0AB]",
  "#software-development": "bg-[#7B7263]",
};

const ProjectListItem: React.FC<Project> = ({
  projectLink,
  title,
  description,
  imageUrl,
  tags,
}) => {
  return (
    <div className="flex p-8 items-center md:flex-row sm: flex-col">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={400}
        className="mb-10 md:mb-0 border border-grey-100 shadow-lg w-[600px] object-cover bg-grey-100 rounded-lg"
      />
      <div className="md:ml-16">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold mr-4 tracking-wide">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs font-medium px-2 py-1 rounded-full text-white ${
                  tagColors[tag] || "bg-gray-400"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-grey-500 mb-6 tracking-wide">{description}</p>
        <Link
          href={`/projects/${projectLink}`}
          className="inline-block rounded-full p-2 px-10 border border-black text-black hover:font-medium"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProjectListItem;
