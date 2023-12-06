import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";
import { usePrismicDocuments } from "@prismicio/react";

const AllProjects = () => {

	const [publish_project] = usePrismicDocuments("publish_project");
	
	console.log(publish_project?.results?.filter((item) => item.data?.project_title?.[0]?.text))

	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
