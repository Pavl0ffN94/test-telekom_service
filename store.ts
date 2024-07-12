import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface Message {
  message: string;
  timestamp: string;
  isMine: boolean;
}

interface MessageStore {
  messages: Message[];
  addMessage: (message: Message) => void;
  editMessage: (timestamp: string, newMessage: string) => void;
  deleteMessage: (timestamp: string) => void;
}

const useMessageStore = create<MessageStore>()(
  persist(
    set => ({
      messages: [],
      addMessage: message => set(state => ({messages: [...state.messages, message]})),
      editMessage: (timestamp, newMessage) =>
        set(state => ({
          messages: state.messages.map(msg =>
            msg.timestamp === timestamp ? {...msg, message: newMessage} : msg,
          ),
        })),
      deleteMessage: timestamp =>
        set(state => ({
          messages: state.messages.filter(msg => msg.timestamp !== timestamp),
        })),
    }),
    {
      name: 'message-storage', // имя ключа в localStorage
    },
  ),
);

export default useMessageStore;
