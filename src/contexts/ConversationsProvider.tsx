import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export type ConversationType = { conversations: string[]; createConversation: ({ recipients, messages }: { recipients: string[]; messages: string[]; }) => void; }

export const ConversationsContext = React.createContext<ConversationType | null>(null)

export function ConversationsProvider({children}: {children: React.ReactNode}) {
  const [conversations, setConversations] = useLocalStorage({key: 'conversations', initialValue: []})
  function createConversation({recipients, messages}:{recipients: string[], messages: string[]}){
    setConversations((prevConversations: any) => {
      return [...prevConversations, {recipients, messages}]
    })
  }
  return (
    <ConversationsContext.Provider value={{conversations, createConversation}}>
      {children}
    </ConversationsContext.Provider>
    ) 
}
