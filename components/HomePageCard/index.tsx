import Link from "next/link";
import { Card, Icon } from "semantic-ui-react";
import React from "react";

export const HomePageCard = ({ page }) => {
	const { link, name, iconName, description } = page;
	return (
		<Link href={link} legacyBehavior>
			<Card>
				<Card.Content>
					<Card.Header textAlign="center">
						<Icon name={iconName || null} />
						{name}
					</Card.Header>
					<Card.Description>{description}</Card.Description>
				</Card.Content>
			</Card>
		</Link>
	);
};

export default HomePageCard;
