export const STORAGE_KEY = 'demo-app:chats';

export const loadChats = () => {
  const chatHistory = localStorage.getItem(STORAGE_KEY);
  try {
    const messages = JSON.parse(chatHistory as string);
    if (Array.isArray(messages)) {
      return messages;
    } else {
      return [];
    }
  } catch {
    return [];
  }
};

export const saveChats = (messages: any[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
};
