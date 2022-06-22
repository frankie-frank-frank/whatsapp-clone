import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { ContactsContext, ContactType } from "../contexts/ContactsProvider";
import { ConversationsContext, ConversationType } from "../contexts/ConversationsProvider"

export default function NewConversationModal({closeModal}: {
  closeModal: () => void;
}) {
  const { contacts } = React.useContext(ContactsContext) as ContactType;
  const [selectedContactIds, setSelectedContactIds] = React.useState<any>([])
  const { createConversation } = React.useContext(ConversationsContext) as ConversationType

  function handleSubmit(e: React.SyntheticEvent){
    e.preventDefault()
    createConversation(selectedContactIds)
    closeModal()
}

  function handleCheckboxChange({contactId}: {contactId: any}){
    setSelectedContactIds((prevSelectedContactIds: string[]) => {
    console.log(prevSelectedContactIds)
    if(prevSelectedContactIds.includes(contactId)){
      return prevSelectedContactIds.filter((prevId: string) => {
        return contactId !== prevId
      })
    }else {
      return [...prevSelectedContactIds, contactId]
    }
  })}
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact: any) => (
            <Form.Group controlId={contact['id']} key={contact['id']}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact['id'])}
                onChange={() => handleCheckboxChange(contact['id'])}
              ></Form.Check>
            </Form.Group>
          ))}
          <Button type="submit" className="mt-4">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
