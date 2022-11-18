import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Message } from '../pages/chat/slice/types';

interface Props {
  message: Message;
  isLoggedInUser: boolean;
  index: number;
}

const MessageBox: React.FC<Props> = ({ message, isLoggedInUser, index }) => {
  return (
    <React.Fragment>
      {isLoggedInUser ? (
        <Flex key={index} w="100%" justify="flex-end">
          <Flex bg="black" color="white" minW="100px" maxW="350px" my="1" p="3">
            <Text>{message.messageText}</Text>
          </Flex>
        </Flex>
      ) : (
        <Flex key={index} w="100%">
          <Avatar
            name={message.author}
            src={`https://ui-avatars.com/api/?name=${message.author}`}
            bg="blue.300"
          ></Avatar>
          <Flex bg="gray.100" color="black" minW="100px" maxW="350px" my="1" p="3">
            <Text>{message.messageText}</Text>
          </Flex>
        </Flex>
      )}
    </React.Fragment>
  );
};

export default MessageBox;
