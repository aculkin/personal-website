import * as React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Header, Container, Divider } from "semantic-ui-react";

import { API } from "../../API";
import { MainLayout } from "../../layouts/main-layout";
import { EducationItem } from "../../components/EducationItem";
import { EducationPageInterface } from "../../interfaces/education";

const pageStyle = {
	backgroundImage: "url(/education-background.jpg)",
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

export const EducationPage: React.FC<EducationPageInterface> = ({
	education,
}) => {
	return (
		<MainLayout>
			<Head>
				<title>Andrew Culkin | Education</title>
				<meta
					name='description'
					content="Schools I've graduated from and and educational programs and courses I've completed"
				/>
			</Head>
			<div style={pageStyle}>
				<Header style={headingStyle} textAlign='center' as='h1'>
					Education
				</Header>
				<Container>
					{education?.map((school, index) => (
						<EducationItem key={school?.schoolName || index} school={school} />
					))}
					<Divider hidden />
				</Container>
			</div>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const { education } = await API.education.loadAll();
	return {
		props: { education },
	};
};

export default EducationPage;
