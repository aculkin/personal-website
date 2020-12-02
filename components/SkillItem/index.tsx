import React, { useState } from 'react'
import { Card, Image, Icon, Modal, Header, Button } from 'semantic-ui-react'

interface SkillInfo {
  skill: {
    name: string
    shortDescription: string
    description: string
    link: string
    imgLink: string
  }
}

export const SkillItem: React.FC<SkillInfo> = ({ skill }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { name, shortDescription, description, link, imgLink } = skill
  return (
    <>
      <Card as="a" onClick={() => setModalOpen(true)}>
        <Image src={imgLink} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{shortDescription}</Card.Description>
        </Card.Content>
      </Card>
      <Modal
        closeIcon
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onOpen={() => setModalOpen(true)}
      >
        <Header content={name} />
        <Modal.Content image>
          <Image size="large" src={imgLink} wrapped bordered />
          <Modal.Description>
            <Header>{name}</Header>
            <p>{description}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {link && (
            <Button href={link} target="_blank">
              <Icon name="external" />
              {name} Website
            </Button>
          )}
          <Button color="red" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default SkillItem
