import React from 'react'
import { ContactsContext, ContactType } from '../contexts/ContactsProvider'
import { ListGroup } from 'react-bootstrap'
export default function Contacts() {
  const { contacts } = React.useContext(ContactsContext) as ContactType
  return (
    <ListGroup variant='flush'>
      {contacts.map((contact: any) => (
        <ListGroup.Item key={contact.id}>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
