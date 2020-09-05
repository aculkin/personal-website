import React, { useState } from 'react'
import { Modal, Button } from 'semantic-ui-react'

import { ContactMeForm } from '../../forms/ContactMeForm'

export const ContactMe: React.FC = (props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [contactMeFormData, setContactMeFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e, { name, value }) => {
    setContactMeFormData({ [name]: value })
  }
  return (
    <Modal
      closeIcon
      trigger={
        <Button onClick={setModalOpen} as="a" primary>
          Contact Me
        </Button>
      }
      dimmer
      open={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <Modal.Header>Contact Me!</Modal.Header>
      <Modal.Content>
        <ContactMeForm
          contactMeFormData={contactMeFormData}
          handleChange={handleChange}
        />
        <div>{props.children}</div>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => setModalOpen(false)}>
          Nah, nevermind
        </Button>
        <Button positive onClick={() => setModalOpen(false)}>
          Agree
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
