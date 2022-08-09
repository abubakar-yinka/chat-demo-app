import React, { useEffect, useRef } from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import { Message } from '../pages/chat/slice/types';

interface Props {
  messages: Message[];
  userName: string;
}

const MessageList: React.FC<Props> = ({ messages, userName }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef() as React.LegacyRef<HTMLDivElement> | undefined;
    useEffect(() => ((elementRef as any).current as any).scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((message, index) => {
        if (message.author.toLowerCase() === userName.toLowerCase()) {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex bg="black" color="white" minW="100px" maxW="350px" my="1" p="3">
                <Text>{message.messageText}</Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
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
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default MessageList;
