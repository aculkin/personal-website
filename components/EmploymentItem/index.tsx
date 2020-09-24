import React from 'react'
// import Link from 'next/link'
import { Item, Button } from 'semantic-ui-react'

interface EmploymentInfo {
  companyName: string
  imageUrl: string
  startDate: string
  endDate: string
  description: string
  // linkUrl: string
  companyWebsiteLink: string
}

export const EmploymentItem: React.FC<EmploymentInfo> = ({
  companyName,
  imageUrl,
  startDate,
  endDate,
  description,
  // linkUrl,
  companyWebsiteLink,
}) => {
  return (
    <Item>
      <Item.Image src={imageUrl} />
      <Item.Content>
        <Item.Header>{companyName}</Item.Header>
        <Item.Meta>
          <span className="date">
            {startDate} - {endDate}
          </span>
        </Item.Meta>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          {/* <Link href={linkUrl}>
            <Button primary>Learn More</Button>
          </Link> */}
          <Button
            basic
            target="_blank"
            href={companyWebsiteLink}
            content={`${companyName} Website`}
            icon="external"
            labelPosition="right"
            secondary
            floated="right"
          />
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default EmploymentItem
