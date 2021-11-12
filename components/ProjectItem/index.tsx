import React from 'react'
import { Button, Segment, Image, Header, Grid, List } from 'semantic-ui-react'
import { getImageUrl } from '../../utility'
import { ProjectInfoInterface } from '../../interfaces/projects'

export const ProjectItem: React.FC<ProjectInfoInterface> = ({ project }) => {
  const {
    name,
    awsKey,
    startDate,
    endDate,
    description,
    features,
    link,
    linkName,
  } = project
  const featureArray = features?.split(';') || []
  return (
    <Segment raised style={{ padding: '15px' }}>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width="4">
            <Image
              href={link}
              target="_blank"
              fluid
              src={getImageUrl(awsKey)}
            />
          </Grid.Column>
          <Grid.Column width="7">
            <Header as="h2">
              {name}
              <Header.Subheader>
                {startDate} - {endDate}
              </Header.Subheader>
            </Header>
            <p>{description}</p>
          </Grid.Column>
          <Grid.Column width="5">
            {featureArray?.length > 0 && (
              <>
                <Header as="h3">Features:</Header>
                <List bulleted>
                  {featureArray?.map((feature, index) => {
                    return <List.Item key={index}>{feature}</List.Item>
                  })}
                </List>
              </>
            )}
            <Button
              basic
              fluid
              target="_blank"
              href={link}
              content={linkName}
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
