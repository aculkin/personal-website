import React from 'react'
// import Link from 'next/link'
import { Item, Label, Icon, Button } from 'semantic-ui-react'

interface EducationInfo {
  school: {
    schoolName: string
    imageUrl: string
    schoolWebsiteUrl: string
    startDate: string
    endDate: string
    description: string
    degree?: string
    minor?: string
  }
}

export const EducationItem: React.FC<EducationInfo> = ({ school }) => {
  const {
    schoolName,
    imageUrl,
    startDate,
    endDate,
    description,
    schoolWebsiteUrl,
    degree,
    minor,
  } = school
  return (
    <Item>
      <Item.Image src={imageUrl} />

      <Item.Content>
        <Item.Header>{schoolName}</Item.Header>
        <Item.Meta>
          <span className="cinema">
            {startDate} - {endDate}
          </span>
        </Item.Meta>
        <Item.Description>{description}</Item.Description>
        <Item.Description>
          {degree && (
            <Label color="green">
              <Icon name="graduation" />
              Degree: <Label.Detail>{degree}</Label.Detail>
            </Label>
          )}
          {minor && (
            <Label color="teal">
              Minor: <Label.Detail>{minor}</Label.Detail>
            </Label>
          )}
        </Item.Description>
        <Item.Extra>
          <Button
            basic
            target="_blank"
            href={schoolWebsiteUrl}
            content={`${schoolName} Website`}
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

export default EducationItem
