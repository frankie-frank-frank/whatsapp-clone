import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { ContactsContext, ContactType } from "../contexts/ContactsProvider"

export default function NewContactModal(props: {closeModal: () => void}) {
    const idRef = React.useRef<HTMLInputElement>(null)
    const nameRef = React.useRef<HTMLInputElement>(null)
    const { createContact } = React.useContext(ContactsContext) as ContactType
    function handleSubmit(e: React.SyntheticEvent){
        e.preventDefault()
        createContact({id: idRef.current?.value as string, name: nameRef.current?.value as string})
    }
    return (
    <>
        <Modal.Header closeButton>
            Create Contact
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Id</Form.Label>
                    <Form.Control type='text' ref={idRef} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' ref={nameRef} required/>
                </Form.Group>
                <Button type="submit" className="mt-4">Create</Button>
            </Form>
        </Modal.Body>
    </>
  )
}
