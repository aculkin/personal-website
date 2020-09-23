import React, { useState } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import emailjs, { init } from 'emailjs-com'

init('user_ioSsmmV57jkAZjF1BYOa8')

import { ContactMeForm } from '../../forms/ContactMeForm'

export const ContactMe: React.FC = (props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [contactMeFormData, setContactMeFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (_e, { name, value }): void => {
    console.log(name)
    setContactMeFormData({ ...contactMeFormData, [name]: value })
  }

  const sendEmail = (): void => {
    try {
      emailjs.send(
        'service_597o3vb',
        'template_51o9pga',
        {
          from_name: contactMeFormData.name,
          message: contactMeFormData.message,
          reply_to: contactMeFormData.email,
        },
        'user_ioSsmmV57jkAZjF1BYOa8'
      )
      console.log('sending email')
      setModalOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal
      closeIcon
      trigger={
        <Button onClick={() => setModalOpen(true)} as="a" primary>
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
        <Button positive onClick={sendEmail}>
          Agree
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
