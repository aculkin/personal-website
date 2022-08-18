import React, { useState } from 'react'
import { Modal, Button, Container, Divider } from 'semantic-ui-react'
import emailjs, { init } from 'emailjs-com'
init('user_ioSsmmV57jkAZjF1BYOa8')

import { toast } from '../../utility'
import { ContactMeForm } from '../../forms/ContactMeForm'

export const ContactMe: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [contactMeFormData, setContactMeFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setContactMeFormData({
      ...contactMeFormData,
      [event.target.name]: event.target.value,
    })

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void =>
    setContactMeFormData({ ...contactMeFormData, message: event.target.value })

  const sendEmail = async (): Promise<void> => {
    try {
      setLoading(true)
      await emailjs.send(
        'service_597o3vb',
        'template_51o9pga',
        {
          from_name: contactMeFormData.name,
          message: contactMeFormData.message,
          reply_to: contactMeFormData.email,
        },
        'user_ioSsmmV57jkAZjF1BYOa8'
      )
      toast('Your message was sent succssfully', 'positive')
      setLoading(false)
      setModalOpen(false)
    } catch (error) {
      toast('Oops, there was an issue sending your message', 'negative')
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
            If you would like to get in touch with me, please use the form
            below.
          </p>
        </Container>
        <Divider hidden />
        <ContactMeForm
          contactMeFormData={contactMeFormData}
          handleChange={handleChange}
          handleTextAreaChange={handleTextAreaChange}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button floated="left" color="red" onClick={() => setModalOpen(false)}>
          Cancel
        </Button>
        <Button loading={loading} color="green" onClick={sendEmail}>
          Send Message
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
