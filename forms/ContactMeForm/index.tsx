import React from 'react'
import { Form } from 'semantic-ui-react'

interface ContactMe {
  contactMeFormData: { name: string; email: string; message: string }
  handleChange: (value: string, event: { name: string; value: string }) => void
}

export const ContactMeForm: React.FC<ContactMe> = ({
  contactMeFormData: { name, email, message },
  handleChange,
}) => {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          onChange={handleChange}
          name="name"
          id="name"
          value={name}
          label="Name"
          placeholder="Name..."
        />
        <Form.Input
          name="email"
          onChange={handleChange}
          id="email"
          value={email}
          label="Email"
          placeholder="Email..."
        />
      </Form.Group>
      <Form.TextArea
        name="message"
        onChange={handleChange}
        value={message}
        placeholder="Message..."
      />
    </Form>
  )
}

export default ContactMe
