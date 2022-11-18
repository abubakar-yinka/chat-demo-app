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
import { Message } from './slice/types';

interface Props {
  userName: string;
}

export const MESSAGE_HISTORY_SIZE = 25;

const Chat: React.FC<Props> = ({ userName }) => {
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  const userId = useSelector(selectUserId);
  const [inputMessage, setInputMessage] = React.useState<string>('');
  const [clicksOnLoadMore, setClicksOnLoadMore] = React.useState<number>(0);
  const [visibleMessages, setVisibleMessages] = React.useState<Message[]>();

  React.useEffect(() => {
    const computedLength = MESSAGE_HISTORY_SIZE * (clicksOnLoadMore + 1);
    const desiredMessages = messages.slice(-computedLength);
    setVisibleMessages(desiredMessages);
  }, [messages, clicksOnLoadMore]);

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
        <MessageList
          allMessages={messages}
          visibleMessages={visibleMessages}
          userName={userName}
          clicksOnLoadMore={clicksOnLoadMore}
          setClicksOnLoadMore={setClicksOnLoadMore}
        />
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
