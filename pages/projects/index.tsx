import * as React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Header, Container } from "semantic-ui-react";
import { motion } from "motion/react";

import { API } from "../../API";
import { MainLayout } from "../../layouts/main-layout";
import { ProjectItem } from "../../components/ProjectItem";
import { ProjectArrayInterface } from "../../interfaces/projects";

const pageStyle = {
	backgroundImage: "url(/projects-background.jpg)",
	backgroundSize: "cover",
	backgroundAttachment: "fixed",
	paddingBottom: "50px",
};

const headingStyle = {
	paddingTop: "2em",
	fontSize: "3em",
	fontWeight: "bold",
	color: "white",
	textShadow: "2px 2px 8px #000000",
};

export const ProjectsPage: React.FC<ProjectArrayInterface> = ({ projects }) => {
	return (
		<MainLayout>
			<Head>
				<title>Andrew Culkin | Projects</title>
				<meta
					name="description"
					content="Projects I'm currently working on, or have worked on over the course of my career."
				/>
			</Head>
			<div style={pageStyle}>
				<Header style={headingStyle} textAlign="center" as="h1">
					Projects
				</Header>
				<Container>
					{projects?.map((project, index) => {
						return (
							<motion.div
								style={{ paddingTop: "20px" }}
								key={project?.id || index}
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.4,
									ease: "easeOut",
									delay: index * 0.2,
								}}
							>
								<ProjectItem project={project} />
							</motion.div>
						);
					})}
				</Container>
			</div>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const { projects } = await API.websiteData.projects();
	return {
		props: { projects },
	};
};

export default ProjectsPage;
