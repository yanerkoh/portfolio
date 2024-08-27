'use client'

import {useEffect, useState} from 'react';
import {SECTION} from "@/shared/consts/styles/layout";
import ProjectListItem from '../project-list';
// import sampleProjectImage from '@/app/(public)/projects/caretogive/sample_project_image.jpg';
// import sampleLogo from '@/app/(public)/projects/caretogive/sample_logo.png';

const projects = [
    {
        projectLink: "borrowbuddies",
        title: 'Borrow Buddies',
        description: 'BorrowBuddies is a peer-to-peer item sharing platform designed to foster a sharing economy and reduce waste. Our platform connects individuals who need to borrow items with those in the community willing to lend them, promoting economic efficiency and environmental sustainability.',
        imageUrl: '/images/borrowbuddies-preview.png',
        tags: ['#uiux', '#software-development']
    },
    {
        projectLink: "kampungconnect",
        title: 'Kampung Connect',
        description: 'The Kampung Connect Volunteer Management System is a central platform for tracking volunteer data, including demographics and counts. It offers comprehensive data oversight through a full-access GUI and tailored access for project leaders and coordinators. Volunteers can sign up, manage events, and interact with the platform via a public website.',
        imageUrl: '/images/kampungconnect-preview.png',
        tags: ['#uiux']
    },
    {
        projectLink: "yoko",
        title: 'Yoko',
        description: 'Yoko simplifies studying by turning academic materials into concise cheat sheets and summaries. It offers easy creation of personalized cheat sheets, a repository of user-contributed summaries, and a dashboard for reviewing past content. Yoko also supports a collaborative community for sharing tips and insights.',
        imageUrl: '/images/yoko-preview.png',
        tags: ['#uiux', '#software-development']
    },
];

const ProjectSection: React.FC = () => {
    return (
        <div className={`${SECTION.WIDTH}`}>
            <div className="text-2xl font-medium mt-24 ml-10">My Projects</div>
            <div>
                {projects.map((project, index) => (
                    <ProjectListItem 
                        key={index} 
                        projectLink={project.projectLink}
                        title={project.title} 
                        description={project.description} 
                        imageUrl={project.imageUrl} 
                        tags={project.tags}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;