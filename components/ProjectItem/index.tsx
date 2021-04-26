import React from 'react'
import { Button, Segment, Image, Header, Grid, List } from 'semantic-ui-react'

interface ProjectInfo {
  project: {
    projectName: string
    imageUrl: string
    ongoing?: boolean
    startDate: string
    endDate?: string
    description: string
    features?: string[]
    url: string
  }
}

export const ProjectItem: React.FC<ProjectInfo> = ({ project }) => {
  const {
    projectName,
    imageUrl,
    ongoing,
    startDate,
    endDate,
    description,
    features,
    url,
  } = project
  return (
    <Segment style={{ padding: '30px' }}>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width="4">
            <Image href={url} target="_blank" fluid src={imageUrl} />
          </Grid.Column>
          <Grid.Column width="6">
            <Header as="h2">
              {projectName}
              <Header.Subheader>
                {startDate} - {ongoing ? 'In progress' : endDate}
              </Header.Subheader>
            </Header>
            <p>{description}</p>
          </Grid.Column>
          <Grid.Column width="6">
            <Header as="h3">Features:</Header>
            {features?.length > 0 && (
              <List bulleted>
                {features.map((feature, index) => {
                  return <List.Item key={index}>{feature}</List.Item>
                })}
              </List>
            )}
            <Button
              basic
              target="_blank"
              href={url}
              content={`${projectName} Website`}
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

export default ProjectItem
