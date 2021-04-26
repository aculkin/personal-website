import React, { useState } from 'react'
import {
  Card,
  Image,
  Icon,
  Modal,
  Header,
  Button,
  Rating,
  Popup,
} from 'semantic-ui-react'

const getPopupMessage = (
  proficiency: number,
  typeSingluar: string,
  name: string
) => {
  switch (proficiency) {
    case 3:
      return {
        header: 'Advanced',
        content: `This is a core ${typeSingluar} I've used a lot in my career. I've developed multiple projects or applications with ${name}.`,
      }
    case 2:
      return {
        header: 'Intermediate',
        content: `There are some aspects of this ${typeSingluar} I haven't explored, but I've covered most of the basics of ${name}.`,
      }
    case 1:
      return {
        header: 'Basic',
        content: `I've worked with ${name}, but only with the core features or a simpler use case of ${typeSingluar}.`,
      }
    default:
      return {
        header: 'Familiar',
        content: `I'm familiar with ${name} and its strengths and weaknesses, but I have not worked with it, or developed a project with it yet.`,
      }
  }
}

interface SkillInfo {
  type: string
  skill: {
    name: string
    shortDescription: string
    description: string
    link: string
    imgLink: string
    proficiency: number
  }
}

export const SkillItem: React.FC<SkillInfo> = ({ skill, type }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const {
    name,
    shortDescription,
    description,
    link,
    imgLink,
    proficiency,
  } = skill
  const { header, content } = getPopupMessage(proficiency, type, name)
  return (
    <>
      <Popup
        content={content}
        header={header}
        position="top center"
        trigger={
          <Card as="a" onClick={() => setModalOpen(true)}>
            <Image src={imgLink} wrapped ui={false} />
            <Card.Content>
              <Card.Header textAlign="center">{name}</Card.Header>
              <Card.Meta textAlign="center">{header}</Card.Meta>
              <Card.Meta textAlign="center">
                <Rating
                  icon="star"
                  defaultRating={proficiency}
                  maxRating={3}
                  disabled
                />
              </Card.Meta>

              <Card.Description>{shortDescription}</Card.Description>
            </Card.Content>
          </Card>
        }
      />
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
