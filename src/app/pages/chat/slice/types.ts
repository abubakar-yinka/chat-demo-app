// Define a type for the slice state
export type ChatState = {
  messages: Message[];
};
export interface Message {
  messageText: string;
  author: string;
  uid: string;
}
