import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import HookForm from '../../components/HookForm';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { loginUser } from './slice';

const Auth: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (userName: string) => {
    const id = uuidv4();
    dispatch(loginUser({ userName, id, isAuthenticated: true }));
  };

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w={['100%', '100%', '40%']} h="90%" flexDir="column">
        <Box p={4}>
          <HookForm
            formLabel="Username"
            formName="userName"
            placeholder="Enter your username"
            btnText="Enter Chat"
            handleFormSubmit={handleSubmit}
          />
          <Text color={'red'} marginTop={5}>
            PS: Username is case-insensitive, using a taken username will continue the chat session
            of that user when using the same browser
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Auth;
