import React, { useState, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Sidebar, Menu, Icon } from "semantic-ui-react";

import { Media } from "./index";
import { navigationItems } from "./navigationItems";
import { ContactMe } from "../ContactMe";

interface Props {
	children: ReactNode;
}

export const MobileNav: React.FC<Props> = ({ children }) => {
	const [sidebarOpened, setSidebarOpened] = useState(false);
	const { pathname } = useRouter();
	return (
		<Media at="mobile">
			<Sidebar.Pushable>
				<Sidebar
					as={Menu}
					animation="overlay"
					inverted
					onHide={() => setSidebarOpened(false)}
					vertical
					visible={sidebarOpened}
				>
					<Menu.Item as="a" onClick={() => setSidebarOpened(false)}>
						<Icon name="close" />
						Close
					</Menu.Item>
					<Link href={"/"} legacyBehavior>
						<Menu.Item active={pathname === "/"} as="a">
							Andrew Culkin
						</Menu.Item>
					</Link>
					{navigationItems?.map(({ name, address }, index) => {
						return (
							<Link href={address} key={name || index} legacyBehavior>
								<Menu.Item active={pathname === address} as="a">
									{name}
								</Menu.Item>
							</Link>
						);
					})}
					<Menu.Item onClick={() => setSidebarOpened(false)}>
						<ContactMe />
					</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Menu fixed="top" inverted>
						<Menu.Item onClick={() => setSidebarOpened(!sidebarOpened)}>
							<Icon name="sidebar" />
						</Menu.Item>
						<Link href={"/"} legacyBehavior>
							<Menu.Item as="a" header active={pathname === "/"}>
								Andrew Culkin
							</Menu.Item>
						</Link>
						<Menu.Item position="right">
							<ContactMe />
						</Menu.Item>
					</Menu>
					{children}
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		</Media>
	);
};
