import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export type ContactType = { contacts: any; createContact: ({ id, name }: { id: string; name: string; }) => void; }

export const ContactsContext = React.createContext<ContactType | null>(null)

export function useContacts(){
  return React.useContext(ContactsContext)
}

export function ContactsProvider({children}: {children: React.ReactNode}) {
  const [contacts, setContacts] = useLocalStorage({key: 'contacts', initialValue: []})
  function createContact({id, name}:{id: string, name: string}){
    setContacts((prevContacts: any) => {
      return [...prevContacts, {id, name}]
    })
  }
  return (
    <ContactsContext.Provider value={{contacts, createContact}}>
      {children}
    </ContactsContext.Provider>
    ) 
}
