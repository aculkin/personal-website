import React from "react";
import { Form } from "semantic-ui-react";

interface ContactMe {
	contactMeFormData: { name: string; email: string; message: string };
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ContactMeForm: React.FC<ContactMe> = ({
	contactMeFormData: { name, email, message },
	handleChange,
	handleTextAreaChange,
}) => {
	return (
		<Form>
			<Form.Group widths='equal'>
				<Form.Input
					onChange={handleChange}
					name='name'
					value={name}
					label='Name'
					placeholder='Tell me your name...'
				/>
				<Form.Input
					name='email'
					onChange={handleChange}
					value={email}
					label='Email'
					placeholder="What's a good email for you..."
				/>
			</Form.Group>
			<Form.TextArea
				name='message'
				onChange={handleTextAreaChange}
				label='Message'
				value={message}
				placeholder='What would you like to get in touch about...'
			/>
		</Form>
	);
};

export default ContactMe;
