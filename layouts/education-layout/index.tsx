import React, { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Grid, Menu, Header, Container } from 'semantic-ui-react'

export const EducationLayout: React.FC = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter()
  return (
    <Container>
      <Grid>
        <Grid.Column width="4">
          <Menu vertical fluid pointing>
            <Link href="/education/lehigh" legacyBehavior>
              <Menu.Item
                name="lehigh"
                active={pathname === '/education/lehigh'}
              >
                <Header as="h4">Lehigh</Header>
                <p>Check out Lehigh</p>
              </Menu.Item>
            </Link>
            <Link href="/education/fullstack" legacyBehavior>
              <Menu.Item
                name="fullstack"
                active={pathname === '/education/fullstack'}
              >
                <Header as="h4">Fullstack</Header>
                <p>Check out Fullstack</p>
              </Menu.Item>
            </Link>
          </Menu>
        </Grid.Column>
        <Grid.Column width="12">{children}</Grid.Column>
      </Grid>
    </Container>
  );
}
