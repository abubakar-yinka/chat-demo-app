import { Flex } from '@chakra-ui/react';
import React from 'react';
import Divider from '../../components/Divider';
import MessageInput from '../../components/MessageInput';
import Header from '../../components/Header';
import MessageList from '../../components/MessageList';
import { useSelector } from 'react-redux';
import { selectMessages } from './slice/selectors';
import { selectUserId } from '../auth/slice/selectors';
import { useDispatch } from 'react-redux';
import { sendMessage } from './slice';

interface Props {
  userName: string;
}

const Chat: React.FC<Props> = ({ userName }) => {
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  const userId = useSelector(selectUserId);
  const [inputMessage, setInputMessage] = React.useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    dispatch(sendMessage({ uid: userId, messageText: inputMessage, author: userName }));
    setInputMessage('');
  };
  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w={['100%', '100%', '70%']} h="90%" flexDir="column">
        <Header userName={userName} />
        <Divider />
        <MessageList messages={messages} userName={userName} />
        <Divider />
        <MessageInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
