import Link from "next/link";
import React, { FC } from "react";

import {
	Segment,
	Container,
	Grid,
	List,
	Header,
	Button,
	Divider,
	Icon,
} from "semantic-ui-react";

export const Footer: FC = () => {
	return (
		<Segment inverted vertical style={{ padding: "5em 0em" }}>
			<Container>
				<Grid divided inverted stackable>
					<Grid.Row>
						<Grid.Column width={6}>
							<Header inverted as="h4" content="About" />
							<List link inverted>
								<List.Item>
									<Link href="/">Home</Link>
								</List.Item>
								<List.Item>
									<Link href="/projects">Projects &#9999;&#65039;</Link>
								</List.Item>
								<List.Item>
									<Link href="/employment">Employment &#127970;</Link>
								</List.Item>
								<List.Item>
									<Link href="/skills">Skills &#11088;</Link>
								</List.Item>
								<List.Item>
									<Link href="/education">Education &#128218;</Link>
								</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={10}>
							<Button
								href="https://github.com/aculkin/"
								target="_blank"
								circular
								color="grey"
								icon="github square"
							/>
							<Button
								href="https://www.linkedin.com/in/andrew-culkin/"
								target="_blank"
								circular
								color="linkedin"
								icon="linkedin"
							/>
							<Button
								href="https://www.instagram.com/aculkin/"
								target="_blank"
								circular
								color="instagram"
								icon="instagram"
							/>
							<Button
								href="https://www.facebook.com/andrew.culkin/"
								target="_blank"
								circular
								color="facebook"
								icon="facebook"
							/>
							<Button
								href="https://twitter.com/AndrewSCulkin/"
								target="_blank"
								circular
								color="twitter"
								icon="twitter square"
							/>
							<Button
								href="https://culkin-website-images.s3.us-west-2.amazonaws.com/other-assets/resume"
								floated="right"
								download
								target="_blank"
							>
								<Icon name="download" />
								Andrew&apos;s Resume - <i>(Updated: November 2021)</i>
							</Button>
							<Divider />
							<p>&copy; {new Date().getFullYear()} - Andrew Culkin</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	);
};

export default Footer;
