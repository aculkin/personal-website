import * as React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Card, Divider, Header, Container } from "semantic-ui-react";

import SkillItem from "../../components/SkillItem";
import { SkillsInterface } from "../../interfaces/skills";
import { API } from "../../API";
import { MainLayout } from "../../layouts/main-layout";

const pageStyle = {
	backgroundImage: "url(/skills-background.jpg)",
	backgroundSize: "cover",
	backgroundAttachment: "fixed",
	paddingBottom: "50px",
};

const headerStyle = {
	paddingTop: "2em",
	fontSize: "3em",
	fontWeight: "bold",
	color: "white",
	textShadow: "2px 2px 8px #000000",
};

const subheaderStyle1 = {
	fontSize: ".4em",
	color: "white",
	textShadow: "2px 2px 8px #000000",
};

const subheaderStyle2 = {
	fontSize: "1.75em",
	fontWeight: "bold",
	color: "white",
	textShadow: "2px 2px 8px #000000",
};

export const SkillsPage: React.FC<SkillsInterface> = ({
	languages,
	technologies,
	frameworks,
}) => {
	return (
		<MainLayout>
			<Head>
				<title>Andrew Culkin | Skills</title>
				<meta
					name='description'
					content="All the Languages, Technologies and Development Frameworks I've worked with over my career."
				/>
			</Head>
			<div style={pageStyle}>
				<Container>
					<Header style={headerStyle} textAlign='center' as='h1'>
						Skills
						<Header.Subheader style={subheaderStyle1}>
							Frameworks, Technologies, and Languages I&apos;ve worked with
						</Header.Subheader>
					</Header>
					<Divider hidden />
				</Container>
				<Container>
					<Divider />
					<Header style={subheaderStyle2} textAlign='center' as='h2'>
						Languages
					</Header>
					<Divider hidden />
					<Card.Group stackable doubling centered itemsPerRow={5}>
						{languages?.map((skill, index) => (
							<SkillItem
								skill={skill}
								key={skill?.name || index}
								type='language'
							/>
						))}
					</Card.Group>
					<Divider />
					<Header style={subheaderStyle2} textAlign='center' as='h2'>
						Frameworks
					</Header>
					<Divider hidden />
					<Card.Group stackable doubling centered itemsPerRow={5}>
						{frameworks?.map((skill, index) => (
							<SkillItem
								skill={skill}
								key={skill?.name || index}
								type='framework'
							/>
						))}
					</Card.Group>
					<Divider />
					<Header style={subheaderStyle2} textAlign='center' as='h2'>
						Technologies
					</Header>
					<Divider hidden />
					<Card.Group stackable doubling centered itemsPerRow={5}>
						{technologies?.map((skill, index) => (
							<SkillItem
								skill={skill}
								key={skill?.name || index}
								type='technology'
							/>
						))}
					</Card.Group>
					<Divider hidden />
					<Divider />
				</Container>
			</div>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const [{ languages }, { technologies }, { frameworks }] = await Promise.all([
		API.websiteData.languages(),
		API.websiteData.technologies(),
		API.websiteData.frameworks(),
	]);
	return {
		props: {
			languages,
			technologies,
			frameworks,
		},
	};
};

export default SkillsPage;
