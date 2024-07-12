import create from 'zustand';

interface Message {
  message: string;
  timestamp: string;
  isMine: boolean;
}

interface MessageState {
  messages: Message[];
  addMessage: (message: Message) => void;
}

const useMessageStore = create<MessageState>(set => ({
  messages: [],
  addMessage: message =>
    set(state => {
      const newMessages = [...state.messages, message];
      if (typeof window !== 'undefined') {
        localStorage.setItem('messages', JSON.stringify(newMessages));
      }
      return {messages: newMessages};
    }),
}));

if (typeof window !== 'undefined') {
  const savedMessages = localStorage.getItem('messages');
  if (savedMessages) {
    useMessageStore.setState({messages: JSON.parse(savedMessages)});
  }
}

export default useMessageStore;
