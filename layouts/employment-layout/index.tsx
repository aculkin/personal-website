import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Grid, Menu, Header, Container } from "semantic-ui-react";

export const EmploymentLayout: React.FC = ({
	children,
}: {
	children: ReactNode;
}) => {
	const { pathname } = useRouter();
	return (
		<Container>
			<Grid>
				<Grid.Column width='4'>
					<Menu vertical fluid pointing>
						<Link href='/employment/roof-rally' legacyBehavior>
							<Menu.Item
								name='roof-rally'
								active={pathname === "/employment/roof-rally"}
							>
								<Header as='h4'>Roof Rally</Header>
							</Menu.Item>
						</Link>
						<Link href='/employment/ernst-and-young' legacyBehavior>
							<Menu.Item
								name='ernst-and-young'
								active={pathname === "/employment/ernst-and-young"}
							>
								<Header as='h4'>Ernst & Young</Header>
							</Menu.Item>
						</Link>
						<Link href='/employment/eca-solar' legacyBehavior>
							<Menu.Item
								name='eca-solar'
								active={pathname === "/employment/eca-solar"}
							>
								<Header as='h4'>ECA Solar</Header>
							</Menu.Item>
						</Link>
					</Menu>
				</Grid.Column>
				<Grid.Column width='12'>{children}</Grid.Column>
			</Grid>
		</Container>
	);
};
