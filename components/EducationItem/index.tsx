import React from "react";
import {
	Label,
	Icon,
	Button,
	Segment,
	Header,
	Image,
	Grid,
} from "semantic-ui-react";
import { EducationInfoInterface } from "../../interfaces/education";
import { getImageUrl } from "../../utility";

export const EducationItem: React.FC<EducationInfoInterface> = ({ school }) => {
	const {
		schoolName,
		awsKey,
		startDate,
		endDate,
		description,
		schoolWebsiteUrl,
		degree,
		minor,
	} = school;
	return (
		<Segment>
			<Grid>
				<Grid.Row>
					<Grid.Column width='4'>
						<Image
							src={awsKey ? getImageUrl(awsKey) : "/generic/education.png"}
						/>
					</Grid.Column>
					<Grid.Column width='12'>
						<Header as='h2'>
							{schoolName}
							<Header.Subheader>
								{startDate} - {endDate}
							</Header.Subheader>
						</Header>
						<p>{description}</p>
						<Label.Group size='large'>
							{degree && (
								<Label color='green'>
									<Icon name='graduation' />
									Degree: <Label.Detail>{degree}</Label.Detail>
								</Label>
							)}
							{minor && (
								<Label color='teal'>
									Minor: <Label.Detail>{minor}</Label.Detail>
								</Label>
							)}
						</Label.Group>
						<Button
							basic
							target='_blank'
							href={schoolWebsiteUrl}
							content={`${schoolName} Website`}
							icon='external'
							labelPosition='right'
							secondary
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default EducationItem;
