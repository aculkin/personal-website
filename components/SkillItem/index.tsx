import React, { useState } from "react";
import {
	Card,
	Image,
	Icon,
	Modal,
	Header,
	Button,
	Rating,
	Popup,
} from "semantic-ui-react";
import { getSkillPopupMessage } from "./getSkillPopupMessage";
import { SkillInfoInterface } from "../../interfaces/skills";
import { getImageUrl } from "../../utility";

const getGenericImage = (type: string) => {
	switch (type) {
		case "language":
			return "/generic/language.png";
		case "framework":
			return "/generic/framework.png";
		case "technology":
			return "/generic/technology.jpg";
		default:
			return "/generic/language.png";
	}
};

export const SkillItem: React.FC<SkillInfoInterface> = ({ skill, type }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const { name, shortDescription, description, link, awsKey, proficiency } =
		skill;
	const { header, content } = getSkillPopupMessage(proficiency, type, name);
	return (
		<>
			<Popup
				content={content}
				header={header}
				position="top center"
				trigger={
					<Card as="a" onClick={() => setModalOpen(true)}>
						<Image
							src={awsKey ? getImageUrl(awsKey) : getGenericImage(type)}
							wrapped
							ui={false}
						/>
						<Card.Content>
							<Card.Header textAlign="center">{name}</Card.Header>
							<Card.Meta textAlign="center">{header}</Card.Meta>
							<Card.Meta textAlign="center">
								<Rating
									icon="star"
									defaultRating={proficiency}
									maxRating={3}
									disabled
								/>
							</Card.Meta>

							<Card.Description>{shortDescription}</Card.Description>
						</Card.Content>
					</Card>
				}
			/>
			<Modal
				closeIcon
				open={modalOpen}
				onClose={() => setModalOpen(false)}
				onOpen={() => setModalOpen(true)}
			>
				<Header content={name} />
				<Modal.Content image>
					<Image size="medium" src={getImageUrl(awsKey)} wrapped bordered />
					<Modal.Description>
						<Header>{name}</Header>
						<p>{description}</p>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					{link && (
						<Button href={link} target="_blank">
							<Icon name="external" />
							{name} Website
						</Button>
					)}
					<Button color="red" onClick={() => setModalOpen(false)}>
						Close
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
};

export default SkillItem;
