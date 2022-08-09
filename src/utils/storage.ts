export const STORAGE_KEY = 'demo-app:chats';

export const loadChats = () => {
  const tryValue = localStorage.getItem(STORAGE_KEY);
  try {
    const value = JSON.parse(tryValue as string);
    if (Array.isArray(value)) {
      return value;
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
