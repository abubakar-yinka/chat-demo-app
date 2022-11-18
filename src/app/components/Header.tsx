import React from 'react';
import { Flex, Avatar, AvatarBadge, Text } from '@chakra-ui/react';

interface Props {
  userName: string;
}

const Header: React.FC<Props> = ({ userName }) => {
  return (
    <Flex w="100%">
      <Avatar size="lg" name={userName}>
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Flex flexDirection="column" mx="5" justify="center">
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text color="green.500">Online</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
