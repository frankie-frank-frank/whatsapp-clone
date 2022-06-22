import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid"

export default function Login({onIdSubmit}: {onIdSubmit: React.Dispatch<React.SetStateAction<string>>}) {
  const idRef = React.useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent){
    e.preventDefault()

    if(idRef && idRef.current){
    onIdSubmit(idRef.current.value)
    }
  }
  function createNewId(){
    onIdSubmit(uuidV4())
  }
  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <div className="mt-3 d-flex gap-4">
          <Button type="submit">Login</Button>
          <Button onClick={createNewId} variant="secondary">Create A New Id</Button>
        </div>
      </Form>
    </Container>
  );
}
