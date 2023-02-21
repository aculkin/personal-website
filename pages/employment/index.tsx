import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Header, Container } from "semantic-ui-react";

import { API } from "../../API";
import { MainLayout } from "../../layouts/main-layout";
import { EmploymentItem } from "../../components/EmploymentItem";
import { EmploymentArrayInterface } from "../../interfaces/employment";

const pageStyle = {
	backgroundImage: "url(/employment-background.jpg)",
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

export const EmploymentPage: React.FC<EmploymentArrayInterface> = ({
	employment,
}) => {
	return (
		<MainLayout>
			<Head>
				<title>Andrew Culkin | Employment</title>
				<meta
					name='description'
					content="Companies I've worked for and startups I've founded"
				/>
			</Head>
			<div style={pageStyle}>
				<Header style={headingStyle} textAlign='center' as='h1'>
					Employment
				</Header>
				<Container>
					{employment?.map((company, index) => (
						<EmploymentItem
							key={company?.companyName || index}
							company={company}
						/>
					))}
				</Container>
			</div>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const { employment } = await API.websiteData.employment();
	return {
		props: { employment },
	};
};

export default EmploymentPage;
