import Link from 'next/link'
import { Card, Icon } from 'semantic-ui-react'

interface PageInfo {
  page: {
    link: string
    name: string
    iconName: string
    description: string
  }
}

export const HomePageCard: React.FC<PageInfo> = ({ page }) => {
  const { link, name, iconName, description } = page
  return (
    <Link href={link}>
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
  )
}

export default HomePageCard
