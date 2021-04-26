import React from 'react'
import { Button, Segment, Image, Header, Grid, Label } from 'semantic-ui-react'

interface EmploymentInfo {
  company: {
    companyName: string
    internship?: boolean
    imageUrl: string
    startDate: string
    endDate: string
    description: string
    companyWebsiteLink: string
  }
}

export const EmploymentItem: React.FC<EmploymentInfo> = ({ company }) => {
  const {
    companyName,
    internship,
    imageUrl,
    startDate,
    endDate,
    description,
    companyWebsiteLink,
  } = company
  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <Image
              href={companyWebsiteLink}
              target="_blank"
              fluid
              src={imageUrl}
            />
          </Grid.Column>
          <Grid.Column width="12">
            <Header as="h2">
              {companyName}
              <Header.Subheader>
                {startDate} - {endDate}
                {internship && <Label color="green">Internship</Label>}
              </Header.Subheader>
            </Header>
            <p>{description}</p>
            <Button
              basic
              target="_blank"
              href={companyWebsiteLink}
              content={`${companyName} Website`}
              icon="external"
              labelPosition="right"
              secondary
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default EmploymentItem
