import React, { useState } from 'react'
import Link from 'next/link'
import { Card, Image, Icon, Modal, Header, Button } from 'semantic-ui-react'

interface SkillInfo {
  name: string
  shortDescription: string
  description: string
  link: string
  imgLink: string
}

export const SkillItem: React.FC<SkillInfo> = ({
  name,
  shortDescription,
  description,
  link,
  imgLink,
}) => {
  const [modalOpen, setModalOpen] = useState(false)
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
          <Image size="medium" src={imgLink} wrapped bordered />
          <Modal.Description>
            <Header>{name}</Header>
            <p>{description}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {link && (
            <Link href={link}>
              <Button>
                <Icon name="external" />
                {name} Website
              </Button>
            </Link>
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
