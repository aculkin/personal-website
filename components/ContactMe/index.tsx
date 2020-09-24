import React, { useState } from 'react'
import { Modal, Button, Container, Divider } from 'semantic-ui-react'
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
        <Container>
          <p>
            If you would like to get in touch with me, you can use the form
            below, or I can be reached by email at{' '}
            <a href="mailto:andrewsculkin@gmail.com">andrewsculkin@gmail.com</a>
          </p>
        </Container>
        <Divider hidden />
        <ContactMeForm
          contactMeFormData={contactMeFormData}
          handleChange={handleChange}
        />
        <div>{props.children}</div>
      </Modal.Content>
      <Modal.Actions>
        <Button floated="left" secondary onClick={() => setModalOpen(false)}>
          Nevermind
        </Button>
        <Button primary onClick={sendEmail}>
          Send Message
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
