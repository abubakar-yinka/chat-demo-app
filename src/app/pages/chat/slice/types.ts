// Define a type for the slice state
export type ChatState = {
  messages: Message[];
};
export interface Message {
  message: string;
  user: string;
  uid: string;
}
